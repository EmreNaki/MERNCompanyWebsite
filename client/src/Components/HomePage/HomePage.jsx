import React from 'react'
import { Navbar } from '../Navbar/Navbar'
import background6 from "../../assets/background6.jpg"
import { Footer } from '../Footer/Footer'
import { Carousel } from '../Carousel/Carousel'
import ContactFolder from '../ContactFolder/ContactFolder'
import Services from '../Services/Services'
import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <div>
        
        <div className="image-container">
  <img src={background6} alt="Description" className="banner-image" />

  <div className="image-text">
    <h2>Strong Foundation</h2>
    <p>Building with quality and trust</p>
  <Link to="/pastprojects" className="cta-btn">Projelerimize Göz Atın</Link>
  </div>
</div>
<div className="bg-dark text-dark py-2"></div>

<div className="bg-dark text-dark py-2"></div>
          <div className="overlay"></div>
        <div className='row m-5 '>
            <div className="text-box">
          <h1 className='mx-auto text-center fw-bold text-dark custom-underline '>BİZ KİMİZ?</h1>
          </div>
          <div className='col text-dark'>
                        <div className="text-box">

          <h3 className='text-center text-dark d-flex justify-content-center align-items-center pt-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque animi nemo voluptatum quam necessitatibus illo expedita, cum iusto laudantium ab sequi libero vero. Doloremque quos pariatur ipsum. Natus, ex illo!</h3>
        </div>
         </div>
       
        </div>
        
<Services/>
      <hr class="section-divider"></hr>      

    <div className='container-fluid  d-flex flex-column '>
    <h1 class="big-title  text-dark custom-underline p-3 ms-5 mx-auto me-5 ">PROJELERİMİZ</h1>
          
          <div className="card h-100 text-center bg-dark text-dark m-5">
            
            <div className="card-body">
              <div
                className="bg-dark mb-3"
                
              >
                          <Carousel/>

              </div>
              
            </div>
          </div>
          


     <div className="container mt-4">
      <div className="row justify-content-center">
        {/* Card 1 */}
        <div className="col-md-5 mb-3">
          <div className="card h-100 text-center bg-dark text-light">
            <div className="card-header">
              <h5 className="card-title mb-0">TAMAMLANAN PROJELERİMİZ</h5>
            </div>
            <div className="card-body">
              <div
                className="bg-light mb-3"
                style={{ height: "150px", width: "100%" }}
              >
                {/* Image placeholder */}
              </div>
              <p className="card-text">
                This is the first card with a placeholder for an image.
              </p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-md-5 mb-3">
          <div className="card h-100 text-center bg-dark text-light">
            <div className="card-header">
              <h5 className="card-title mb-0">GELECEK PROJELERİMİZ</h5>
            </div>
            <div className="card-body">
              <div
                className="bg-light mb-3"
                style={{ height: "150px", width: "100%" }}
              >
                {/* Image placeholder */}
              </div>
              <p className="card-text">
                This is the second card with a placeholder for an image.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
      <ContactFolder/>
    
    
    <Footer/>
    </div>
  )
}
