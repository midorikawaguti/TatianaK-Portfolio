import React from 'react';
import { Card, Col, Row, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Project.css';

const Project = ({ project }) => {
    return (
        <Card className="project-card my-3 p-3 rounded shadow-sm">
            <div className="d-flex justify-content-center">
                <Link to={`/project/${project._id}`}>
                    <Card.Img
                        src={project.imageCover}
                        alt={`Image of ${project.name}`}
                        variant="top"
                        className="project-image mx-auto"
                    />
                </Link>
            </div>
            <Card.Body>
                <Link to={`/project/${project._id}`} className="text-decoration-none text-dark">
                    <Card.Title as="h5" className="mb-2">
                        {project.name}
                    </Card.Title>
                </Link>
                <Row className="tags flex-wrap">
                    {project.tags.map((tag) => (
                        <Col key={tag} xs="auto" className="mb-1">
                            <Badge bg="light" text="dark" className="px-2 py-2 rounded-pill">
                                {tag}
                            </Badge>
                        </Col>
                    ))}
                </Row>
            </Card.Body>
        </Card>
    );
};

export default Project;
