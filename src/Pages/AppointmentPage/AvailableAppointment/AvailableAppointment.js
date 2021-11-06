import React from "react";
import { Row } from "react-bootstrap";
import Booking from "../Booking/Booking";

const bookings = [
  {
    id: 1,
    name: "Teeth Orthodonics",
    time: "08.00 AM - 09.00 AM",
    space: 10,
  },
  {
    id: 2,
    name: "Cosmetic Dentistry",
    time: "09.00 AM - 10.00 AM",
    space: 8,
  },
  {
    id: 3,
    name: "Teeth Cleaning",
    time: "10.00 AM - 11.00 AM",
    space: 9,
  },
  {
    id: 4,
    name: "Cavity Protection",
    time: "11.00 AM - 12.00 PM",
    space: 5,
  },
  {
    id: 5,
    name: "Pediatric Dental",
    time: "06.00 PM - 07.00 PM",
    space: 10,
  },
  {
    id: 6,
    name: "Oral Surgery",
    time: "07.00 PM - 08.00 PM",
    space: 10,
  },
];

const AvailableAppointment = ({ date }) => {
  return (
    <div style={{ paddingTop: "50px", paddingBottom: "70px" }}>
      <div className="container">
        <h3 style={{ color: "#12d0d5" }}>
          Available Appointment {date.toDateString()}
        </h3>
        <Row style={{ marginTop: "15px" }}>
          {bookings.map((book) => (
            <Booking key={book.id} book={book} date={date}></Booking>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default AvailableAppointment;
