import React from "react";
import { Col, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import welcome from "../../images/welcome.jpg";

const Register = () => {
  return (
    <div>
      <div className="container border ">
        <Row className=" mt-4 justify-content-center">
          <Col xs={12} sm={12} md={8} lg={8}>
            <div>
              <img className="w-50" src={welcome} alt="" />
            </div>
          </Col>
          <Col className="mt-4" xs={12} sm={12} md={8} lg={8}>
            <h3>Please Register</h3>
            <div className="form">
              <form>
                <input
                  className="w-100 mb-3 py-2 ps-3 rounded border-bottom-0 border-top-0 border-end-0"
                  style={{
                    backgroundColor: "#EEEEEF",
                    borderLeft: "2px solid #12d0d5",
                  }}
                  placeholder="Your Name"
                  type="name"
                  name="name"
                />
                <input
                  className="w-100 mb-3 py-2 ps-3 rounded border-bottom-0 border-top-0 border-end-0"
                  style={{
                    backgroundColor: "#EEEEEF",
                    borderLeft: "2px solid #12d0d5",
                  }}
                  placeholder="Your Email"
                  type="email"
                  name="email"
                />
                <input
                  className="w-100 mb-3 py-2 ps-3 rounded border-bottom-0 border-top-0 border-end-0"
                  style={{
                    backgroundColor: "#EEEEEF",
                    borderLeft: "2px solid #12d0d5",
                  }}
                  placeholder="password"
                  type="password"
                  name="password"
                />
                <input
                  className="exception-btn  w-50 fw-bold rounded mb-2"
                  type="submit"
                  value="Register"
                />
              </form>
              <p>OR</p>
              <Link>
                <Button className="exception-btn w-50 fw-bold rounded mb-3">
                  Google Sign In
                </Button>
              </Link>
              <Link
                to="/login"
                style={{ textDecoration: "none", color: "#12d0d5" }}
              >
                <p>Already Registered ? Please Login</p>
              </Link>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Register;
