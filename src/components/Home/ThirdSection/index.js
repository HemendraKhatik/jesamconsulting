import React from "react";
import Style from "./index.module.css";
import CompanyOne from "../../../assets/home/company1.png";
import CompanyTwo from "../../../assets/home/company2.png";
import CompanyThree from "../../../assets/home/company3.png";
import Slider from "../../Slider";
import Sound from "../Svg/Sound";
import Tab from "../Svg/Sound/Tab";
// import Mike from "../../../assets/home/mike.svg";

export default function ThirdSection() {
  return (
    <div className={Style.thirdSectionContainer}>
      <h1 className={Style.mainHeading}>
        Diese Unternehmen vertrauen jesam consulting
      </h1>
      <div className={Style.companies}>
        <img src={CompanyThree} alt="icon " />
        <img src={CompanyTwo} alt="icon " />
        <img src={CompanyOne} alt="icon " />
      </div>
      <div className={Style.slider}>
        <Slider />
      </div>
      <Sound style={Style.sound} />
      <Tab style={Style.mobileSoundSvg} />
      {/* <img src={Mike} alt="icon " /> */}
    </div>
  );
}
