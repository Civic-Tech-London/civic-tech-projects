import React from 'react';
import Card from 'react-bootstrap/Card';

const ProjectCard = (Props) => {
    return (
        <Card className="m-4 rounded">
        <Card.Img variant="top" src={Props.cardImage} className="project-card-image rounded-top" />
        <Card.Body>
          <Card.Title>{Props.cardTitle}</Card.Title>
          <Card.Text>{Props.cardText}</Card.Text>
        </Card.Body>
      </Card>
    );
};

export default ProjectCard;