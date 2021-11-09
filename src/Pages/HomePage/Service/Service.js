import React from "react";
import { Card } from "react-bootstrap";
import "./Service.css";

const Service = (props) => {
  const { name, description, image } = props.service;
  return (
    <Card className="service">
      <Card.Img className="card-img" variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text className="text-muted">{description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Service;
