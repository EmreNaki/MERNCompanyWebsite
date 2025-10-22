import React from 'react'
import logo2 from "../../assets/logo2.png"


const Services = () => {
  return (
    <div>
      <div className="parallax-section">
        <div className="container my-5">
            <h1 className='mx-auto text-center fw-bold  text-light custom-underline p-3 m-2'>HİZMETLERİMİZ</h1>

  {/* First row - 3 cards */}
  <div className="row m-4">
    <div className="col-md-4 mb-3">
      <div className="card h-100">
        <img src={logo2} className="card-img-top small-logo mx-auto" alt="Card 1" />
        <div className="card-body text-center">
          <h5 className="card-title">Card Title 1</h5>
        </div>
      </div>
    </div>

    <div className="col-md-4 mb-3">
      <div className="card h-100">
        <img src={logo2} className="card-img-top small-logo mx-auto" alt="Card 2" />
        <div className="card-body text-center">
          <h5 className="card-title">Card Title 2</h5>
        </div>
      </div>
    </div>

    <div className="col-md-4 mb-3">
      <div className="card h-100">
        <img src={logo2} className="card-img-top small-logo mx-auto" alt="Card 3" />
        <div className="card-body text-center">
          <h5 className="card-title">Card Title 3</h5>
        </div>
      </div>
    </div>
  </div>

  {/* Second row - 2 cards centered */}
  <div className="row justify-content-center">
    <div className="col-md-5 mb-3">
      <div className="card h-100">
        <img src={logo2} className="card-img-top small-logo mx-auto" alt="Card 4" />
        <div className="card-body text-center">
          <h5 className="card-title">Card Title 4</h5>
        </div>
      </div>
    </div>

    <div className="col-md-5 mb-3">
      <div className="card h-100">
        <img src={logo2} className="card-img-top small-logo mx-auto" alt="Card 5" />
        <div className="card-body text-center">
          <h5 className="card-title">Card Title 5</h5>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
    </div>
  )
}

export default Services