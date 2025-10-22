import express from "express";
import multer from "multer";
import Project from "../models/Project.js";

const router = express.Router()

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, "uploads/")
    },
    filename: function(req, file, cb){
        cb(null, Date.now() + "-" +file.originalname)
    }
})

const upload = multer({ storage})

router.post("/", upload.single("image"), async (req, res) => {
  try {
    const { name, adress, text, done, startDate, finishDate } = req.body;
    const imagePath = req.file ? `/uploads/${req.file.filename}` : "";

    const project = await Project.create({
      name,
      adress,
      text,
      image: imagePath,
      done: done === "true" || done === true,
      startDate: startDate ? new Date(startDate) : undefined,     // parse string to Date
      finishDate: finishDate ? new Date(finishDate) : undefined,  // parse string to Date
    });

    res.status(201).json(project);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create project" });
  }
});

router.put("/:id", upload.single("image"), async (req, res) => {
  try {
    const { name, adress, text, done, startDate, finishDate } = req.body;

    const updatedData = {
      name,
      adress,
      text,
      done: done === "true" || done === true,
    };

    if (req.file) {
      updatedData.image = `/uploads/${req.file.filename}`;
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
    res.status(500).json({ error: err.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch projects" });
  }
}); 

router.get("/past", async (req, res) => {
  try {
    const projects = await Project.find({ done: true });
    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch past projects" });
  }
});

// Future projects (done = false)
router.get("/future", async (req, res) => {
  try {
    const projects = await Project.find({ done: false });
    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch future projects" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      return res.status(404).json({ error: "Project not found" });
    }
    res.json(project);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch project" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deletedProject = await Project.findByIdAndDelete(req.params.id);
    if (!deletedProject) return res.status(404).json({ error: "Project not found" });

    res.json({ message: "Project deleted successfully" });
  } catch (err) {
    console.error("Delete project error:", err);
    res.status(500).json({ error: "Failed to delete project" });
  }
});
export default router;