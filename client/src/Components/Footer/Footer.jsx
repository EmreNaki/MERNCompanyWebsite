import React from 'react'
import { FaFacebookF, FaTwitter, FaGoogle, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import companylogo from "../../assets/companylogo.png"


export const Footer = () => {
  return (
    <div>
       
<footer className="text-center text-lg-start bg-dark text-light bg-dark">
      {/* Section: Social media */}
      <section className="d-flex justify-content-center justify-content-lg-between py-2 border-bottom">
        {/* Left */}
        <div className="me-3 d-none d-lg-block small">
          Sosyal medyadan bize ulaşın:
        </div>

        {/* Right */}
        <div>
  <a href="#" className="me-2 text-light"><FaFacebookF /></a>

  <a href="#" className="me-2 text-light"><FaInstagram /></a>
  
</div>
      </section>

      {/* Section: Links */}
      <section>
        <div className="container text-center text-md-start mt-3">
          <div className="row mt-2">
            {/* Company */}
            <div className="col-md-4 mx-auto mb-2">
              
                <img src={companylogo} alt="Description" className='company-logo2' />
              
            </div>

            {/* Useful links */}
            <div className="col-md-4 mx-auto mb-2">
              <h6 className="text-uppercase fw-bold mb-2">NAVİGASYON</h6>
              <p className="mb-1"><Link to="/" className="text-reset small">Anasayfa</Link></p>
              <p className="mb-1"><Link to="/about" className="text-reset small">Hakkımızda</Link></p>
              <p className="mb-1"><Link to="/pastprojects" className="text-reset small">Geçmiş Projelerimiz</Link></p>
              <p className="mb-1"><Link to="/futureprojects" className="text-reset small">Gelecek Projelerimiz</Link></p>
              <p className="mb-1"><Link to="/contact" className="text-reset small">Bize Ulaşın</Link></p>
            </div>

            {/* Contact */}
            <div className="col-md-4 mx-auto mb-2">
              <h6 className="text-uppercase fw-bold mb-2">ADRES</h6>
              <p className="small mb-1"><i className="fas fa-home me-2"></i>Hacı Abdi Mah., 30 Ağustos Cd. No:9/B, 48200 Milas/Muğla</p>
              <p className="small mb-1"><i className="fas fa-envelope me-2"></i>info@example.com</p>
              <p className="small mb-1"><i className="fas fa-phone me-2"></i>+ 01 234 567 88</p>
              <p className="small mb-0"><i className="fas fa-print me-2"></i>+ 01 234 567 89</p>
            </div>
          </div>
        </div>
      </section>

      {/* Copyright */}
      <div
        className="text-center py-2"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)", fontSize: "0.85rem" }}
      >
        © 2021 Copyright:{" "}
        <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
          MDBootstrap.com
        </a>
      </div>
    </footer>

    </div>
  )
}
