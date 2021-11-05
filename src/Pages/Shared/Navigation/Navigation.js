import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const navber = {
  backgroundColor: "#2a434f",
  padding: "1% 0%",
};
const Navigation = () => {
  return (
    <Navbar style={navber} className="navbar-dark" expand="lg">
      <Container>
        <Navbar.Brand to="/home" className="fw-bold fs-3 text-white">
          The Doctor's Portal
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link to="/home" className="text-white px-3">
              Home
            </Nav.Link>
            <Nav.Link to="/about" className="text-white px-3">
              About
            </Nav.Link>
            <Nav.Link className="text-white px-3">Dental Services</Nav.Link>
            <Nav.Link className="text-white px-3" href="#link">
              Reviews
            </Nav.Link>
            <Nav.Link className="text-white px-3" href="#link">
              Blog
            </Nav.Link>
            <Nav.Link className="text-white px-3" href="#link">
              Contact US
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
