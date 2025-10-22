import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Navbar } from "../Navbar/Navbar";
import { Footer } from "../Footer/Footer";

export const EditProject = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [adress, setAdress] = useState("");
  const [text, setText] = useState("");
  const [done, setDone] = useState(false);
  const [image, setImage] = useState("");
  const [newImage, setNewImage] = useState(null);
  const [startDate, setStartDate] = useState("");
  const [finishDate, setFinishDate] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await axios.get(`http://localhost:4000/api/projects/${id}`);
        setName(res.data.name);
        setAdress(res.data.adress);
        setText(res.data.text);
        setDone(res.data.done);
        setImage(res.data.image);
        setStartDate(res.data.startDate ? res.data.startDate.split("T")[0] : "");
        setFinishDate(res.data.finishDate ? res.data.finishDate.split("T")[0] : "");
        setLoading(false);
      } catch (err) {
        console.error("❌ Error fetching project:", err);
      }
    };

    fetchProject();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("adress", adress);
      formData.append("text", text);
      formData.append("done", done);
      formData.append("startDate", startDate);
      formData.append("finishDate", finishDate);
      if (newImage) {
        formData.append("image", newImage);
      }

      await axios.put(`http://localhost:4000/api/projects/${id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("✅ Project updated!");
      navigate("/projects");
    } catch (err) {
      console.error("❌ Error updating project:", err);
      alert("Update failed");
    }
  };

  if (loading) return <p className="text-center mt-5">Loading project...</p>;

  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <h2>Edit Project</h2>
        <form onSubmit={handleUpdate} className="mt-4">
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Adress</label>
            <input
              type="text"
              className="form-control"
              value={adress}
              onChange={(e) => setAdress(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Text</label>
            <textarea
              className="form-control"
              rows="4"
              value={text}
              onChange={(e) => setText(e.target.value)}
            ></textarea>
          </div>

          <div className="mb-3">
            <label className="form-label">Current Image</label>
            {image && (
              <img
                src={`http://localhost:4000${image}`}
                alt="Preview"
                className="d-block mb-2"
                style={{ maxWidth: "200px", borderRadius: "8px" }}
              />
            )}
          </div>

          <div className="mb-3">
            <label className="form-label">Upload New Image</label>
            <input
              type="file"
              className="form-control"
              onChange={(e) => setNewImage(e.target.files[0])}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="doneSelect" className="form-label">Project Status</label>
            <select
              id="doneSelect"
              className="form-select"
              value={done ? "true" : "false"}
              onChange={(e) => setDone(e.target.value === "true")}
            >
              <option value="false">Future Project</option>
              <option value="true">Past Project</option>
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="startDate" className="form-label">Start Date</label>
            <input
              type="date"
              id="startDate"
              className="form-control"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="finishDate" className="form-label">Finish Date</label>
            <input
              type="date"
              id="finishDate"
              className="form-control"
              value={finishDate}
              onChange={(e) => setFinishDate(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-success">
            Save Changes
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};
