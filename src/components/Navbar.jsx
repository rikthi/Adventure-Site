import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import './Navbar.css'

function Navbar() {
    const[isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(prev => !prev);
    }

    const closeMobileMenu = () => {
        setIsOpen(prev => !prev);
    }
    return (
        <>
            <nav className = "navbar">
                <div className="navbar-container">
                    <Link to = "/" className="navbar-logo">
                        ADVEN
                    </Link>
                    <div className={`menu-icon ${isOpen ? 'open': ''}`} onClick={toggleMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <ul className={isOpen ? 'nav-menu-active': 'nav-menu'}>
                        <Link to = "/" className="nav-links" onClick={closeMobileMenu}>
                            Home
                        </Link>
                        <Link to = "/services" className="nav-links" onClick={closeMobileMenu}>
                            Services
                        </Link>
                        <Link to = "/products" className="nav-links" onClick={closeMobileMenu}>
                            Products
                        </Link>
                        <Link to = "/sign-up" className="nav-links" onClick={closeMobileMenu}>
                            Sign Up
                        </Link>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar;