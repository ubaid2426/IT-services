import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { Link } from 'react-router-dom';
import images from '../../assets/logo.png';
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images} alt="app logo" />
      </div>
      <ul className='app__navbar-links'>
        <li className='p__opensans'><Link to="/">Home</Link></li>
        <li className='p__opensans'><Link to="/about">About</Link></li>
        <li className='p__opensans'><Link to="/services">Services</Link></li>
        <li className='p__opensans'><Link to="/contact">Contact</Link></li>
      </ul>
      <div className='app__navbar-smallscreen'>
        <GiHamburgerMenu color='#fff' fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
            <GiHamburgerMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className='app__navbar-smallscreen_links'>
              <li className='p__opensans'><Link to="/">Home</Link></li>
              <li className='p__opensans'><Link to="/about">About</Link></li>
              <li className='p__opensans'><Link to="/services">Services</Link></li>
              <li className='p__opensans'><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
