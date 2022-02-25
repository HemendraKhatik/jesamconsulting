import React from "react";
import Style from "./index.module.css";

export default function FirstSection() {
  return (
    <div className={Style.firstSectionContainer}>
      <h1 className={Style.mainHeading}>
        mehr <br />
        Performance
        <br /> bedeutet nicht <br />
        weniger design
      </h1>
      <p className={Style.mainParagraph}>
        Für uns steht die Performance an erster Stelle, jede von JESAM
        Consulting entwickelte Software erfüllt höchste Qualitätsstandards.JESAM
        ist immer up-to-date und erfüllt höchste Sicherheits und
        Entwicklungsstandards.
      </p>
    </div>
  );
}
