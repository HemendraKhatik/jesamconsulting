import React from "react";
import Style from "./index.module.css";
import Button from "../../Reusable/Button";
import { useWindowSize } from "react-use";

export default function SecondSection() {
  const { width } = useWindowSize();

  return (
    <div className={Style.secondContainer}>
      <h1 className={Style.mainHeading}>
        Wir sind Dein Entwicklungsteam aus Bremen für anspruchsvolle
        Web-Entwicklung, App- Entwicklung und Software-Entwicklung. Unser Team
        sind prämierte und engagierte Entwickler mit jahrelanger Erfahrung, die
        Deine digitale Lösung realisieren.
      </h1>

      <Button
        style={{ marginTop: width <= 450 ? 20 : 50 }}
        title="APP-Entwicklung"
      />
      <Button
        style={{ marginTop: width <= 450 ? 20 : 50 }}
        title="Software-Entwicklung"
      />
      <Button
        style={{ marginTop: width <= 450 ? 20 : 50 }}
        title="WEB-ENTWICKLUNG"
      />
    </div>
  );
}
