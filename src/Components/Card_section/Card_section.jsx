import React from 'react';
import './Card_section.css';
import { cardData } from '../Features/Cards_1';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Cards({ title, description, image }) {
  AOS.init({
    duration: 1800,
  });
  return (
    <div className="Section-1" data-aos="fade-up">
      <div className="main-header">
        <img src={image} alt={title} />
        <h2>{title}</h2>
      </div>
      <p>{description}</p>
    </div>
  );
}

function Card_section() {
  return (
    <div className="wrapper">
      <div className="title-section">
        <p>Our Services</p>
        <h2>What We Offer</h2>
      </div>
      <div className="Card_section">
        <Cards {...cardData[2]} />
        <Cards {...cardData[3]} />
        <Cards {...cardData[4]} />
        <Cards {...cardData[5]} />
        <Cards {...cardData[6]} />
        <Cards {...cardData[7]} />
      </div>
    </div>
  );
}

export default Card_section;
