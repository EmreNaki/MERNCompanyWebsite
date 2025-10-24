import express from "express";
import multer from "multer";
import Project from "../models/Project.js";
import cloudinary from "../config/cloudinary.js";
import fs from "fs";

const router = express.Router();
if (!fs.existsSync("uploads")) {
  fs.mkdirSync("uploads");
}
// Multer stores files temporarily before upload
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // temporary local folder
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

// CREATE project and upload image to Cloudinary
// CREATE project with up to 4 images
router.post("/", upload.array("images", 4), async (req, res) => {
  try {
    const { name, adress, text, done, startDate, finishDate } = req.body;
    const imageUrls = [];

    // Upload each selected image to Cloudinary
    if (req.files && req.files.length > 0) {
      for (const file of req.files) {
        const result = await cloudinary.uploader.upload(file.path, {
          folder: "projects",
        });
        imageUrls.push(result.secure_url);
        fs.unlinkSync(file.path); // remove temp file
      }
    }

    const project = await Project.create({
      name,
      adress,
      text,
      images: imageUrls, // 👈 stores array instead of single URL
      done: done === "true" || done === true,
      startDate: startDate ? new Date(startDate) : undefined,
      finishDate: finishDate ? new Date(finishDate) : undefined,
    });

    res.status(201).json(project);
  } catch (err) {
    console.error("Create project error:", err);
    res.status(500).json({ error: "Failed to create project" });
  }
});


// UPDATE project (optionally change images)
router.put("/:id", upload.array("images", 4), async (req, res) => {
  try {
    const { name, adress, text, done, startDate, finishDate } = req.body;
    const updatedData = {
      name,
      adress,
      text,
      done: done === "true" || done === true,
    };

    if (req.files && req.files.length > 0) {
      const imageUrls = [];
      for (const file of req.files) {
        const result = await cloudinary.uploader.upload(file.path, {
          folder: "projects",
        });
        imageUrls.push(result.secure_url);
        fs.unlinkSync(file.path);
      }
      updatedData.images = imageUrls;
    }

    if (startDate) updatedData.startDate = new Date(startDate);
    if (finishDate) updatedData.finishDate = new Date(finishDate);

    const updatedProject = await Project.findByIdAndUpdate(
      req.params.id,
      updatedData,
      { new: true }
    );

    res.json(updatedProject);
  } catch (err) {
    console.error("Update project error:", err);
    res.status(500).json({ error: "Failed to update project" });
  }
});


// GET all projects
router.get("/", async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch projects" });
  }
});

// GET past projects
router.get("/past", async (req, res) => {
  try {
    const projects = await Project.find({ done: true });
    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch past projects" });
  }
});

// GET future projects
router.get("/future", async (req, res) => {
  try {
    const projects = await Project.find({ done: false });
    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch future projects" });
  }
});

// GET project by ID
router.get("/:id", async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({ error: "Project not found" });
    res.json(project);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch project" });
  }
});

// DELETE project
router.delete("/:id", async (req, res) => {
  try {
    const deletedProject = await Project.findByIdAndDelete(req.params.id);
    if (!deletedProject)
      return res.status(404).json({ error: "Project not found" });

    res.json({ message: "Project deleted successfully" });
  } catch (err) {
    console.error("Delete project error:", err);
    res.status(500).json({ error: "Failed to delete project" });
  }
});

export default router;
