import React, { useState } from 'react'
import { Navbar } from '../Navbar/Navbar'
import { Footer } from '../Footer/Footer'
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaInstagram } from "react-icons/fa";
import axios from "axios"

export const Contact  = () => {

  const [mail, setMail] = useState("")
  const [name, setName] = useState("")
  const [text, setText] = useState("")

  const handleSubmit = async(e) => {
    e.preventDefault()
    try{
      await axios.post("http://localhost:4000/api/messages", {
        mail, name, text
      },{
        headers: { "Content-Type": "application/json" }
      })
      alert("Message sent!")
    }catch (err){
      console.error(err)
      alert("Error sending message")
    }
  }



  return (
    <div>
        <Navbar/>
        <div className='bg-white text-dark py-2'></div>
        <div className="bg-dark text-white py-3 ml-1 mt-5">
  <h1 className="fw-bold m-1 p-1">İLETİŞİM</h1>
</div>
    <div className='container'>
        <div className="row text-dark">
          <div
  className="col p-5"
 
>
           <p><FaMapMarkerAlt /> Mahallesi, Hacı Abdi, 30 Ağustos Cd. No:9/b, 48200 Milas/Muğlal</p>
      <p><FaPhoneAlt /> +90 555 123 4567</p>
      <p><FaEnvelope /> info@company.com</p>
           
            <h2 className=' p-2'>Sosyal Medya </h2>
             <div className="d-flex flex-column ">
  {/* Instagram */}
  <div className="d-flex align-items-center mb-3">
    <FaInstagram style={{ fontSize: "2rem", marginRight: "10px" }} />
    <span>Instagram</span>
  </div>

  {/* Facebook */}
  <div className="d-flex align-items-center">
    <FaFacebookF style={{ fontSize: "2rem", marginRight: "10px" }} />
    <span>Facebook</span>
  </div>
</div>
              
        </div>
           <div className='col'>
            <div className='card'>
                <div className='card-body mx-auto'>
            <div
      className="mapouter"
      style={{
        position: "relative",
        textAlign: "right",
        width: "600px",
        height: "400px"
      }}
    >
      <div
        className="gmap_canvas"
        style={{
          overflow: "hidden",
          background: "none!important",
          width: "600px",
          height: "400px"
        }}
      >
        <iframe
          className="gmap_iframe"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=cömertler yapı&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          style={{ width: "600px", height: "400px" }}
          title="Google Map"
        />
      </div>
    </div>
            </div>
            </div>
        </div>
        </div>
    </div>
                <hr class="my-4 border-2 border-dark"></hr>

<h1 className='text-center text-dark fw-bold'>BİZE ULAŞIN</h1>
<div className='container m-4 ml-8 mx-auto text-dark'>
<form onSubmit={handleSubmit}>
  <div class="form-group">
    <label htmlFor="exampleFormControlInput1">Email address</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" onChange={e => setMail(e.target.value)}/>
  </div>
<div class="form-group">
    <label htmlFor="exampleFormControlTextarea1">İsim & Soyism</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="1" onChange={e => setName(e.target.value)}></textarea>
  </div>
  
  <div class="form-group">
    <label htmlFor="exampleFormControlTextarea1">Mesajınızı buraya yazın</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" onChange={e => setText(e.target.value)}></textarea>
  </div>
  <button type="submit" className="btn btn-primary mt-3">
      Gönder
    </button>
</form>
</div>
    <Footer/>
    </div>
  )
}