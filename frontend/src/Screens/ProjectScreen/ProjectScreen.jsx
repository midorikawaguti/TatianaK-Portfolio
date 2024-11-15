import { useParams } from "react-router-dom";
import projects from "../../projects";
import { Row, Col, ListGroup} from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import { useState } from "react";
import './ProjectScreen.css';


const ProjectScreen = () =>{
    const {id:projectId} =useParams();
    const project =  projects.find((p) => p._id === projectId);
    console.log(project);


     const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

    return(
        <>
        <Row className="justify-content-center">
  <Carousel activeIndex={index} onSelect={handleSelect} className="carousel">
    <Carousel.Item>
      <img src={project.imageUrl[0]} alt={project.name} />
      <Carousel.Caption>
        <h3>{project.name}</h3>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>
      <img src={project.imageUrl[1]} alt={project.name}  />
      <Carousel.Caption>
        <h3>{project.name}</h3>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>
      <img src={project.imageUrl[2]} alt={project.name} />
      <Carousel.Caption>
        <h3>{project.name}</h3>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
</Row>

<Row>
  <Col md={12}>
    <ListGroup variant="flush">
      <ListGroup.Item>
        <h4>{project.description}</h4>
      </ListGroup.Item>
      <ListGroup.Item>
        <h3>App Overview:</h3>
        {project.details.map((detail, index) => (
          <Col key={index} xs="auto" className="mb-1">
            <ul>
              <li>{detail}</li>
            </ul>
          </Col>
        ))}
      </ListGroup.Item>
      <ListGroup.Item>
        <h3>Project Goal:</h3>
        <p>{project.projectGoal}</p>
      </ListGroup.Item>
      <ListGroup.Item>
        <h3>Technologies Applied:</h3>
        {project.tags.map((tag, index) => (
          <Col key={index} xs="auto" className="mb-1">
            <ul>
              <li>{tag}</li>
            </ul>
          </Col>
        ))}
      </ListGroup.Item>
    </ListGroup>
    <div className="websiteButton">
      <a
        href={project.projectURL}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary"
      >
        Check it out
      </a>
    </div>
    
  </Col>
</Row>

</>
)

};

export default ProjectScreen;