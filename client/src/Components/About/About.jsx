import React from 'react'
import { Navbar } from '../Navbar/Navbar'
import { Footer } from '../Footer/Footer'
import person from "../../assets/person.jpg"

export const About = () => {
  return (
    <div>
        <Navbar/>
        <div className='bg-white text-dark py-2'></div>
        <div className="bg-dark text-white  py-3 ml-1 mt-5">
  <h1 className="fw-bold ms-3 mx-auto ">HAKKIMIZDA</h1>

</div>
          <div className='container-fluid bg-image-overlay3 d-flex flex-column mt-3 justify-content-center align-items-center'>
            <h2 className='justify-content-center align-items-center mx-auto text-center'>15 yıllık deneyimimizle Cömertler Yapı ve Mühendislik olarak, inşaat ve mühendislik sektöründe güveni, kaliteyi ve estetiği bir arada sunuyoruz. Her projede sağlam temeller üzerine çağdaş yaşam alanları inşa ediyor, müşteri memnuniyetini her zaman önceliğimiz haline getiriyoruz.</h2>
          </div>

    <div className='container mt-3 mb-3'>
        <div className="row">
        <div className='col'>
            
            <p className='p-5 justify-content-center align-items-center text-center'>
                15 yıllık deneyimimizle Cömertler Yapı ve Mühendislik olarak, inşaat ve mühendislik sektöründe güveni, kaliteyi ve estetiği bir arada sunuyoruz. Her projede sağlam temeller üzerine çağdaş yaşam alanları inşa ediyor, müşteri memnuniyetini her zaman önceliğimiz haline getiriyoruz.
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
