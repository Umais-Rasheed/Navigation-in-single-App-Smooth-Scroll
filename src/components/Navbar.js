import React, { useState } from 'react';
import './header.css';
import { Link } from 'react-scroll';

function Navbar() {
    const [click, setClick] = useState(false);
    const closeMenu = () => setClick(false);

    return (
        <div className='navbg'>
            <nav>
                <div className='nav_bar'>
                    <div className='nav_logo'>
                        <img src='assits/logo.png' alt='nav-logo'/>
                    </div>
                    <div className='nav_element'>
                        <ul className={click ? "nav-menu active" : "nav-menu"}>
                            <li className='nav-item'>
                                <Link to="home" spy={true} smooth={true} offset={80} duration={500} onClick={closeMenu}> Home</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to="card" spy={true} smooth={true} offset={-90} duration={1000} onClick={closeMenu}> Card</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to="aboutus" spy={true} smooth={true} offset={-30} duration={1000} onClick={closeMenu}>About Us</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to="services" spy={true} smooth={true} offset={-40} duration={1500} onClick={closeMenu}>Services</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to="support" spy={true} smooth={true} offset={-0} duration={2000} onClick={closeMenu}>Support</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to="testimonials" spy={true} smooth={true} offset={-0} duration={2000} onClick={closeMenu}>Testimonials</Link>
                            </li>
                        </ul>
                        <button className='nav_button'>
                            Contact us
                        </button>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
