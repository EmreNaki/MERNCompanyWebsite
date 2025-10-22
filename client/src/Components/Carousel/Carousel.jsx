import React from 'react'
import construction1 from "../../assets/construction1.png"
import construction2 from "../../assets/construction2.png"
import construction3 from "../../assets/construction3.jpg"


export const Carousel = () => {
  return (
    <div>
        <div id="carouselExample" className="carousel slide m-5">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={construction1} className="d-block w-100 h-15" alt="First slide" />
      <div className="carousel-caption d-none d-md-block text-light custom-caption">
    <h5>Project Title</h5>
    <p>Some description about this project.</p>
  </div>
    </div>
    <div className="carousel-item">
      <img src={construction2} className="d-block w-100 h-15" alt="Second slide" />
      <div className="carousel-caption d-none d-md-block text-light custom-caption">
    <h5>Project Title</h5>
    <p>Some description about this project.</p>
  </div>
    </div>
    <div className="carousel-item">
      <img src={construction3} className="d-block w-100 h-15" alt="Third slide" />
      <div className="carousel-caption d-none d-md-block text-light custom-caption">
    <h5>Project Title</h5>
    <p>Some description about this project.</p>
  </div>
    </div>
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExample"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExample"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

    </div>
  )
}
