import React from "react";
import Style from "./index.module.css";
import HeroImg from "../../../assets/website/hero.png";
import Slider from "../../Slider";

export default function HeroSection() {
  return (
    <div className={Style.container}>
      <div className={Style.left}>
        <h1 className={Style.mainHeading}>
          Entwicklung benutzerdefinierter Anwendungen
        </h1>

        <p className={Style.mainParagraph}>
          Wir verlassen uns auf unsere branchenspezifische Technologieerfahrung,
          um hochskalierbare, flexible und interoperable Web-, Mobil-, Desktop-
          und Hybridanwendungen bereitzustellen.
        </p>
        <div className={Style.slider}>
          <Slider />
        </div>
      </div>
      <div className={Style.right}>
        <img src={HeroImg} alt="jesamconsulting" />
      </div>
    </div>
  );
}
