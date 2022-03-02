import React from "react";
import Style from "./index.module.css";

export default function HeroSection() {
  return (
    <div className={Style.container}>
      <h1 className={Style.mainParagraph}>
        Wir bieten erstklassige kundenspezifische Softwareentwicklungsdienste
        für Start-ups, kleine bis mittelständische Unternehmen (KMU) und
        Großunternehmen.
      </h1>

      <div className={Style.row}>
        <div>
          <h1>Professionelles UI und UX Design</h1>
        </div>
        <div>
          <h1>Agile Umsetzung nach Scrum</h1>
        </div>
        <div>
          <h1>Code Dokumentation und Verwaltung</h1>
        </div>
      </div>
    </div>
  );
}
