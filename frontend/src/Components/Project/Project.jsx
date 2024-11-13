import React from 'react';
import { Card, Col, Row, Badge } from 'react-bootstrap';
import './Project.css';

const Project = ({project}) => {
    return (
                <Card className="project-card my-3 p-3 rounded shadow-sm">
                    <a href={`/project/${project._id}`}>
                        <Card.Img
                            src={project.imageUrl}
                            variant="top"
                            className="project-image"
                        />
                    </a>
                    <Card.Body>
                        <a href={`/project/${project._id}`} className="text-decoration-none text-dark">
                            <Card.Title as="h5" className="mb-2">
                                <strong>{project.name}</strong>
                            </Card.Title>
                        </a>
                        <Row className="tags flex-wrap">
                            {project.tags.map((tag, index) => (
                                <Col key={index} xs="auto" className="mb-1">
                                    <Badge bg="light" text="dark" className="px-1.8 py-2 rounded-pill">
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
