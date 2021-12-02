import React, { useState } from "react";
import { Col, Row, Button } from "react-bootstrap";
import { Link, useHistory, useLocation } from "react-router-dom";
import ".//Login.css";
import welcome from "../../images/welcome.jpg";
import Navigation from "../Shared/Navigation/Navigation";
import useAuth from "../../Hooks/useAuth";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { handleLogin, handleGoogleSignIn } = useAuth();

  const history = useHistory();
  const location = useLocation();

  const handleOnChange = (e) => {
    e.preventDefault();
    const field = e.target.name;
    const value = e.target.value;

    const newData = { ...loginData };
    newData[field] = value;
    setLoginData(newData);
    console.log(newData);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    handleLogin(loginData.email, loginData.password, history, location);
  };
  //==============google
  const signInWithGoogle = (e) => {
    e.preventDefault();
    handleGoogleSignIn(history, location);
  };

  return (
    <div>
      <Navigation></Navigation>
      <div className="container">
        <Row className=" mt-4 justify-content-center">
          <Col xs={12} sm={12} md={8} lg={8}>
            <div>
              <img className="w-50" src={welcome} alt="" />
            </div>
          </Col>
          <Col className="mt-4" xs={12} sm={12} md={8} lg={8}>
            <h3>Please Login</h3>
            <div className="form">
              <form onSubmit={handleLoginSubmit}>
                <input
                  onChange={handleOnChange}
                  className="w-75 mb-3 py-2 ps-3 rounded border-bottom-0 border-top-0 border-end-0"
                  style={{
                    backgroundColor: "#EEEEEF",
                    borderLeft: "2px solid #12d0d5",
                  }}
                  placeholder="email"
                  type="email"
                  name="email"
                />
                <input
                  onChange={handleOnChange}
                  className="w-75 mb-3 py-2 ps-3 rounded border-bottom-0 border-top-0 border-end-0"
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
                  value="Login"
                />
              </form>
              <p>OR</p>
              <Link>
                <Button
                  onClick={signInWithGoogle}
                  className="exception-btn w-50 fw-bold rounded mb-3"
                >
                  Google Sign In
                </Button>
              </Link>
              <Link
                to="/register"
                style={{ textDecoration: "none", color: "#12d0d5" }}
              >
                <p>New in this site ? Please Register</p>
              </Link>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Login;
