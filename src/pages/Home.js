import { ArrowRight2 } from "iconsax-react";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="main__page">
      <div className="main_title">
        <h1>
          Are you tired of buying groceries or food products that have been
          sitting on the shelf for too long? With Food Tracker you can easily
          check if a good have been stored illegaly or not.
        </h1>
      </div>
      <div className="sim_btn">
        <h2>Start the simulator</h2>
        <Link to="/simulator">
          <div className="icons">
            <ArrowRight2 size="32" color="#FFF" />
            <ArrowRight2 size="32" color="#FFF" />
            <ArrowRight2 size="32" color="#FFF" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
