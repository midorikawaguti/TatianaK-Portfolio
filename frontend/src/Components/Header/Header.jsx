import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './Header.css';

const Header = () => {
  return (
    <header>
      <Navbar expand="md" collapseOnSelect className="py-2 fixed-top">
        <Container>
          <Navbar.Brand href="/">
            <span className="brand-name">Tatiana Kawaguti</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basics-navibar-nav"/>
          <Navbar.Collapse className="justify-content-end">
            <Nav className="ms-auto">
              <Nav.Link href="/about">About Me</Nav.Link>
              <Nav.Link href="/projects">Projects</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
