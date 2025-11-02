import React, { useState, useEffect } from "react";
import { Navbar } from "../Navbar/Navbar";
import { Footer } from "../Footer/Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const PastProjects = ({ isLoggedIn }) => {
  const [projects, setProjects] = useState([]);
  const API_URL = process.env.REACT_APP_API_URL || "http://localhost:4000";
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axios.get(`${API_URL}/api/projects/past`);
        setProjects(res.data);
      } catch (err) {
        console.error("Failed to fetch projects", err);
      }
    };
    fetchProjects();
  }, [API_URL]);

  const handleEdit = (id) => {
    navigate(`/editproject/${id}`);
  };

  const deleteProject = async (id) => {
    if (!window.confirm("Are you sure you want to delete this project?")) return;
    try {
      await axios.delete(`${API_URL}/api/projects/${id}`);
      setProjects(projects.filter((p) => p._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="bg-white text-dark py-2"></div>
      <div className="bg-dark text-dark py-3 ml-1 mt-5">
        <h1 className="fw-bold text-light ms-3">TAMAMLANAN PROJELERİMİZ</h1>
      </div>
      <div className='container-fluid bg-image-overlay4 d-flex flex-column mt-3 justify-content-center align-items-center'></div>
        <div className="text-box">

          <h3 className='text-center text-dark d-flex justify-content-center align-items-center pt-5'>Cömertler Yapı olarak bugüne kadar hayata geçirdiğimiz projelerde güven, estetik ve dayanıklılığı bir araya getirdik. Her yapıda çağdaş mimariyi, kaliteli malzeme kullanımını ve işçilikte mükemmelliği ön planda tuttuk. Zamanında teslim ve müşteri memnuniyeti ilkesiyle hareket ederek sektörde kalıcı bir iz bıraktık. Tamamlanan projelerimiz, gelecekteki çalışmalarımızın en güçlü referansıdır.</h3>
        </div>
                    <hr className="border-2 border-dark m-3" />

      <div className="container mt-3 mb-3">
        {projects.map((project) => (
          <div className="row mb-4" key={project._id}>
            {/* Left column - Project text */}
            <div className="col-md-6 text-dark p-4">
              <h1>{project.name}</h1>
              <h3 className="d-inline">Adres: </h3>
              <h3 className="d-inline">{project.adress}</h3>
              <p>{project.text}</p>

              {project.startDate && (
                <p>
                  <strong>Başlangıç Tarihi:</strong>{" "}
                  {new Date(project.startDate).toLocaleDateString()}
                </p>
              )}
              {project.finishDate && (
                <p>
                  <strong>Bitiş Tarihi:</strong>{" "}
                  {new Date(project.finishDate).toLocaleDateString()}
                </p>
              )}
            </div>

            {/* Right column - Carousel */}
            <div className="col-md-6">
              <div className="card bg-dark">
                <div className="card-body mx-auto">
                  {project.images && project.images.length > 0 ? (
                    <div
                      id={`carousel-${project._id}`}
                      className="carousel slide"
                      data-bs-ride="carousel"
                    >
                      <div className="carousel-inner">
                        {project.images.map((img, index) => (
                          <div
                            key={index}
                            className={`carousel-item ${
                              index === 0 ? "active" : ""
                            }`}
                          >
                            <img
                              src={
                                img.startsWith("http")
                                  ? img
                                  : `${API_URL}${img}`
                              }
                              alt={`${project.name} ${index + 1}`}
                              className="d-block w-100 img-fluid rounded"
                            />
                          </div>
                        ))}
                      </div>

                      {project.images.length > 1 && (
                        <>
                          <button
                            className="carousel-control-prev"
                            type="button"
                            data-bs-target={`#carousel-${project._id}`}
                            data-bs-slide="prev"
                          >
                            <span
                              className="carousel-control-prev-icon"
                              aria-hidden="true"
                            ></span>
                            <span className="visually-hidden">Previous</span>
                          </button>
                          <button
                            className="carousel-control-next"
                            type="button"
                            data-bs-target={`#carousel-${project._id}`}
                            data-bs-slide="next"
                          >
                            <span
                              className="carousel-control-next-icon"
                              aria-hidden="true"
                            ></span>
                            <span className="visually-hidden">Next</span>
                          </button>
                        </>
                      )}
                    </div>
                  ) : (
                    <p className="text-light">No images available</p>
                  )}
                </div>
              </div>
            </div>

            {/* Admin Buttons */}
            {isLoggedIn && (
              <div className="mt-2">
                <button
                  className="btn btn-warning me-2"
                  onClick={() => handleEdit(project._id)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteProject(project._id)}
                >
                  Delete
                </button>
              </div>
            )}

            <hr className="border-2 border-dark m-3" />
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default PastProjects;
