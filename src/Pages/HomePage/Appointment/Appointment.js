import Button from "@restart/ui/esm/Button";
import React from "react";
import { Col, Row } from "react-bootstrap";
import lady from "../../../images/doctor1.png";
import "./Appointment.css";

const Appointment = () => {
  return (
    <div className="appointment">
      <div className="container">
        <Row className="align-items-center">
          <Col xs={12} sm={12} md={4} lg={4}>
            <img className="apppoint-img" src={lady} alt="Appointment" />
          </Col>
          <Col className="appointment-details" xs={12} sm={12} md={8} lg={8}>
            <h6 className="mb-3 fw-bold" style={{ color: "#12D0D5" }}>
              APPOINTMENT
            </h6>
            <h2 className="text-dark">Make an appointment</h2>
            <h2 className="text-dark fw-bold">TODAY</h2>
            <p className="my-4 text-muted">
              Are you looking for Best Doctor's or Best Dental Clinic in Uttara,
              Dhaka, Bangladesh? Yes, you are in the right place.Helping
              patients achieve good dental health & beautiful smile is a
              privilege & responsibility. For over 10 years, my team & I have
              proudly provided the best dental experience in Bangladesh.
            </p>
            <Button className="exception-btn fw-bold rounded">
              GET APPOINTMENT
            </Button>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Appointment;
