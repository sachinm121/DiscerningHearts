import React from "react";
import Welcome from "../components/Welcome";
import OurGoal from "../components/OurGoal";
import Wwr from "../components/Wwr";
import UpComing from "../components/UpComing";
import Navbar from "../components/Navbar"
import Feedback from "../components/Feedback";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <div className="w-full">
      <div>
        <Navbar/>
      </div>
      <div className="w-full h-full">
        <Welcome />
      </div>
      <div><Wwr /></div>
      <div id="ourgoal">
        <OurGoal />
      </div>
      <div id="upcoming">
        <UpComing />
      </div>
      <div>
        <Feedback />
      </div>
      <div>
        <ContactUs />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
