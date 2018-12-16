import React, { Component } from 'react';
import './App.css';
import Main from '../Main/Main';
import Header from '../Header/Header';
import { HashRouter as Router, Route } from 'react-router-dom';
import Admin from '../Admin/Admin';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      //sets up router
      <Router>
        <div className="App">
          <Header />
          <Route path="/" exact component={Main} />
          <Route path="/admin" exact component={Admin} />
          <p>© 2018 Ryan Mundy</p>
        </div>
      </Router>
    );
  }
}

export default App;
