import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {  Navbar } from '../../Components';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <>
         <section className="Contact-section">
      <div className="Contact-content">
        <h1 className="Contact-title">Contact Us</h1>
        <p className="Contact-description">
        Get in touch with us to discuss your technology needs andlet us help 
        you achieve your business goals. Our team is ready to listen and provide
         personalized solutions to drive your success. Contact us today to take the
          first step towards a brighter digital future!
        </p>
      </div>
    </section>
    <div className="contact-us">
      <div className="contact-left">
        <h3>Contact Us</h3>
        <h1>Get In Touch</h1>
        <p>We’re here to assist you with any questions or concerns you may have. Your feedback is important to us, and we’re committed to providing the support you need. Reach out, and our team will respond promptly</p>

        <div className="contact-info">
          <div className="contact-item">
            <FontAwesomeIcon icon={faHome} className="contact-icon" />
            <div>
              <h4>Islamabad</h4>
              <p>Ali Plaza Blue Area</p>
            </div>
          </div>
  
          <div className="contact-item">
            <FontAwesomeIcon icon={faPhone} className="contact-icon" />
            <div>
              <h4>Call Us</h4>
              <p>(+51) 123456789</p>
            </div>
          </div>
          <div className="contact-item">
            <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
            <div>
              <h4>WebMail</h4>
              <p>support@zerobit.pk</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="contact-right">
        <form>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <input type="text" placeholder="Your Subject" />
          <textarea placeholder="Your Message"></textarea>
          <button type="submit">SEND MESSAGE</button>
        </form>
      </div>
    </div>
    </>
  );
}

export default ContactUs;
