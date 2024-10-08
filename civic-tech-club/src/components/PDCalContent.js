import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const PDCalContent = () => {
    return (
        <Container className="content-container">
            <Row className="m-5">
                <Col xs={12} >
                    <h1>PD Day Digital Calendar</h1>
                    <p>We are in the process of developing an application that will automatically retrive the London Ontario PD Days from the pdf calendars provided by London schoolboards, in order to create a digital ical or ics file. Stay tuned!.</p>
                </Col>

            </Row>
        </Container>
    );
};

export default PDCalContent;