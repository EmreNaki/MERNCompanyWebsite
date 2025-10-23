import React from 'react'
import logo2 from "../../assets/logo2.png"
import { FaBuilding, FaProjectDiagram, FaDraftingCompass, FaHammer, FaIndustry } from "react-icons/fa";

const Services = () => {
  return (
  <div>
    <div className="parallax-section">
      <div className="container my-5">
        <h1 className="mx-auto text-center fw-bold text-light custom-underline p-3 m-2">
          HİZMETLERİMİZ
        </h1>

        {/* First row - 3 cards */}
        <div className="row m-4 ">
          <div className="col-md-4 mb-3">
            <div className="card h-100 text-center p-4">
              <FaBuilding size={50} className="mx-auto mb-3 text-dark" />
              <h5 className="card-title">Anahtar Teslim Konut Projeleri</h5>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="card h-100 text-center p-4">
              <FaProjectDiagram size={50} className="mx-auto mb-3 text-dark" />
              <h5 className="card-title">Yap-Sat Proje Geliştirme</h5>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="card h-100 text-center p-4">
              <FaDraftingCompass size={50} className="mx-auto mb-3 text-dark" />
              <h5 className="card-title">Mimari ve Mühendislik Tasarımı</h5>
            </div>
          </div>
        </div>

        {/* Second row - 2 cards centered */}
        <div className="row justify-content-center">
          <div className="col-md-5 mb-3">
            <div className="card h-100 text-center p-4">
              <FaHammer size={50} className="mx-auto mb-3 text-dark" />
              <h5 className="card-title">Kentsel Dönüşüm ve Yenileme</h5>
            </div>
          </div>

          <div className="col-md-5 mb-3">
            <div className="card h-100 text-center p-4">
              <FaIndustry size={50} className="mx-auto mb-3 text-dark" />
              <h5 className="card-title">Ticari ve Endüstriyel Yapılar</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
}

export default Services