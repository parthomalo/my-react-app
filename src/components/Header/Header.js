import React from 'react';
import './Header.css'
import logo from '../../images/logo.png'
import Dark from '../Dark';
const Header = () => {
    return (
        <div className='banner'>
            <h1>This is header!!</h1>   
                <div className='navbar'>
                <img src={logo} alt="" />
                <nav>
                <a href="/home">Home</a>
                <a href="/product">Product</a>
                <a href="/about">About Us</a>
                <a href="/contact">Contact Us</a>
                <Dark></Dark>
                </nav>
                </div>
                
           
        </div>
    );
};

export default Header;