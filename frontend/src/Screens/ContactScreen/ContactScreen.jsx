import React from 'react'
import {Row, Col} from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ContactScreen = () => {
  return (
    <>
    <h1>Get In Touch</h1>
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
      
    </>
  )
}

export default ContactScreen
