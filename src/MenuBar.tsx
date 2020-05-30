import React from 'react';
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Paths from './Paths'

import logo from './black-lion-seal-red-trumpets.png';

function MenuBar() {
  return (
    <Navbar>
      <IndexLinkContainer to={Paths.HOME}>
        <Navbar.Brand>
          <img
            src={logo}
            width='32'
            height='32'
            className='d-inline-block align-top'
            alt='An Tir Heralds'
          />
        </Navbar.Brand>
      </IndexLinkContainer>
      <Navbar.Toggle aria-controls='main-navbar-nav' />
      <Navbar.Collapse id='main-navbar-nav'>
        <LinkContainer to={Paths.ABOUT}><Nav.Link>About</Nav.Link></LinkContainer>
        <LinkContainer to={Paths.DOCUMENTS}><Nav.Link>Documents</Nav.Link></LinkContainer>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default MenuBar;