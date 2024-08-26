// import React from 'react'
// import './Header.css';
// import '../../assets/hero.png';
// import AOS from 'aos';
// import 'aos/dist/aos.css';



// const secur=['Protection','Security','Company']

// function genRandomInt(max){
//   return Math.floor(Math.random() * (max + 1));
// }
// function Header() {
//   AOS.init({
//     duration: 1800,
//   })
//   const description = secur[genRandomInt(2)]
//   return (
//     <div className='hero'>
//       {/* <div className="hero1"></div> */}
//       <div className='hero-2'>
//         <span className='hero-2-heading' data-aos="fade-left">
//         Professional <span className='hero-2-heading-text'> {description} </span> With Reliable Service
//        </span>
//         <span className='hero-2-text' data-aos="fade-right" >
//         At Zerobit, we prioritize your safety with cutting-edge 
//         security solutions and exceptional service. Trust us to 
//         protect what matters most with professionalism, integrity,
//         and a commitment to excellence. Your peace of mind is our 
//         mission.
//         </span>
//       </div>
//       <div className='hero-3' data-aos="fade-left" ><h1></h1></div>
//     </div>
        
//   )
// }

// export default Header


// src/Header.jsx
import React from 'react';
import './Header.css';
 import AOS from 'aos';
import 'aos/dist/aos.css';
const Header = () => {
    AOS.init({
          duration: 1800,
          })
    return (
        <header className="header-container">
            <div className="text-content" >
                <h1 data-aos="fade-left">Professional <span>Security</span> With Reliable Service</h1>
                <p data-aos="fade-right">At Zerobit, we prioritize your safety with cutting-edge 
           security solutions and exceptional service. Trust us to 
           protect what matters most with professionalism, integrity,
           and a commitment to excellence. Your peace of mind is our 
           mission.</p>
                
            </div>
            <div className="image-content" data-aos="fade-left"></div>
        </header>
    );
}

export default Header;




