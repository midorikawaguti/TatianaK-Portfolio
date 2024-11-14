import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './Header.css';

const Header = ({scrollToSection}) => {
  return (
    <header>
      <Navbar expand="md" collapseOnSelect >
        <Container>
          <Navbar.Brand href="/">
            <span className="brand-name">Tatiana Kawaguti</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basics-navibar-nav"/>
          <Navbar.Collapse className="justify-content-end">
            <Nav className="ms-auto">
              <Nav.Link onClick={() => scrollToSection('about')}>About Me</Nav.Link>
              <Nav.Link onClick={() => scrollToSection('projects')}>Projects</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
