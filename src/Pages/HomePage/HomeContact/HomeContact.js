import React from "react";
import { Col, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "./HomeContact.css";

const HomeContact = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="bg-secondary home-contact">
      <div className="container">
        <Row>
          <Col>
            <h6 className="mb-3 fw-bold" style={{ color: "#12D0D5" }}>
              CONTACT US
            </h6>
            <h2 className="text-dark">Always Connect With Us</h2>

            <form className="form mt-4" onSubmit={handleSubmit(onSubmit)}>
              <input
                className="form-item mb-3 ps-2 py-2 rounded text-muted border-0"
                {...register("email", { required: true })}
                placeholder="Email"
              />
              <input
                className="form-item mb-3 ps-2 py-2 rounded text-muted border-0"
                {...register("subject", { required: true })}
                placeholder="Subject"
              />
              <textarea
                className="form-item mb-3 ps-2 py-2 rounded text-muted"
                rows="5"
                {...register("message")}
                placeholder="Message"
              ></textarea>

              <input
                className="exception-btn fw-bold rounded w-50"
                type="submit"
              />
            </form>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default HomeContact;
