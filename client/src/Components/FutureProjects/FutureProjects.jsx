import React, {useState, useEffect} from 'react'
import { Navbar } from '../Navbar/Navbar'
import { Footer } from '../Footer/Footer'
import axios from "axios"
import { useNavigate } from 'react-router-dom'

export const FutureProjects  = ({ isLoggedIn }) => {
    const [projects, setProjects] = useState([])
      const API_URL = process.env.REACT_APP_API_URL || "http://localhost:4000";

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const res = await axios.get(`${API_URL}/api/projects/future`)
                setProjects(res.data)
            } catch (err) {
                console.error("Failed to fetch projects", err)
            }
        }
        fetchProjects()
    }, [])

    const navigate = useNavigate();

  const handleEdit = (id) => {
    navigate(`/editproject/${id}`);
  };

    const deleteProject = async (id) => {
    if (!window.confirm("Are you sure you want to delete this project?")) return;
    try {
      await axios.delete(`http://localhost:4000/api/projects/${id}`);
      setProjects(projects.filter((projects) => projects._id !== id)); // remove from state
    } catch (err) {
      console.error(err);
    }
  };


  return (
  <div>
    <Navbar />
    <div className='bg-white text-dark py-2'></div>
    <div className="bg-dark text-dark py-3 ml-1 mt-5">
      <h1 className="fw-bold ms-3 text-light">GELECEK PROJELERİMİZ</h1>
    </div>
    <div className='container mt-3 mb-3'>
      {projects.map((project) => (
        <div className="row mb-4" key={project._id}>
          <div className='col-md-6 dark p-4'>
            <h1>{project.name}</h1>
            <h3 className='d-inline'>Adres: </h3>
            <h3 className='d-inline'>{project.adress}</h3>
            <p>{project.text}</p>

            {/* Start and Finish Dates */}
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

          <div className='col-md-6'>
            <div className='card bg-dark'>
              <div className='card-body mx-auto'>
                {project.image && (
                  <img
                    src={`http://localhost:4000${project.image}`}
                    alt={project.name}
                    className="img-fluid"
                  />
                )}
              </div>
            </div>
          </div>

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

export default FutureProjects