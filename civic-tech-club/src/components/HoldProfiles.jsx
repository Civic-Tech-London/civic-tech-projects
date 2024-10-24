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
                    <Profile name="David Cosman" image="/img/david_c.jpg" shapeNum = "2" blurb = "David Cosman is a database developer with +5 years of experience, currently working remotely for Microsoft. He lives in London with his family."/>
                </Col>
                <Col xs={12} lg={6}>
                    <Profile name="Marty Penner" image="/img/blank-profile.png" shapeNum = "3" blurb = "Est autem assumenda quas et ex in illum. Provident ipsa voluptate ducimus tempore mollitia animi dolorem. Quas corrupti quia dolorem eos est. Blanditiis libero maxime qui est."/>
                </Col>
                <Col xs={12} lg={6}>
                    <Profile name="Raghul Ramakrishnan" image="/img/raghul.jpg" shapeNum = "4" blurb = "Raghul Ramakrishnan is a full stack web developer with 16+ years of experience and had worked across various industries. Also taking care of systems at the Unitarian Fellowship of London."/>
                </Col>
                <Col xs={12} lg={6}>
                    <Profile name="Jennifer Sadler" image="/img/jen.jpg" shapeNum = "5" blurb = "Jen is a Web Developer for the Faculty of Education at Western University. She started this group to try and make a difference in London. She’s very involved in the Unitarian Fellowship of London."/>
                </Col>
            </Row>
        </Container>
    );
};

export default HoldProfiles;