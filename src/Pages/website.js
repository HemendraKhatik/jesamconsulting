import React from "react";
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
      </Base>
    </React.Fragment>
  );
}
