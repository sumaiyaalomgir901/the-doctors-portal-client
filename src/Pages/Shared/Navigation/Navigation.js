import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const Navigation = () => {
  const { user, logOut } = useAuth();
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
            <Nav.Link as={Link} to="/appointment" className="text-white px-3">
              Appointment
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
            {user?.email && (
              <h6 className="pt-2 me-3" style={{ color: "#12d0d5" }}>
                {user.displayName}
              </h6>
            )}
            {user.email ? (
              <Button
                onClick={logOut}
                style={{
                  backgroundColor: "#12d0d5",
                  color: "black",
                  border: "none",
                  fontWeight: "bold",
                }}
              >
                LogOut
              </Button>
            ) : (
              <Nav.Link
                as={Link}
                to="/login"
                className="text-dark fw-bold px-3"
                style={{
                  backgroundColor: "#12d0d5",
                }}
              >
                Login
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
