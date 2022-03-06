import React from "react";
import FirstSection from "../components/Contact/FirstSection";
import Base from "./Base";

export default function Contact() {
  return (
    <React.Fragment>
      <Base
        headerBackground={"var(--primary-background)"}
        headerTextColor={"var(--primary-text-color)"}
        isDarkLogo={true}
        yOffset={1500}

      >
        <FirstSection />
      </Base>
    </React.Fragment>
  );
}
