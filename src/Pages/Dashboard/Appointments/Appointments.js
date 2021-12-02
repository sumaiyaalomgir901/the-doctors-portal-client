import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import useAuth from "../../../Hooks/useAuth";

const Appointments = ({ date }) => {
  const { user } = useAuth();
  const [appointments, setAppointments] = useState([]);
  useEffect(() => {
    const uri = `http://localhost:5000/appointments?email=${user.email}&date=${date}`;
    fetch(uri)
      .then((res) => res.json())
      .then((data) => setAppointments(data));
  }, [date]);
  return (
    <div>
      <h3 style={{ marginBottom: "15px", color: "#12d0d5" }}>
        Appointments : {appointments.length}
      </h3>

      <div>
        {appointments.map((appoint) => (
          <Card
            className="shadow border-0 p-3"
            style={{
              width: "24rem",
              margin: "15px auto",
              textAlign: "left",
            }}
          >
            <Card.Body>
              <Card.Subtitle className="mb-2 ">
                Time : {appoint.time}
              </Card.Subtitle>
              <Card.Subtitle className="mb-3 ">
                Date : {appoint.date}
              </Card.Subtitle>
              <Card.Subtitle className="mb-2 ">
                Name : {appoint.patientName}
              </Card.Subtitle>
              <Card.Subtitle className="mb-2 ">
                Email : {appoint.patientEmail}
              </Card.Subtitle>
              <Card.Subtitle className="mb-2 ">
                Service Name : {appoint.serviceName}
              </Card.Subtitle>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Appointments;
