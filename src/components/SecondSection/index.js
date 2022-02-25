import React from "react";
import Style from "./index.module.css";

export default function SecondSection() {
  return (
    <div className={Style.secondContainer}>
      <h1 className={Style.mainHeading}>
        Wir sind Dein Entwicklungsteam aus Bremen für anspruchsvolle
        Web-Entwicklung, App- Entwicklung und Software-Entwicklung. Unser Team
        sind prämierte und engagierte Entwickler mit jahrelanger Erfahrung, die
        Deine digitale Lösung realisieren.
      </h1>
      <div className={Style.cta}>APP-Entwicklung</div>
      <div className={Style.cta}>Software-Entwicklung</div>
      <div className={Style.cta}>WEB-ENTWICKLUNG</div>
    </div>
  );
}
