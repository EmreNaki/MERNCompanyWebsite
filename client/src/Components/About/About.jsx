import React from 'react'
import { Navbar } from '../Navbar/Navbar'
import { Footer } from '../Footer/Footer'
import person from "../../assets/person.jpg"

export const About = () => {
  return (
    <div>
        <Navbar/>
        <div className='container-fluid bg-image-overlay3 d-flex flex-column mt-5 justify-content-center align-items-center'></div>
        <div className='bg-white text-dark py-2'></div>
        <div className="bg-dark text-white  py-3 ml-1">
  <h1 className="fw-bold ms-3 mx-auto">HAKKIMIZDA</h1>
</div>
    <div className='container mt-3 mb-3'>
        <div className="row">
        <div className='col'>
            
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab nam reprehenderit recusandae eius sed libero. Aperiam sapiente aspernatur veniam modi voluptate velit, repudiandae ratione itaque ipsam facere, neque libero? Veniam!
            </p>
            
        </div>
           <div className='col'>
            <div className='card'>
                <div className='card-body mx-auto'>
            <img src={person}/> 
            </div>
            </div>
        </div>
        </div>
    </div>
    <Footer/>
    </div>
  )
}
