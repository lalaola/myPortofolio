import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';

const Navbar = () => {
    return (
        <div className='navbar col-10 col-md-4 mx-auto d-flex justify-content-between mt-3'>
            <Link className="logo" activeClass="active" to="/" spy={true} smooth={true} offset={50} duration={500} >
                IsOlla
            </Link>
            <Link className="logo" activeClass="active" to="about" spy={true} smooth={true} offset={50} duration={500} >
                About
            </Link>
            <NavLink className='text-white'>|</NavLink>
            <Link className="logo" activeClass="active" to="porto" spy={true} smooth={true} offset={50} duration={500} >
                Portofolio
            </Link>
        </div>
    );
}

export default Navbar;
