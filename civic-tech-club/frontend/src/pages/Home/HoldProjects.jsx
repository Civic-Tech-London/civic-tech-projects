import React from 'react';
import ProjectCard from '../../components/ProjectCard'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import CardGroup from 'react-bootstrap/CardGroup'
import budget from '../../img/budget.jpg';
import calendar from '../../img/calendar.jpg';

const HoldProjects = () => {
    return(
        <Container className="p-5 hold-project-container" fluid id="projects">
           <Container>
                <Row className="m-5">
                    <h2 className="featured-header">Projects</h2>
                </Row>
                <Row>
                    <CardGroup>
                        <ProjectCard cardLink="/london-budget" cardImage={budget} cardTitle="Budget Visualizations" cardText="We wanted a way to better understand the numbers in the London City budget over time. These visualizations provide some different ways to look at the budget numbers"/>
                        <ProjectCard cardLink="/pd-calendar" cardImage={calendar} cardTitle="PD Day Calendar Files" cardText="The different school boards all provide information about Professional Development days in differently styled pdfs. We’ve turned these pdfs into ics and ical files that you can import into your digital calendar"/>
                    </CardGroup>
                </Row>
            </Container>
        </Container>
    );
};

export default HoldProjects;