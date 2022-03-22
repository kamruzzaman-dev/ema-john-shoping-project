
import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'
const Header = () => {
    return (
        <nav className='nav-container'>
            <div className='left-container'>
                <img src={logo} alt="" />
            </div>
            <div className='right-container'>
                <a href="#">Order</a>
                <a href="#">Order Review</a>
                <a href="#F">Manager Inventory</a>
            </div>
        </nav>
    );
};

export default Header;