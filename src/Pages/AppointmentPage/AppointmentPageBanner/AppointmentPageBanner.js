import React from "react";
import { Col, Row } from "react-bootstrap";
import Calender from "../Calender/Calender";
import bannerImage from "../../../images/bg-appointment.png";
import "./AppointmentPageBanner.css";

const AppointmentPageBanner = ({ date, setDate }) => {
  return (
    <div className="appointment-page">
      <div className="container">
        <Row className="justify-content-center flex-wrap">
          <h2 className="mb-5">Appointment</h2>
          <Col xs={8} sm={8} md={6} lg={4}>
            <Calender date={date} setDate={setDate}></Calender>
          </Col>
          <Col className="" xs={8} sm={8} md={6} lg={8}>
            <img className="ms-auto d-block rounded" src={bannerImage} alt="" />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default AppointmentPageBanner;
