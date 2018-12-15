import React, { Component } from 'react';
import './App.css';
import Main from '../Main/Main';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <Main />
        <p>Empty Page</p>
      </div>
    );
  }
}

export default App;
