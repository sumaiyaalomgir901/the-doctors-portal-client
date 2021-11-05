import React from "react";
import { Col, Row } from "react-bootstrap";
import "./Information.css";

const Information = () => {
  return (
    <div className="second container">
      <Col className="open">
        <div>
          <i class="far fa-clock"></i>
        </div>
        <div className="details text-start ms-4">
          <h5 className="mb-1 text-white">Opening Hours</h5>
          <p className="m-0 text-white">
            Everyday any time open our hospital.Come 7 get service.
          </p>
        </div>
      </Col>
      <Col className="open location">
        <div>
          <i class="fas fa-map-marker-alt"></i>
        </div>
        <div className="details text-start ms-4">
          <h5 className="mb-1 text-white">Visit our location</h5>
          <p className="m-0 text-white">
            Brooklyn,NY 45896 <br /> United States
          </p>
        </div>
      </Col>
      <Col className="open">
        <div>
          <i class="fas fa-phone"></i>
        </div>
        <div className="details text-start ms-4">
          <h5 className="mb-1 text-white">Contact us now</h5>
          <p className="m-0 text-white">+880147852369</p>
          <p className="m-0 text-white">+880147852369</p>
        </div>
      </Col>
    </div>
  );
};

export default Information;
