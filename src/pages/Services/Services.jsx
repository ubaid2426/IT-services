import React from 'react'
import {  Card_section,Whychoose } from '../../Components';
import './Services.css';
function Services() {
  return (
    <div>
      <section className="Service-section">
      <div className="Service-content">
        <h1 className="Service-title">Services</h1>
        <p className="Service-description">
        Our services at Zerobit offer comprehensive
      IT solutions tailored to your needs.From cutting-edge
      software development to robust digital forensics, 
      we ensure your technology is secure and efficient.
      Trust us to elevate your IT infrastructure with our 
      expert services
        </p>
      </div>
    </section>
      <Card_section/>
     <div className='chose'><Whychoose/></div> 
    </div>
  )
}

export default Services