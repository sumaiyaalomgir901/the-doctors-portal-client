import React from "react";
import Navigation from "../../Shared/Navigation/Navigation";
import AppointmentPageBanner from "../AppointmentPageBanner/AppointmentPageBanner";
import AvailableAppointment from "../AvailableAppointment/AvailableAppointment";

const AppointmentPage = () => {
  const [date, setDate] = React.useState(new Date());
  return (
    <div>
      <Navigation></Navigation>
      <AppointmentPageBanner></AppointmentPageBanner>
      <AvailableAppointment date={date}></AvailableAppointment>
    </div>
  );
};

export default AppointmentPage;
