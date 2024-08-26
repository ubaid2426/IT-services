import React from 'react';
import './Footer.css';
import logo from '../../assets/logo.png';
import "@fortawesome/fontawesome-free/css/all.min.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {Link} from 'react-router-dom';
import { PrivacyPolicy } from '../../pages/pages';
const Footer = () => {
    AOS.init({
        duration: 1800,
      })
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="grid-item logo-section">
          <img src={logo} alt="Logo" />
        </div>
        <div className="grid-item nav-section">
          <nav className="footer-nav" >
            <a href="#">Home</a>
            <a href="#">About Us</a>
            <a href="#">Services</a>
            <a href="#">News</a>
            <a href="#">Contact</a>
          </nav>
        </div>
        <div className="grid-item social-icons" >
          <a className='social_fcbk' href="#"><i className="fab fa-facebook-f "></i></a>
          <a className='social_twitter' href="#"><i className="fab fa-twitter "></i></a>
          <a className='social_insta' href="#"><i className="fab fa-instagram"></i></a>
          <a className='social_youtube' href="#"><i className="fab fa-youtube"></i></a>
        </div>
        <div className=" footer-bottom">
          <Link to='/privacypolicy' >Privacy Policy </Link>
          <a href="#"></a>
          <p>&copy; 2022. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
