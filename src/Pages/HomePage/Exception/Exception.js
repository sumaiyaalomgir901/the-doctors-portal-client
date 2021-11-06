import React from "react";
import { Col, Row, Button } from "react-bootstrap";
import "./Exception.css";

const Exception = () => {
  return (
    <div className="container">
      <Row className="exception">
        <Col className="left" xs={12} sm={12} md={6} lg={6}>
          <img
            src="https://sa1s3optim.patientpop.com/assets/images/provider/photos/2321343.jpg"
            alt=""
          />
        </Col>
        <Col className="right" xs={12} sm={12} md={6} lg={6}>
          <h2>Exceptional Dental</h2>
          <h2> Care,on Your Terms</h2>
          <p className="text-muted">
            Regular brushing your child’s teeth is very important to remove
            plaque. Plaque/tartar is a soft, sticky, and invisible layer of
            bacteria. Plaque forms on teeth every day.Start cleaning your
            child’s teeth on a regular basis, as soon as they appear. Normal
            time of their appearance is around 6 months.It’s good practice to
            start cleaning your child’s baby gums even before teeth erupt.
          </p>
          <Button className="exception-btn fw-bold rounded">Learn More</Button>
        </Col>
      </Row>
    </div>
  );
};

export default Exception;
