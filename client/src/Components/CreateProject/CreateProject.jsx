import React, { useState } from 'react';
import { Navbar } from '../Navbar/Navbar';
import { Footer } from '../Footer/Footer';
import axios from "axios";

const CreateProject = () => {
  const [name, setName] = useState("");
  const [adress, setAdress] = useState("");
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);
  const [done, setDone] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [finishDate, setFinishDate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("adress", adress);
      formData.append("text", text);
      formData.append("image", image); // from e.target.files[0]
      formData.append("done", done);
      formData.append("startDate", startDate);
      formData.append("finishDate", finishDate);

      await axios.post("http://localhost:4000/api/projects", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("Form submitted!");
    } catch (err) {
      console.error(err);
      alert("Error submitting form");
    }
  };

  return (
    <div>
      <Navbar />

      <form className="m-3 p-5" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="projectName">Proje İsmi</label>
          <textarea
            className="form-control"
            id="projectName"
            rows="1"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="projectAdress">Adres</label>
          <textarea
            className="form-control"
            id="projectAdress"
            rows="2"
            value={adress}
            onChange={(e) => setAdress(e.target.value)}
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="image" className="form-label">
            Upload Image
          </label>
          <input
            type="file"
            className="form-control"
            id="image"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Açıklama</label>
          <textarea
            className="form-control"
            id="description"
            rows="5"
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="projectType">Projenizin türünü seçin</label>
          <select
            className="form-control"
            id="projectType"
            value={done}
            onChange={(e) => setDone(e.target.value === "true")}
          >
            <option value="true">Tamamlanan</option>
            <option value="false">Gelecek</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="startDate">Başlangıç Tarihi</label>
          <input
            type="date"
            className="form-control"
            id="startDate"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="finishDate">Bitiş Tarihi</label>
          <input
            type="date"
            className="form-control"
            id="finishDate"
            value={finishDate}
            onChange={(e) => setFinishDate(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary mt-3">
          Gönder
        </button>
      </form>

      <Footer />
    </div>
  );
};

export default CreateProject;
