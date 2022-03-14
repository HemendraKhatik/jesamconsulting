import React from "react";
import FirstSection from "../components/Home/FirstSection";
import HeroSection from "../components/Home/HeroSection";
import SecondSection from "../components/Home/SecondSection";
// import ThirdSection from "../components/Home/ThirdSection";
import FourthSection from "../components/Home/FourthSection";
import Base from "./Base";

export default function index() {
  return (
    <React.Fragment>
      <Base showBubble={true} yOffset={4000}>
        <HeroSection />
        <FirstSection />
        <SecondSection />
        {/* <ThirdSection /> */}
        <FourthSection />
      </Base>
    </React.Fragment>
  );
}
