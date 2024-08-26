import React from 'react';
import './Cards_1.css'
import Services from './../../assets/lservices.png'; // Ensure correct path
import Protection from '../../assets/protect.png';
import Network from '../../assets/network.png';
import Databasesecurity from '../../assets/data.png';
import Websecurity from '../../assets/websec.png';
import Lockersecurity from '../../assets/locksecure.png';
import Datasecurity from '../../assets/websec.png';
import Cloudsecurity from '../../assets/cloudsecu.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
function Cards_1({ title, description, image }) {
  AOS.init({
    duration: 1800,
  })
  return (
    <div className=" main-card-1 " data-aos="fade-up">
    <div className="card-header">
      <img src={image} alt={title} />
      <h2>{title}</h2>
    </div>
    <p>{description}</p>
  </div>
  );
}
export const cardData = [
  {
    image: Services,
    title: 'High Quality Service',
    description: 'Delivering excellence with every solution, ensuring your success through tailored, high-standard services.',
  },
  {
    image: Protection,
    title: 'Effective Protection',
    description: 'Safeguarding your assets with advanced security solutions designed to prevent and neutralize threats',
  },
  {
    image: Network,
    title: 'Network Security',
    description: 'Protect your digital assets with our advanced security solutions. Safeguard your network infrastructure from cyber threats with firewalls, intrusion prevention, vulnerability assessments, and ongoing monitoring.',
  },
  {
    image: Databasesecurity,
    title: 'Data Security',
    description: 'Protect your crucial business data with comprehensive data security services. Our solutions include encryption, secure access controls, and regular audits to keep your information safe from breaches and cyber threats',
  },
  {
    image: Websecurity,
    title: 'Web Security',
    description: 'Securing websites and web applications against cyber threats such as hacking, malware, and data breaches. This involves implementing firewalls, SSL certificates, and regular vulnerability assessments',
  },
  {
    image: Lockersecurity,
    title: 'Digital Forensics',
    description: 'We specialize in uncovering and analyzing digital evidence to solve complex cybercrimes. Our expert team ensures thorough investigations and secure data handling, providing crucial insights for legal and regulatory compliance',
  },
  {
    image: Datasecurity,
    title: 'Software Development',
    description: ' delivers tailored solutions to meet your business needs. From custom applications to system integrations, we ensure efficient, scalable, and innovative software solutions that drive growth and streamline operations.',
  },
  {
    image: Cloudsecurity,
    title: 'Capacity Building',
    description: 'focuses on advancing your team`s technical skills and knowledge to stay ahead in the evolving tech landscape. It provides targeted training and resources to enhance digital proficiency and drive innovation within your organization',
  },
  
];

export default Cards_1;
