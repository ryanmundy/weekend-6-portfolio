import React, { Component } from 'react';
import './Header.css';

class App extends Component {
    // Renders the entire app on the DOM
    render() {
        return (
            <div className="Header">
            <img src="images/RyanMundy2.jpg" height="100"></img>
                <h1>Ryan Mundy</h1>
                <h3>Portfolio</h3>
            </div>
        );
    }
}

export default App;