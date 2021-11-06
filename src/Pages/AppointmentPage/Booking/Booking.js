import React, { useState } from "react";
import { Card, Col, Button } from "react-bootstrap";
import BookingModal from "../BookingModal/BookingModal";
import "./Booking.css";

const Booking = ({ book, date }) => {
  const { name, time, space } = book;
  const [bookingModal, setBookingModal] = useState(false);
  const handleBookingClose = () => setBookingModal(false);
  const handleBookingShow = () => setBookingModal(true);

  return (
    <>
      <Col xs={12} sm={6} md={6} lg={4}>
        <Card className="border-0 shadow py-3" style={{ marginTop: "25px" }}>
          <Card.Body>
            <Card.Title className="mb-3" style={{ color: "#12d0d5" }}>
              {name}
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{time}</Card.Subtitle>
            <Card.Text className="text-muted">
              {space} Spaces available
            </Card.Text>

            <Button
              onClick={handleBookingShow}
              className="exception-btn fw-bold rounded"
            >
              Book Now
            </Button>
          </Card.Body>
        </Card>
      </Col>
      <BookingModal
        book={book}
        date={date}
        bookingModal={bookingModal}
        handleBookingClose={handleBookingClose}
      ></BookingModal>
    </>
  );
};

export default Booking;
