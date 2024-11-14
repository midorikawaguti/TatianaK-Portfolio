import { useParams } from "react-router-dom";
import projects from "../../projects";
import { Row, Col, ListGroup, Button} from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import { useState } from "react";
import { Link } from "react-router-dom";
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
                <Carousel.Item >
                    <img src={project.imageCover} alt="imageExample" text="First slide" />
                    <Carousel.Caption>
                        <h3>{project.name}</h3>
                    </Carousel.Caption>
                </Carousel.Item>
      
                <Carousel.Item>
                    <img src={project.imageCover} alt="imageExample" text="Second slide" />
                    <Carousel.Caption>
                        <h3>{project.name}</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                
                <Carousel.Item>
                    <img src={project.imageCover} alt="imageExample" text="Third slide" />
                    <Carousel.Caption>
                         <h3>{project.name}</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Row>

        <Row>
                 <Col md={12}>
                <ListGroup variant = 'flush'>
                    <ListGroup.Item>
                        <h3>{project.description}</h3>
                    </ListGroup.Item>
                    <ListGroup.Item>
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
                                <li>{tag }</li>
                            </ul>
                        </Col>
                    ))}
                    </ListGroup.Item>
                </ListGroup>
                <div className="websiteButton">
    <a
        href="https://github.com/midorikawaguti"
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