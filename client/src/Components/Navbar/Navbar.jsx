import React from 'react'
import {Link} from "react-router-dom"
import companylogo from "../../assets/companylogo.png"



export const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
   const handleLogout = () => {
    localStorage.removeItem("token"); // remove token
    localStorage.removeItem("username"); // optional
    setIsLoggedIn(false); // update state
    window.location.href = "/login"; // redirect if needed
  };


  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <img src={companylogo} alt="Description" className='company-logo p-2' />
      
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              ANASAYFA <span className="sr-only"></span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              HAKKIMIZDA
            </Link>
          </li>
          
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              PROJELERİMİZ
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <Link className="dropdown-item" to="/PastProjects">
                  TAMAMLANAN PROJELERİMİZ
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/FutureProjects">
                  GELECEK PROJELERİMİZ
                </Link>
              </li>
              
            </ul>
          </li>
          <li className="nav-item pe-3">
            <Link className="nav-link pe-1" to="/contact">
              İLETİŞİM
            </Link>
          </li>
          <li>
            {isLoggedIn && (
        <button className="btn btn-danger" onClick={handleLogout}>
          Logout
        </button>
      )}
          </li>
        </ul>
        
      </div>
    </nav>
    </div>
  )
}
