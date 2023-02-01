import React from "react";
import Logo from "./React-icon.png";
import './index.css';

function Header() {
    return (
    <header>
        <nav className='navbar'>
            <img className='react-icon' src={Logo} alt="React Icon"/>
            <ul className='nav-items'>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    </header> 
    );
}

export default Header;