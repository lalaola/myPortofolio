import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='navbar col-6 col-md-4 mx-auto d-flex justify-content-between mt-3'>
                <NavLink className="logo">IsOlla</NavLink>
                <NavLink className='text-white'>|</NavLink>
                <NavLink>About</NavLink>
                <NavLink>Portofolio</NavLink>
        </div>
    );
}

export default Navbar;
