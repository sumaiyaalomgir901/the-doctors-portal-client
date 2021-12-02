import * as React from "react";
import { Grid } from "@mui/material";
import Calender from "../../AppointmentPage/Calender/Calender";
import Appointments from "../Appointments/Appointments";

const DashboardHome = () => {
  const [date, setDate] = React.useState(new Date());
  return (
    <Grid container spacing={2} sx={{ justifyContent: "center" }}>
      <Grid item sx={{ marginBottom: "20px" }} xs={12} sm={12} md={8} lg={4}>
        <Calender date={date} setDate={setDate}></Calender>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={8}>
        <Appointments date={date}></Appointments>
      </Grid>
    </Grid>
  );
};

export default DashboardHome;
