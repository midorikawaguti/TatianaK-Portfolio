import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import profilePicture from '../../assets/profile1.jpeg';
import './HomeScreen.css';
import Project from '../../Components/Project/Project.jsx';
import About from '../../Components/About/About.jsx'
import projects from '../../projects';
import { ReactTyped as Typed } from 'react-typed';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'


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
          <Col md={12} lg={7} xl={6} className="profile_pic1">
            <Image src={profilePicture} alt="Profile Picture" fluid />
          </Col>
          <Col md={12} lg={5} xl={6} className="allText">
            <h1 className="text1">Hi, I'm Tatiana M. Kawaguti</h1>
            <h3 className="text2">
            <Typed
              strings={[
                'A Full Stack Developer',
                'A creative coder',
                'A problem solver',
              ]}
              typeSpeed={180}
              backSpeed={70}
              loop
            />
            </h3>
            <p className="text3">
              I was born and raised in Brazil, but I recently moved to Canada to embark on a new adventure.
              I believe in the positive impact that technological tools can have, which motivates me to
              continue learning and growing in this field.
            </p>
            <div className="homeScreenButtons">
              <Button onClick={() => scrollToSection('projects')}>Projects</Button>
              <Button onClick={downloadCV}>Download CV</Button>
            </div>
          </Col>
        </Row>

        <Row className="container-2">
          <Col sm={12} md={6} lg={4} xl={4} >
              <a href="https://github.com/midorikawaguti" target="_blank" rel="noopener noreferrer">
                <FaGithub/>
              </a>

              <a href="https://www.linkedin.com/in/tatiana-midori-uemura-kawaguti-6865b5120/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin/>
              </a>

              <a href="mailto:midori.kawaguti@gmail.com">
                <FaEnvelope/>
              </a>
          </Col>
        </Row>

        <div id="about-me">
          <h2>About Me</h2>
          <About/>
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
      </Container>
    </main>
  );
};

export default HomeScreen;
