import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import profilePicture from '../../assets/profile1.jpeg';
import './HomeScreen.css';
import Project from '../../Components/Project/Project.jsx';
import About from '../../Components/About/About.jsx';
import projects from '../../projects';
import { ReactTyped as Typed } from 'react-typed';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { useOutletContext } from 'react-router-dom';

const HomeScreen = () => {

  const { downloadCV } = useOutletContext();

  return (
    <>
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
            <div className="homeScreenButton">
              <Button onClick={downloadCV}>Download my Resume</Button>
            </div>
          </Col>
        </Row>

        <Row className="container-2">
          <Col sm={4} className="text-center">
            <Link to="https://github.com/midorikawaguti" target="_blank" rel="noopener noreferrer">
              <FaGithub size={32} />
            </Link>
          </Col>
          <Col  sm={4} className="text-center">
            <Link to="https://www.linkedin.com/in/tatiana-midori-uemura-kawaguti-6865b5120/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={32} />
            </Link>
          </Col>
          <Col sm={4} className="text-center">
            <a href="mailto:midori.kawaguti@gmail.com">
              <FaEnvelope size={32} />
            </a>
          </Col>
        </Row>

        <Row className="about-me">
          <div id='about'>
              <About />
          </div>
        </Row>

        <Row className="projects">
          <h1 id='projects'>Projects</h1>
          <Row>
            {projects.map((project) => (
              <Col sm={12} md={6} lg={4} xl={4} key={project._id}>
                <Project project={project} />
              </Col>
            ))}
          </Row>
        </Row>
      </Container>
    </>
  );
};

export default HomeScreen;
