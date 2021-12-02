import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";
import "./BookingModal.css";

const BookingModal = ({ bookingModal, handleBookingClose, book, date }) => {
  const { name, time } = book;
  const { user } = useAuth();
  const initialBookingInfo = {
    patientName: user.displayName,
    patientEmail: user.email,
    patientNumber: user.phone,
  };

  const [bookingInfo, setBookingInfo] = useState(initialBookingInfo);

  const handleOnBlurBook = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newBookInfo = { ...bookingInfo };
    newBookInfo[field] = value;
    setBookingInfo(newBookInfo);
  };

  const handleOnSubmitBook = (e) => {
    e.preventDefault();
    const appointment = {
      ...bookingInfo,
      serviceName: name,
      time: time,
      date: date.toDateString(),
    };

    fetch("https://desolate-harbor-16717.herokuapp.com/appointments", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(appointment),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Data:", data);
        if (data.insertedId) {
          Swal.fire("Successfully", "Booked an appointment.", "success");
          handleBookingClose();
        }
      });
  };

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
          <form onSubmit={handleOnSubmitBook}>
            <input
              disabled
              type="text"
              className="form-control mb-3 border-0 py-2"
              style={{ backgroundColor: "#EEEEEF" }}
              value={time}
            />

            <input
              type="name"
              name="patientName"
              onBlur={handleOnBlurBook}
              className="form-control mb-3 border-0 py-2"
              style={{ backgroundColor: "#EEEEEF" }}
              defaultValue={user.displayName}
            />
            <input
              type="email"
              name="patientEmail"
              onBlur={handleOnBlurBook}
              className="form-control mb-3 border-0 py-2"
              style={{ backgroundColor: "#EEEEEF" }}
              defaultValue={user.email}
            />
            <input
              type="text"
              name="patientNumber"
              onBlur={handleOnBlurBook}
              className="form-control mb-3 border-0 py-2"
              style={{ backgroundColor: "#EEEEEF" }}
              placeholder="Your Number"
            />
            <input
              disabled
              className="form-control mb-3 border-0 py-2"
              style={{ backgroundColor: "#EEEEEF" }}
              value={date.toDateString()}
            />
            <input
              type="submit"
              value="Book"
              className="exception-btn w-25 fw-bold rounded"
            />
          </form>
        </Modal.Body>
        <Modal.Footer>
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
