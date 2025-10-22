import React from 'react'
import construction2 from "../../assets/construction3.jpg"
import { Link } from 'react-router-dom'

const ContactFolder = () => {
  return (
    <div>
    <div className="container-fluid bg-image-overlay d-flex flex-column justify-content-center align-items-center" style={{ height: '50vh' }}>
        <h1 className="text-center big-title">BİZE ULAŞIN</h1>
                <Link to="/contact" className="btn btn-light btn-lg">
                İLETİŞİME GEÇİN
                </Link>
        </div>
    </div>
  )
    
  
}

export default ContactFolder