import React from "react";
import Style from "./index.module.css";
import LogoOne from "../../../assets/icons/technologies/1.svg";
import LogoTwo from "../../../assets/icons/technologies/2.svg";
import LogoThree from "../../../assets/icons/technologies/3.svg";
import LogoFour from "../../../assets/icons/technologies/4.svg";
import LogoFive from "../../../assets/icons/technologies/5.svg";
import LogoSix from "../../../assets/icons/technologies/6.svg";
import LogoSeven from "../../../assets/icons/technologies/7.svg";
import LogoEight from "../../../assets/icons/technologies/8.svg";
import LogoNine from "../../../assets/icons/technologies/9.svg";
import LogoTen from "../../../assets/icons/technologies/10.svg";
import LogoEleven from "../../../assets/icons/technologies/11.svg";
import LogoTwelve from "../../../assets/icons/technologies/12.svg";

const logos = [
  LogoOne,
  LogoTwo,
  LogoThree,
  LogoFour,
  LogoFive,
  LogoSix,
  LogoSeven,
  LogoEight,
  LogoNine,
  LogoTen,
  LogoEleven,
  LogoTwelve,
];
export default function FirstSection() {
  return (
    <div className={Style.container}>
      <h1 className={Style.mainHeading}>Du suchst einen Entwickler?</h1>
      <h1 className={Style.mainParagraph}>
        Wir haben Software Ingenieure, die sich in den Programmiersprachen
        auskennen.
      </h1>
      <div className={Style.logos}>
        {logos.map((logo, index) => {
          return (
            <div key={index} className={Style.logo}>
              <img width="100%" height="100%" src={logo} alt="tech logo" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
