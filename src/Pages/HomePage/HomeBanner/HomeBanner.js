import Button from "@restart/ui/esm/Button";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import chair from "../../../images/chair.png";
import bg from "../../../images/banner.png";
import "./HomeBanner.css";
import { Link } from "react-router-dom";

const banner = {
  background: `url(${bg})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  paddingTop: "6%",
  paddingBottom: "9%",
};

const HomeBanner = () => {
  return (
    <div style={banner}>
      <Container>
        <Row className="align-items-center">
          <Col
            className="text-lg-start text-md-start mb-5 "
            xs={12}
            md={6}
            lg={6}
          >
            <h1 className="mb-3" style={{ fontSize: "2.1rem" }}>
              Your New Smile <br />
              Starts Here
            </h1>
            <p className="mb-5" style={{ width: "90%", color: "#dddddd" }}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Excepturi dolores maxime error modi aspernatur atque doloremque
              sequi in, voluptas dolorum!
            </p>
            <Link to="/appointment">
              <Button
                className=" btn px-2 bannerBtn"
                style={{ fontSize: "14px" }}
              >
                GET APPOINTMENT
              </Button>
            </Link>
          </Col>
          <Col className="mx-auto" xs={8} md={6} lg={6}>
            <img className="w-100" src={chair} alt="" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomeBanner;
