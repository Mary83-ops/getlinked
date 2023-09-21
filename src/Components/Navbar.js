import React from 'react';
import '../Styles/Navbar.css';

const Navbar = () => {
    return (
        <div className="navbar-container">
            <div className="navbar-wrapper">
                <div className="navbar-title">
                    <h2>get<span>linked</span></h2>
                </div>

                <div className="navbar-content">
                    <ul className="navbar-items">
                        <li>Timeline</li>
                        <li>Overview</li>
                        <li>FAQs</li>
                        <li>Contact</li>
                    </ul>

                    <div className="register-btn">
                        <h2>Register</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;