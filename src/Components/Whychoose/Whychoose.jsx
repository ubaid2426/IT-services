// import React from 'react'
// import  './Whychoose.css';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// function Whychoose() {
//   AOS.init({
//     duration: 1800,
//   })
//   return (
//     <div className='choose'>
//         {/* <div className="choose-0"></div> */}
//         <div className="choose-1">
//           <div className="wrapp">
//             <p className='choose-1_main-heading' data-aos="fade-right">
//             Why Choose Us
//             </p>
//             <span className="choose-1_heading">
//             Provide Advanced Security for Advanced Threat
//             </span><br/>
//             <span className="choose-1_text">
//             Stay ahead of the curve with cutting-edge security solutions designed to protect your business from evolving threats. Our advanced defenses safeguard your data, ensuring that your systems remain secure against even the most sophisticated cyber risks.
//             </span>
//             <span className="choose-1_list">
            
//                 <ul>
//                <li>Content Delivery Network</li>
//                <li>Malware Detection Removal</li>
//                <li>24/7 Support And Remote Admit</li>
//                 </ul>
//                 </span>
//             </div>
//         </div>
//         <div className="choose-2" data-aos="fade-left">

//         </div>
        
//         </div>
//   )
// }

// export default Whychoose


// src/components/Whychoose.jsx
import React from "react";
import "./Whychoose.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Whychoose = () => {
  AOS.init({
        duration: 1800,
      })
  return (
    <section className="whychoose-section">
      <div className="content">
        <h4 className="whychoose-subtitle" data-aos="fade-right">Why Choose Us</h4>
        <h2 className="whychoose-title">
          Provide Advanced Security for Advanced Threat
        </h2>
        <p className="whychoose-description">
        Stay ahead of the curve with cutting-edge security solutions designed to protect your business from evolving threats.
        </p>
        <ul className="whychoose-list">
          <li>Content Delivery Network</li>
          <li>Malware Detection Removal</li>
          <li>24/7 Support And Remote Admit</li>
        </ul>
      </div>
      <div className="image-side" data-aos="fade-left"></div>
    </section>
  );
};

export default Whychoose;
