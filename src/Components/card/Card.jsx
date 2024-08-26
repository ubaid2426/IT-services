import React from 'react';
import './Card.css';
import lock from './../../assets/Lock.png'; // Ensure correct path
import dataprivate from '../../assets/dataprivacy.png';
import certificate from '../../assets/certificate.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Card({ title, description, image }) {
  AOS.init({
    duration: 1800,
  });
  
  return (
    <div className="card-1" data-aos="fade-up">
      <div className="card-header">
        <img src={image} alt={title} />
        <h2>{title}</h2>
      </div>
      <p>{description}</p>
    </div>
  );
}
export default Card;

export const cardData = [
  {
    image: lock,
    title: 'Security Services',
    description: 'Certified security professionals provide expert protection through rigorous training and testing, ensuring the safety and well-being of individuals',
  },
  {
    image: dataprivate,
    title: 'Data Privacy',
    description: 'Protecting personal data is a fundamental right, and companies must prioritize transparency and security to maintain trust with their customers.',
  },
  {
    image: certificate,
    title: 'Industry Certified',
    description: 'Industry-certified professionals demonstrate expertise, boosting earning potential, career prospects, and staying current with industry developments.',
  },
];


