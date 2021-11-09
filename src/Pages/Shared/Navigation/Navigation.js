import React from "react";
import {
  Container,
  Nav,
  Navbar,
  Button,
  Offcanvas,
  Image,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navigation.css";
import useAuth from "../../../Hooks/useAuth";

const Navigation = () => {
  const { user, logOut } = useAuth();
  return (
    <Navbar
      className="py-4 navbar-dark"
      expand={false}
      style={{ backgroundColor: "#2C3C48" }}
    >
      <Container>
        <Navbar.Brand to="/home" className="fw-bold fs-3 text-white">
          The Doctor's Portal
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="start"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  backgroundColor: "#12d0d5",
                  borderRadius: "50%",
                  margin: "auto",
                }}
              >
                {user?.email && (
                  <Image
                    style={{
                      width: "80px",
                      height: "80px",
                      borderRadius: "50%",
                    }}
                    src={user?.photoURL}
                  />
                )}
              </div>
              {user?.email && (
                <h5
                  className="mt-2  text-uppercase"
                  style={{ color: "#12d0d5" }}
                >
                  {user.displayName}
                </h5>
              )}
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link as={Link} to="/home" className="text-black px-3">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/appointment" className="text-black px-3">
                Appointment
              </Nav.Link>

              {user.email ? (
                <>
                  <Nav.Link
                    as={Link}
                    to="/dashboard"
                    className="text-black px-3"
                  >
                    Dashboard
                  </Nav.Link>
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
                </>
              ) : (
                <Nav.Link
                  as={Link}
                  to="/login"
                  className="text-dark fw-bold ps-3"
                  style={{
                    backgroundColor: "#12d0d5",
                  }}
                >
                  Login
                </Nav.Link>
              )}
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default Navigation;
