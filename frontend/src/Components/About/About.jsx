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
                    my analytical skills, data-driven mindset, learned various unit operations, calculations, and process flowcharts optimization.
                </p>
                <p className="text">
                    In 2022, I followed my passion for technology and software engineering and decided to switch to the field of
                    software development. I moved to Canada to join the <strong>Software Engineering Technician program at Centennial
                    College</strong>.This program provided me with a comprehensive understanding of software engineering principles and hands-on experience.
                </p>
                <p className="text">
                    To further strengthen my expertise, I completed the <strong>Data Science certification at the University of Toronto.</strong>
                    This program deepened my knowledge of data analysis, machine learning, and statistical modeling, equipping me with essential 
                    skills to work with large datasets and derive meaningful insights
                </p>
                <p className="text">
                    Since completing my formal education, I've been actively working on personal projects
                    that showcase my skills in software development and data analysis. These projects have allowed me to 
                    enhance my technical abilities and apply data-driven decision-making to solve real-world problems.
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

