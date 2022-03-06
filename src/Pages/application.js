import React from "react";
import FirstSection from "../components/Application/FirstSection";
import SecondSection from "../components/Application/SecondSection";
import Base from "./Base";

export default function Application() {
  return (
    <React.Fragment>
      <Base
        headerBackground={"#CEA5AD"}
        headerTextColor={"var(--primary-text-color)"}
        isDarkLogo={true}
        yOffset={3500}
      >
        <FirstSection />
        <SecondSection />
      </Base>
    </React.Fragment>
  );
}
