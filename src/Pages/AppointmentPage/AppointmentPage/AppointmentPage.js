import React, { useState } from "react";
import Footer from "../../Shared/Footer/Footer";
import Navigation from "../../Shared/Navigation/Navigation";
import AppointmentPageBanner from "../AppointmentPageBanner/AppointmentPageBanner";
import AvailableAppointment from "../AvailableAppointment/AvailableAppointment";

const AppointmentPage = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div>
      <Navigation></Navigation>
      <AppointmentPageBanner
        date={date}
        setDate={setDate}
      ></AppointmentPageBanner>
      <AvailableAppointment date={date}></AvailableAppointment>
      <Footer></Footer>
    </div>
  );
};

export default AppointmentPage;
