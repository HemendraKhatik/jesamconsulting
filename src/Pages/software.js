import React from "react";
import FirstSection from "../components/Software/FirstSection";
import HeroSection from "../components/Software/HeroSection";
import Base from "./Base";

export default function Software() {
  return (
    <React.Fragment>
      <Base
        headerBackground={"var(--tertiary-background)"}
        headerTextColor={"var(--primary-color)"}
        isDarkLogo={false}
        yOffset={3000}
      >
        <HeroSection />
        <FirstSection/>
      </Base>
    </React.Fragment>
  );
}
