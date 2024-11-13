import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './Header.css';
import logo from '../../assets/Logo.jpg'

const Header = () => {
  return (
    <header>
      <Navbar expand="md" collapseOnSelect className="py-3">
        <Container>
          <Navbar.Brand href="/">
            <span className="brand-name">Tatiana Kawaguti</span><br />
            <span className="brand-title">Full Stack Developer</span>
          </Navbar.Brand>
          <Nav className="justify-content-end fs-5">
            <Nav.Link href="#about">About Me</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
