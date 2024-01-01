import React from "react";
import HeroSideBar from "../components/HeroSideBar";
import HeroSlider from "../components/HeroSlider";

function HeroSection() {
  return (
    <div className="Hero-section container">
      <div className="Hero-container row">
        <HeroSideBar />
        <HeroSlider />
      </div>
    </div>
  );
}

export default HeroSection;
