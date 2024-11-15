import React from 'react';
import { Row, Col, Button, Container, Image } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { useOutletContext } from 'react-router-dom';
import './ContactScreen.css';

const ContactScreen = () => {
  const { downloadCV } = useOutletContext();

  return (
    <Container className="py-5">
      <Row className="align-items-center mb-4">
        <Col md={6} className="text-center">
          <Image
            src="/images/PeopleConnection.png"
            alt="People Connection"
            fluid
            className="rounded-circle"
            style={{ maxWidth: '80%', boxShadow: '0px 4px 10px rgba(0,0,0,0.1)' }}
          />
        </Col>
        <Col md={6} className="text-center text-md-start">
          <h3 className="text-primary ">Let's Connect!</h3>
          <h2 className="fw-bold thanksText">Thank you for visiting my portfolio!</h2>
          <p className="text-muted">
            I hope you enjoyed exploring my work. I’d love to hear from you! Whether you have questions, opportunities, or just want to connect, feel free to reach out.
          </p>
          <p className="text-muted">
            It would be a pleasure to discuss your thoughts and ideas. Looking forward to connecting with you!
          </p>
          <div className='CVbutton'>
            <Button variant="primary" onClick={downloadCV} className="mt-4">
              Download My Resume
            </Button>
          </div>
          
        </Col>
      </Row>

      {/* Contact Links Section */}
      <Row className="text-center mt-5">
        <Col xs={4}>
          <a
            href="https://github.com/midorikawaguti"
            target="_blank"
            rel="noopener noreferrer"
            className="text-dark"
          >
            <FaGithub size={40} />
            <p className="mt-2">GitHub</p>
          </a>
        </Col>
        <Col xs={4}>
          <a
            href="https://www.linkedin.com/in/tatiana-midori-uemura-kawaguti-6865b5120/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-dark"
          >
            <FaLinkedin size={40} />
            <p className="mt-2">LinkedIn</p>
          </a>
        </Col>
        <Col xs={4}>
          <a
            href="mailto:midori.kawaguti@gmail.com"
            className="text-dark"
          >
            <FaEnvelope size={40} />
            <p className="mt-2">Email</p>
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactScreen;
