import Button from "@restart/ui/esm/Button";
import React from "react";
import { Col, Row } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container top-footer">
        <Row className="mb-5">
          <Col className="top-footer-one" sm={6} md={4} lg={3}>
            <h5 style={{ color: "#12D0D5" }}>The Doctor's Portal</h5>
            <li>Emergency Dental Care</li>
            <li>Check Up</li>
            <li>Treatment of Personal Diseases</li>
            <li>Tooth Extraction</li>
            <li>Check Up</li>
          </Col>
          <Col className="top-footer-one" sm={6} md={4} lg={3}>
            <h5 style={{ color: "#12D0D5" }}>Services</h5>

            <li>Emergency Dental Care</li>
            <li>Check Up</li>
            <li>Treatment of Personal Diseases</li>
            <li>Tooth Extraction</li>
            <li>Check Up</li>
            <li>Check Up</li>
          </Col>
          <Col className="top-footer-one" sm={6} md={4} lg={3}>
            <h5 style={{ color: "#12D0D5" }}>Oral Health</h5>
            <li>Emergency Dental Care</li>
            <li>Check Up</li>
            <li>Treatment of Personal Diseases</li>
            <li>Tooth Extraction</li>
            <li>Check Up</li>
            <li>Check Up</li>
            <li>Check Up</li>
          </Col>
          <Col className="top-footer-one" sm={6} md={4} lg={3}>
            <h5 style={{ color: "#12D0D5" }}>Our Address</h5>
            <p>Uttara,Dhaka,Bangladesh</p>
            <div className="footer-icon">
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-google-plus-g"></i>
              <i className="fab fa-twitter"></i>
            </div>
            <div className="mt-5">
              <p className="mb-2 text-muted fw-bold">Call now</p>
              <Button className="exception-btn fw-bold rounded">
                +880 125478369
              </Button>
            </div>
          </Col>
        </Row>
        <Row>
          <p className="text-center text-muted m-0">
            Copyright 2021 All Rights Reserved
          </p>
        </Row>
      </div>
    </div>
  );
};

export default Footer;
