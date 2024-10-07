import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Hero = () => {
    return (
        <Container>
            <Row className="d-flex align-items-center m-5">
                <Col xs={12} md={6} className="hero-text mt-5">
                    <h1>Making a difference in the London ON Community, one pull request at a time</h1>
                    <p>We are a small but mighty group of programmers, designers, and community-minded folk in London Ontario Canada. Every week we take an hour to work together on projects that can benefit the people of London.</p>
                </Col>
                <Col xs={12} md={6} className="d-flex justify-content-center align-items-center">
                    <div className="mask-wrapper">
                        <div className="mask-stroke"></div>
                        <div className="blob-mask-1">
                            <img src="/img/london.jpg" alt="" className="london-image" />
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Hero;