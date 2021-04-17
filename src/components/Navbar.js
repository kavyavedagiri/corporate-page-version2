import React, { useState } from 'react';

import { Link } from 'react-scroll';
import './Navbar.css';
import { MdDashboard  } from 'react-icons/md';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

function Navbar() {
  const [click, setClick] = useState(false);
  // const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  // const showButton = () => {
  //   if (window.innerWidth <= 960) {
  //     setButton(false);
  //   } else {
  //     setButton(true);
  //   }
  // };

//   useEffect(() => {
//     showButton();
//     window.addEventListener('resize', showButton);
//     return {
//     window.removeEventListener('resize', showButton)
//     }
//   }, []);


  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <nav className='navbar'>
          <div className='navbar-container container'>
          <Link className='navbar-logo' onClick={closeMobileMenu} activeClass="active" to="homePg" spy={true} smooth={true} duration={1000}>
            {/* <Link to='about' className='navbar-logo' onClick={closeMobileMenu} href={"homePg"}> */}
              <MdDashboard className='navbar-icon' />
              LOGO
             </Link> 
            <div className='menu-icon' onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
              <Link className='nav-links' onClick={closeMobileMenu} activeClass="active" to="homePg" spy={true} smooth={true} duration={1000}>
                {/* <Link to='about' className='nav-links' onClick={closeMobileMenu}> */}
                  Home
                 </Link> 
              </li>
              <li className='nav-item'>
              <Link className='nav-links' onClick={closeMobileMenu} activeClass="active" to="featurePg" spy={true} smooth={true} duration={1000}>
                {/* <Link to='features' className='nav-links' onClick={closeMobileMenu}> */}
                  Features
              </Link> 
              </li>
              <li className='nav-item'>
              <Link className='nav-links' onClick={closeMobileMenu} activeClass="active" to="pricingPg" spy={true} smooth={true} duration={1000}>
                {/* <Link to='pricing' className='nav-links'  onClick={closeMobileMenu} > */}
                  Pricing
                 </Link> 
              </li>
              <li className='nav-item'>
              <Link className='nav-links' onClick={closeMobileMenu} activeClass="active" to="contactusPg" spy={true} smooth={true} duration={1000}>
                {/* <Link to='contactus' className='nav-links' onClick={closeMobileMenu}> */}
                  Contact Us
               </Link> 
              </li>
             
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;