import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem, MenuItem,  } from 'react-bootstrap';

class NavBarApp extends Component {
  render() {
    return (
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">My Favorite Lesbian</Link>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem eventKey={1} href="#">
              <Link to="/about">About</Link>
            </NavItem>
            <NavItem eventKey={2} href="#">
              <Link to="/resume">Resume</Link>
            </NavItem>
            <NavItem eventKey={3} href="#">
              <Link to="/projects">Projects</Link>
            </NavItem>
          </Nav>
        </Navbar>
    )
  }
}

export default NavBarApp;
