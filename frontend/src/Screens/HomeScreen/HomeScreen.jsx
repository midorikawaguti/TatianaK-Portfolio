import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import profilePicture from '../../assets/styles/profile1.jpeg';
import './HomeScreen.css';
import Project from '../../Components/Project/Project';
import projects from '../../projects';

const HomeScreen = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadCV = () => {
    // Add CV download logic here
  };

  return (
    <main>
      <Container className="container-1">
        <Row>
          <Col md={6} className="profile_pic">
            <Image src={profilePicture} alt="Profile Picture" fluid />
          </Col>
          <Col md={6} className="allText">
            <h1 className="text1">Hi, I'm Tatiana M. Kawaguti</h1>
            <h3 className="text2" id="typed-text">I am an aspiring Software Engineer</h3>
            <p className="text3">
              I was born and raised in Brazil, but I recently moved to Canada to embark on a new adventure.
              I believe in the positive impact that technological tools can have, which motivates me to
              continue learning and growing in this field.
            </p>
            <div className="buttons">
              <Button onClick={() => scrollToSection('about-me')}>About Me</Button>
              <Button onClick={downloadCV}>Download CV</Button>
            </div>
          </Col>
        </Row>

        <Row className="container-2">
          <ul className="list-icons">
            <li>
              <a href="https://github.com/midorikawaguti" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-github fa-2x text-secondary m-3"></i>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/tatiana-midori-uemura-kawaguti-6865b5120/" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-linkedin fa-2x text-secondary m-3"></i>
              </a>
            </li>
            <li>
              <a href="mailto:midori.kawaguti@gmail.com">
                <i className="bi bi-envelope-fill fa-2x text-secondary m-3"></i>
              </a>
            </li>
          </ul>
        </Row>

        <div id="about-me">
          <h2>About Me Section</h2>
          {/* Replace with your <AboutMe /> component */}
        </div>

        <div id="projects">
          <h2>Projects Section</h2>
          <Row>
            {projects.map((project)=>(
                <Col sm={12} md={6} lg={4} xl={3}>
                  <Project project={project}/>
                </Col>
              ))}
          </Row>
          
         
        </div>

        <div id="contact">
          <h2>Contact Section</h2>
          {/* Replace with your <Contact /> component */}
        </div>
      </Container>
    </main>
  );
};

export default HomeScreen;
