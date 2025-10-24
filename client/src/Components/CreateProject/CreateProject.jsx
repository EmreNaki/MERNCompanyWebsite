import React, { useState } from 'react';
import { Navbar } from '../Navbar/Navbar';
import { Footer } from '../Footer/Footer';
import axios from "axios";

const CreateProject = () => {
  const [name, setName] = useState("");
  const [adress, setAdress] = useState("");
  const [text, setText] = useState("");
  const [images, setImages] = useState([]); // multiple images
  const [done, setDone] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [finishDate, setFinishDate] = useState("");

  const API_URL = process.env.REACT_APP_API_URL || "http://localhost:4000";

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("adress", adress);
      formData.append("text", text);
      formData.append("done", done);
      formData.append("startDate", startDate);
      formData.append("finishDate", finishDate);

      // Append all selected images
      for (let i = 0; i < images.length; i++) {
        formData.append("images", images[i]);
      }

      await axios.post(`${API_URL}/api/projects`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("Proje başarıyla oluşturuldu!");
      setName("");
      setAdress("");
      setText("");
      setImages([]);
      setDone(false);
      setStartDate("");
      setFinishDate("");
    } catch (err) {
      console.error(err);
      alert("Proje oluşturulurken bir hata oluştu!");
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
          <label htmlFor="images" className="form-label">
            1–4 Görsel Yükle
          </label>
          <input
            type="file"
            className="form-control"
            id="images"
            accept="image/*"
            multiple
            onChange={(e) => setImages([...e.target.files])}
          />
          {images.length > 0 && (
            <p className="text-muted mt-2">
              {images.length} dosya seçildi
            </p>
          )}
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
