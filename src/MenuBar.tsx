import React from 'react';
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import logo from './black-lion-seal-red-trumpets.png';

function MenuBar() {
  return (
    <Navbar>
      <IndexLinkContainer to='/'>
        <Navbar.Brand>
          <img
            src={logo}
            width="32"
            height="32"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
      </IndexLinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <LinkContainer to="/about"><Nav.Link>About</Nav.Link></LinkContainer>
        <LinkContainer to="/documents"><Nav.Link>Documents</Nav.Link></LinkContainer>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default MenuBar;