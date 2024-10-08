import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const SiteNav = () => {
    return (
        <Navbar expand="lg" data-bs-theme="dark" className="nav-bg" >
          <Container>
            <Navbar.Brand href="/">London Civic Tech Club</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" >
              <Nav className="ms-auto justify-content-end">
                <Nav.Link href="/#projects">Projects</Nav.Link>
                <Nav.Link href="/#contributers">Contributers</Nav.Link>
                <Nav.Link href="/#contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    );
};

export default SiteNav;