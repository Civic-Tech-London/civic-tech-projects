import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Profile from './Profile'


const HoldProfiles = () => {
    return(
        <Container className="p-5" id="contributers">
            <Row className = "m-5">
                <Col>
                    <h2>Contributers</h2>
                </Col>
            </Row>
            <Row className="text-start">
                <Col xs={12} lg={6}>
                    <Profile name="Dave Cosman" image="/img/blank-profile.png" shapeNum = "2" blurb = "Est autem assumenda quas et ex in illum. Provident ipsa voluptate ducimus tempore mollitia animi dolorem. Quas corrupti quia dolorem eos est. Blanditiis libero maxime qui est."/>
                </Col>
                <Col xs={12} lg={6}>
                    <Profile name="Marty Penner" image="/img/blank-profile.png" shapeNum = "3" blurb = "Est autem assumenda quas et ex in illum. Provident ipsa voluptate ducimus tempore mollitia animi dolorem. Quas corrupti quia dolorem eos est. Blanditiis libero maxime qui est."/>
                </Col>
                <Col xs={12} lg={6}>
                    <Profile name="Raghul Ramakrishnan" image="/img/raghul.jpg" shapeNum = "4" blurb = "Est autem assumenda quas et ex in illum. Provident ipsa voluptate ducimus tempore mollitia animi dolorem. Quas corrupti quia dolorem eos est. Blanditiis libero maxime qui est."/>
                </Col>
                <Col xs={12} lg={6}>
                    <Profile name="Jennifer Sadler" image="/img/jen-alpaca.jpg" shapeNum = "5" blurb = "Raghul Ramakrishnan is a versatile professional skilled in both front-end and back-end technologies. rted this group to try and make a difference in London. She’s very involved in the Unitarian Fellowship of London."/>
                </Col>
            </Row>
        </Container>
    );
};

export default HoldProfiles;