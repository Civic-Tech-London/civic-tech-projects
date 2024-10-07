import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () =>{
    return(
        <Container className="p-5" fluid id="contact">
            <Container >
                <Row className="text-center text-md-start justify-content-center align-items-center d-flex">
                    <Col xs={12} md={6}>
                        <h2>Navigation</h2>
                        <ul>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#contributers">Contributers</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </Col>
                    <Col xs={12} md={6}>
                        <h2>Contact</h2>
                        <ul>
                            <li><a href="mailto:CivicTechLondon@gmail.com"><img src="/img/email-icon.svg" className="footer-icon m-1" alt="Email"/>CivicTechLondon@gmail.com</a></li>
                            <li><a href="https://github.com/Civic-Tech-London"><img src="/img/github-icon.svg" className="footer-icon m-1" alt="Github"/>@Civic-Tech-London</a></li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Footer;