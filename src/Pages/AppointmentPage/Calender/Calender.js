import React from "react";
import Calendar from "react-calendar";
import ".//Calender.css";

const Calender = ({ date, setDate }) => {
  return (
    <div>
      <Calendar onChange={setDate} value={date} />
    </div>
  );
};

export default Calender;
