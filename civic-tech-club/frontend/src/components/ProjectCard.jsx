import React from 'react';
import Card from 'react-bootstrap/Card';

const ProjectCard = (Props) => {
    return (
        <Card className="p-0 m-4 project-card">
            <a href={Props.cardLink} className="card-link">
            <Card.Img variant="top" src={Props.cardImage} className="project-card-image rounded-top" />
            <Card.Body>
                <Card.Title>{Props.cardTitle}</Card.Title>
                <Card.Text>{Props.cardText}</Card.Text>
            </Card.Body>
            </a>
        </Card>
    );
};

export default ProjectCard;