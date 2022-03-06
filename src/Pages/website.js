import React from "react";
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
        yOffset={2000}
      >
        <HeroSection />
        <FirstSection />
      </Base>
    </React.Fragment>
  );
}
