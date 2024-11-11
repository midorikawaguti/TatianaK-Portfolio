import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => {
  return (
    <header>
      <Navbar bg="light" expand="lg" collapseOnSelect className="py-4"> {/* Use py-4 to increase header height */}
        <Container>
          <Navbar.Brand href="/">Tatiana Kawaguti</Navbar.Brand>
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

