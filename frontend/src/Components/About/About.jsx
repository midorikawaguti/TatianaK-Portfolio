import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import profilePicture2 from '../../assets/profile2.jpeg';
import './About.css';

const About = () => {
  return (
    <Container>
        <Row className='aboutSection'>
            <h2>About Me</h2>
            <Col sm={12} md={12} lg={12} xl={7} className='aboutText'>
                <p className="text">
                    I'm currently on a journey of transitioning to a new career path. The past four
                    years were an incredible learning experience as a <strong>chemical process engineer.</strong> Through this role, I've developed
                    my analytical skills, learned various unit operations, calculations, and process flowcharts.
                </p>
                <p className="text">
                    In 2022, I followed my passion for technology and software engineering and decided to switch to the field of
                    software development. I moved to Canada to join the <strong>Software Engineering Technician program at Centennial
                    College</strong>.
                </p>
                <p className="text">
                    This program provided me with a comprehensive understanding of software engineering principles and practices.
                </p>
                <p className="text">
                    After completing my formal education, I've been on an exciting learning journey, working on personal projects
                    that showcase my skills in software development. These projects have not only helped me enhance my technical
                    abilities but also demonstrated my knack for applying theoretical knowledge to real-world scenarios.
                </p>
                <p className="text">
                    As I transition into this new career path, I bring with me the <strong>analytical mindset and problem-solving
                    abilities of an engineer, combined with a newfound expertise in software development.</strong> I am eager to contribute
                    to innovative projects and collaborate with dynamic teams to create impactful software solutions. I am excited
                    to see where this new path takes me and look forward to all the opportunities that lie ahead.
                </p>
            </Col>
           <Col sm={12} md={8} lg={8} xl={5} className="profile_pic2 d-flex justify-content-center mx-auto">
                <Image src={profilePicture2} alt="Profile Picture" fluid />
           </Col>
        </Row>
    </Container>
  )
}
export default About;

