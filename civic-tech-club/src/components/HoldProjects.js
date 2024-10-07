import React from 'react';
import ProjectCard from './ProjectCard'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import CardGroup from 'react-bootstrap/CardGroup'

const HoldProjects = () => {
    return(
        <Container className="p-5 hold-project-container" fluid>
           <Container>
                <Row className="m-5">
                    <h2 class="featured-header">Featured Projects</h2>
                </Row>
                <Row>
                    <CardGroup>
                        <ProjectCard cardLink="#budget" cardImage="/img/budget.jpg" cardTitle="Budget Visualizations" cardText="We wanted a way to better understand the numbers in the London City budget over time. These visualizations provide some different ways to look at the budget numbers"/>
                        <ProjectCard cardLink="#calendar" cardImage="/img/calendar.jpg" cardTitle="PD Day Calendar Files" cardText="The different school boards all provide information about Professional Development days in differently styled pdfs. We’ve turned these pdfs into ics and ical files that you can import into your digital calendar"/>
                    </CardGroup>
                </Row>
            </Container>
        </Container>
    );
};

export default HoldProjects;