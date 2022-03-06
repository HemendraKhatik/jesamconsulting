import React from "react";
import Style from "./index.module.css";
import Button from '../../Reusable/Button';

export default function HeroSection() {
  return (
    <div className={Style.container}>
      <h1 className={Style.mainHeading}>JESAM CONSULTING</h1>
      <p className={Style.mainSubHeading}>ÜBER UNS</p>
      <p className={Style.mainParagraph}>
        Wir sind ein in Bremen beheimatetes Softwareentwicklungsunternehmen,
        dass sich darauf spezialisiert hat, Unternehmen maßgeschneiderte
        Technologielösungen anzubieten. Mit mehr als 50 ausgebildeten
        Softwareentwicklern und Ingenieuren kombiniert JESAM
        Technologieexpertise, domänenspezifisches Fachwissen und Leidenschaft,
        um für Dich die perfekte Lösungen Lösung bereitzustellen. Wir freuen uns
        auf Deine Anfrage.
      </p>

      <Button title="Kostenlos beraten lassen" />
    </div>
  );
}
