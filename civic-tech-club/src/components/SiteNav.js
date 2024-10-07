import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const SiteNav = () => {
    return (
        <Navbar expand="lg" data-bs-theme="dark" className="nav-bg" >
          <Container>
            <Navbar.Brand href="#home">London Civic Tech Club</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" >
              <Nav className="ms-auto justify-content-end">
                <Nav.Link href="#about">About</Nav.Link>
                <NavDropdown title="Projects" id="basic-nav-dropdown" data-bs-theme="dark">
                  <NavDropdown.Item href="#" className="text-wrap">London Budget Visualizations</NavDropdown.Item>
                  <NavDropdown.Item href="#" className="text-wrap">London Schoolboard PD Day Digital Calendar</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    );
};

export default SiteNav;