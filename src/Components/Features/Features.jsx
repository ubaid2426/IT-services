// import React from 'react'
// import "./Features.css"
// import Cards_1, { cardData } from "./Cards_1";
// import "../../assets/1st.jpeg";
// function Features() {
//   return (
//     <>
//        <div className='feature'> 
//         <div className="feature-1" data-aos="fade-right">
//         </div>
//         <div className="feature-2">
//           <div className='feature-2-4'>
//             <p className='feature-2-1' data-aos="fade-left">Welcome To Zerobit</p><br/>
//             <span className='feature-2-2'>The Perfect Solution For All
//                The Protection Question</span>
//             <p className='feature-2-3'>
//               Comprehensive cybersecurity solutions provide advanced protection 
//               against evolving threats, ensuring the safety of your data and
//               systems. Stay secure with cutting-edge defenses tailored to all
//               your security needs.</p>
//               <div className='main-cart'>
//               <Cards_1 {...cardData[0]}/>
//               <Cards_1 {...cardData[1]}/>
//               </div>
//             </div>
//         </div>
//       </div>
//    </>
//   )
// }

// export default Features



import React from 'react';
import './Features.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Features = () => {
    AOS.init({
        duration: 1800,
      })
    return (
        <section className="features-container">
            <div className="features-image" data-aos="fade-right"></div>

            <div className="features-content">
                <h5 data-aos="fade-left">Welcome To Zerobit</h5>
                <h2>The Perfect Solution For All The Protection Question</h2>
                <p>Comprehensive cybersecurity solutions provide advanced protection 
                 against evolving threats, ensuring the safety of your data and
                 systems. Stay secure with cutting-edge defenses tailored to all
                 your security needs.</p>

                <div className="features-grid">
                    <div className="feature-item">
                        <i className="icon-high-quality"></i>
                        <h3>High Quality Service</h3>
                        <p>Delivering excellence with every solution, ensuring your success through tailored, high-standard services.</p>
                    </div>

                    <div className="feature-item">
                        <i className="icon-effective-protection"></i>
                        <h3>Effective Protection</h3>
                        <p>Safeguarding your assets with advanced security solutions designed to prevent and neutralize threats</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;











