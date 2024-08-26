import React from 'react'
import './AboutUs.css';
import {  Counter, Features,Footer,Navbar } from '../../Components';
import Card, { cardData } from '../../Components/card/Card';
function AboutUs() {
  return (
    <div>   
<section className="about-us-section">
      <div className="about-us-content">
        <h1 className="about-us-title">AboutUs</h1>
        <p className="about-us-description">
          We are a leading IT services company dedicated to delivering innovative technology solutions. 
          Our expert team is committed to providing reliable services that drive business success. 
          Trust us to handle your IT needs with professionalism and excellence.
        </p>
      </div>
    </section>
      <div className='cart he .card-container'>
        <Card {...cardData[0]}/>
        <Card {...cardData[1]}/>
        <Card {...cardData[2]}/>
     </div>
     <Features/>
     <Counter/>

    </div>
  )
}

export default AboutUs