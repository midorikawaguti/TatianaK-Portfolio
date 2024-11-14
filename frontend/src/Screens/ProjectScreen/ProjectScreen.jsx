import { useParams } from "react-router-dom";
import projects from "../../projects";
import { Row, Col, Image, ListGroup} from 'react-bootstrap';


const ProjectScreen = () =>{
    const {id:projectId} =useParams();
    const project =  projects.find((p) => p._id === projectId);
    console.log(project);

    return(
        <>
        <Row>
            <Col md={8}>
                <Image src={project.imageUrl} alt={project.name} fluid/>
            </Col>
        </Row>
        <Row>
                 <Col md={12}>
                <ListGroup variant = 'flush'>
                    <ListGroup.Item>
                        <h3>{project.name}</h3>
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
                </ListGroup>
            </Col>
        </Row>


            
        </>
    )

};

export default ProjectScreen;