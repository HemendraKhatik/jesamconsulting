import React, { lazy, Suspense } from "react";
import Style from "./index.module.css";
import Tab from "../Svg/Sound/Tab";
import DesktopCarousel from "./DesktopCarousel";
import "./carousel.css";


export default function ThirdSection() {
  return (
    <div className={Style.thirdSectionContainer}>
      <h1 className={Style.mainHeading}>
        Diese Unternehmen vertrauen jesam consulting
      </h1>
        <DesktopCarousel />
      <Tab style={Style.mobileSoundSvg} />
    </div>
  );
}
