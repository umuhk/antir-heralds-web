import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Container from 'react-bootstrap/Container'

import Paths from './Paths';
import MenuBar from './MenuBar';
import Document from './Document'
import logo from './black-lion-seal-red-trumpets.png';

import '@fortawesome/fontawesome-free/css/solid.css';
import './App.scss';


function App() {
  return (
    <Router>
      <MenuBar />
      <Container fluid='md'>
        <Switch>
          <Route exact path={Paths.HOME} component={Home} />
          <Route path={Paths.ABOUT} component={About} />
          <Route exact path={[Paths.DOCUMENTS, Paths.DOCUMENTS + '/:filename']} component={Document} />
        </Switch>
      </Container>
    </Router >
  );
}

function Home() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='Black Lion Seal' />
        <p>
          An Tir College of Heralds
        </p>
      </header>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

export default App;
