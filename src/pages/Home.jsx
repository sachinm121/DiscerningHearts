import React from "react";
import Welcome from "../components/Welcome";
import OurGoal from "../components/OurGoal";
import Wwr from "../components/Wwr";
const Home = () => {
  return (
    <div>
      <div className="w-full h-full">
        <Welcome />
      </div>
      <div><Wwr /></div>
      <div>
        <OurGoal />
      </div>
      <div>
        <h1>Widgeds</h1>
      </div>
    </div>
  );
};

export default Home;
