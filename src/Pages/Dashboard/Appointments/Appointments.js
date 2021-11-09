import React, { useEffect, useState } from "react";
import useAuth from "../../../Hooks/useAuth";

const Appointments = () => {
  const { user } = useAuth();
  const [appointments, setAppointments] = useState([]);
  useEffect(() => {
    const uri = `http://localhost:5000/appointments?email=${user.email}`;
    fetch(uri)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <div>
      <h3>Appointments</h3>
    </div>
  );
};

export default Appointments;
