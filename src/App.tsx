import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import MenuBar from './MenuBar'
import logo from './black-lion-seal-red-trumpets.png';
import './App.css';

function App() {
  return (
    <Router>
      <MenuBar />
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            An Tir College of Heralds
          </p>
        </header>
      </div>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/documents">
          <Documents />
        </Route>
      </Switch>
    </Router>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Documents() {
  return (
    <div>
      <h2>Documents</h2>
    </div>
  );
}

export default App;
