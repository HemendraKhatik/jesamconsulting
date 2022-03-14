import React from "react";
import ShootingStars from "../../Reusable/ShootingStars";
import Style from "./index.module.css";
export default function HeroSection() {
  return (
    <div className={Style.container}>
      <ShootingStars />
      <h1 className={Style.mainHeading}>
        JESAM CONSULTING <br /> GMBH
      </h1>

      <p className={Style.mainParagraph}>
        Entwicklung passend zu Deinen Anforderungen.
        <br /> Wir entwickeln Deine innovative & leistungsstarke digitale
        Zukunft.
      </p>
      <p className={Style.endLines}>
        DEINE WEBSITE
        <br />
        DEINE APP
        <br />
        DEINE SOFTWARELÖSUNG
      </p>
    </div>
  );
}
