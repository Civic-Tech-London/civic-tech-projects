import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const PDCalContent = () => {
    return (
        <Container className="content-container">
            <Row className="m-5">
                <Col xs={12} >
                    <h1>PD Day Digital Calendars</h1>
                    <p>We found that the London schoolboards only released their calendars in pdf form. However, many parents and students use outlook or another digital calendar, so we've provided .ics files below:</p>
                    <h2>TVDSB</h2>
                    <ul>
                        <li><a href="/calendars/tvdsb-elementary.ics">Elementary School</a></li>
                        <li><a href="/calendars/tvdsb-secondary.ics">Secondary School</a></li>
                    </ul>
                    <h2>London Catholic Schoolboard</h2>
                    <ul>
                        <li><a href="/calendars/catholic-all-schools.ics">All Grades</a></li>
                     </ul>
                    <h2>Viamonde (Public French Schoolboard)</h2>
                    <ul>
                        <li><a href="/calendars/viamonde-mat-6-cyclique.ics">Mat 6e Cyclique</a></li>
                        <li><a href="/calendars/viamonde-7e-8e.ics">7e & 8e</a></li>
                        <li><a href="/calendars/viamonde-secondaire.ics">Secondaire</a></li>
                    </ul>
                    <h2>Providence (Catholic French schoolboard)</h2>
                    <ul>
                        <li><a href="/calendars/catholique-providence.ics">All Grades</a></li>
                     </ul>
                </Col>

            </Row>
        </Container>
    );
};

export default PDCalContent;