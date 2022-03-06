import React from "react";
import HeroSection from "../components/About/HeroSection";
import Base from "./Base";

export default function About() {
  return (
    <React.Fragment>
      <Base
        headerBackground={"var(--background)"}
        headerTextColor={"var(--primary-color)"}
        isDarkLogo={false}
        yOffset={3500}
      >
        <HeroSection />
      </Base>
    </React.Fragment>
  );
}
