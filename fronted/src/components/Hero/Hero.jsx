import React from "react";
import hero from "../Assets/clap.png";
import heroic from "../Assets/hero.png";
import "./hero.css";
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h1>New arrivals only</h1>
        <div>
          <div className="hand-hand-icon">
            <p>New</p>
            <img src={hero} alt="" />
          </div>
          <p>New collections</p>
          <p>For everyone</p>
        </div>
        <div className="hero-latest-btn">
          <div>Latest collections</div>
          {/* <img src={} alt="" /> */}
        </div>
      </div>
      <div className="hero-right">
        <img src={heroic} alt="" />
      </div>
    </div>
  );
};

export default Hero;
