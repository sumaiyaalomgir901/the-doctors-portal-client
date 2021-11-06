import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Navbar
      style={{ backgroundColor: "#2a434f", padding: "1% 0%" }}
      className="navbar-dark"
      expand="lg"
    >
      <Container>
        <Navbar.Brand to="/home" className="fw-bold fs-3 text-white">
          The Doctor's Portal
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/home" className="text-white px-3">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="text-white px-3">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/dentalService" className="text-white px-3">
              Dental Services
            </Nav.Link>

            <Nav.Link as={Link} to="/blog" className="text-white px-3">
              Blog
            </Nav.Link>
            <Nav.Link as={Link} to="/contactUs" className="text-white px-3">
              Contact US
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/login"
              className="text-dark fw-bold px-3 bg-white"
            >
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
