import React from "react";
import WhyWe from "../components/Reusable/WhyWe";
import FirstSection from "../components/Website/FirstSection";
import HeroSection from "../components/Website/HeroSection";
import Base from "./Base";

export default function website() {
  return (
    <React.Fragment>
      <Base
        headerBackground={"var(--primary-background)"}
        headerTextColor={"var(--primary-text-color)"}
        isDarkLogo={true}
      >
        <HeroSection />
        <FirstSection />
      </Base>
    </React.Fragment>
  );
}
