import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    //creates header for app
    render() {
        return (
            <div className="Header">
                <img src="images/RyanMundy2.jpg" alt="" height="100"></img>
                <h1>Ryan Mundy</h1>
                <h3>Portfolio</h3>
            </div>
        );
    }
}

export default Header;