import React from "react";
import Navigation from "../../Shared/Navigation/Navigation";
import Appointment from "../Appointment/Appointment";
import Exception from "../Exception/Exception";
import Footer from "../../Shared/Footer/Footer";
import HomeBanner from "../HomeBanner/HomeBanner";
import HomeContact from "../HomeContact/HomeContact";
import Information from "../Information/Information";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Navigation></Navigation>
      <HomeBanner></HomeBanner>
      <Information></Information>
      <Services></Services>
      <Exception></Exception>
      <Appointment></Appointment>
      <HomeContact></HomeContact>
      <Footer></Footer>
    </div>
  );
};

export default Home;
