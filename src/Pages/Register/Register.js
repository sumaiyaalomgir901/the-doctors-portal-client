import React, { useState } from "react";
import { Col, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useHistory, useLocation } from "react-router";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import welcome from "../../images/welcome.jpg";
import Navigation from "../Shared/Navigation/Navigation";

const Register = () => {
  const [loginData, setLoginData] = useState({});
  const { handleGoogleSignIn, error, handleRegister } = useAuth();

  const history = useHistory();
  const location = useLocation();

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;

    const newData = { ...loginData };
    newData[field] = value;
    setLoginData(newData);
  };

  const handleRegisterSubmit = (e) => {
    const namereg = document.getElementById("name_reg").value.length;
    const emailreg = document.getElementById("email_reg").value.length;
    const passwordreg = document.getElementById("pass_reg").value.length;
    const repasswordreg = document.getElementById("pass2_reg").value.length;

    if (
      namereg === 0 ||
      emailreg === 0 ||
      passwordreg === 0 ||
      repasswordreg === 0
    ) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Field must not be empty",
      });
    } else if (loginData.password !== loginData.password2) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password not matched!",
      });
    } else if (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error,
      });
    } else {
      handleRegister(
        loginData.email,
        loginData.password,
        loginData.name,
        history
      );
    }

    e.preventDefault();
  };
  //google
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
            <h3>Please Register</h3>
            <div className="form">
              <form onSubmit={handleRegisterSubmit}>
                <input
                  onChange={handleOnChange}
                  id="name_reg"
                  className="w-75 mb-3 py-2 ps-3 rounded border-bottom-0 border-top-0 border-end-0"
                  style={{
                    backgroundColor: "#EEEEEF",
                    borderLeft: "2px solid #12d0d5",
                  }}
                  placeholder="Your Name"
                  type="name"
                  name="name"
                />
                <input
                  onChange={handleOnChange}
                  id="email_reg"
                  className="w-75 mb-3 py-2 ps-3 rounded border-bottom-0 border-top-0 border-end-0"
                  style={{
                    backgroundColor: "#EEEEEF",
                    borderLeft: "2px solid #12d0d5",
                  }}
                  placeholder="Your Email"
                  type="email"
                  name="email"
                />
                <input
                  onChange={handleOnChange}
                  id="pass_reg"
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
                  onChange={handleOnChange}
                  id="pass2_reg"
                  className="w-75 mb-3 py-2 ps-3 rounded border-bottom-0 border-top-0 border-end-0"
                  style={{
                    backgroundColor: "#EEEEEF",
                    borderLeft: "2px solid #12d0d5",
                  }}
                  placeholder="Retype your password"
                  type="password"
                  name="password2"
                />
                <input
                  className="exception-btn  w-50 fw-bold rounded mb-2"
                  type="submit"
                  value="Register"
                />
              </form>

              {/* {isLoading && (
                <Spinner animation="border" role="status"></Spinner>
              )} */}

              <p>OR</p>

              <Button
                onClick={signInWithGoogle}
                className="exception-btn w-50 fw-bold rounded mb-3"
              >
                Google Sign In
              </Button>

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
