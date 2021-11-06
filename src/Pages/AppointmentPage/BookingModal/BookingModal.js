import React from "react";
import { Modal, Button } from "react-bootstrap";
import "./BookingModal.css";

const BookingModal = ({ bookingModal, handleBookingClose, book, date }) => {
  const { name, time, space } = book;
  return (
    <>
      <Modal show={bookingModal} onHide={handleBookingClose} animation={false}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <Modal.Title
            className="text-center mb-3"
            style={{ color: "#12d0d5" }}
          >
            {name}
          </Modal.Title>
          <form>
            <input
              disabled
              type="text"
              className="form-control mb-3 border-0 py-2"
              style={{ backgroundColor: "#EEEEEF" }}
              placeholder={time}
            />

            <input
              type="name"
              name="name"
              className="form-control mb-3 border-0 py-2"
              style={{ backgroundColor: "#EEEEEF" }}
              placeholder="Your Name"
            />
            <input
              type="number"
              name="number"
              className="form-control mb-3 border-0 py-2"
              style={{ backgroundColor: "#EEEEEF" }}
              placeholder="Your Number"
            />
            <input
              type="email"
              name="email"
              className="form-control mb-3 border-0 py-2"
              style={{ backgroundColor: "#EEEEEF" }}
              placeholder="Your Email"
            />
            <input
              disabled
              type="email"
              name="email"
              className="form-control mb-3 border-0 py-2"
              style={{ backgroundColor: "#EEEEEF" }}
              placeholder={date.toDateString()}
            />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button className="exception-btn fw-bold rounded" variant="secondary">
            BOOK
          </Button>
          <Button
            className="exception-btn fw-bold rounded"
            variant="secondary"
            onClick={handleBookingClose}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default BookingModal;
