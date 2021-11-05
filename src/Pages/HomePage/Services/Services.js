import React from "react";
import fluoride from "../../../images/fluoride.png";
import cavity from "../../../images/cavity.png";
import whitening from "../../../images/whitening.png";
import Service from "../Service/Service";
import "./Services.css";

const services = [
  {
    name: "Fluoride Treatment",
    id: 1,
    description:
      "Fluoride treatments are typically professional treatments containing a high concentration.",
    image: fluoride,
  },
  {
    name: "Cavity Filling",
    id: 2,
    description:
      "A dental filling treats tooth decay. Having a filling can prevent further damage, reduce the risks of pain and infection.",
    image: cavity,
  },
  {
    name: "Teeth Whitening",
    id: 3,
    description:
      "A person’s smile is their most authentic form of self-expression. Your smile is an expression of your inner beauty.",
    image: whitening,
  },
];

const Services = () => {
  return (
    <div className="container services-box">
      <h6 className="mb-3 fw-bold" style={{ color: "#12D0D5" }}>
        OUR SERVICES
      </h6>
      <h2 className="mb-5 fw-bold">Services We Provide</h2>
      <div className="service-area">
        {services.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
