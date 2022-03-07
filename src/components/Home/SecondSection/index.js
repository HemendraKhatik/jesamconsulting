import React from "react";
import Style from "./index.module.css";
import Button from "../../Reusable/Button";
import { useWindowSize } from "react-use";
import { useNavigate } from "react-router-dom";

export default function SecondSection() {
  const { width } = useWindowSize();

  const navigate = useNavigate();

  return (
    <div className={Style.secondContainer}>
      <h1 className={Style.mainHeading}>
        Wir sind Dein Entwicklungsteam aus Bremen für anspruchsvolle
        Web-Entwicklung, App- Entwicklung und Software-Entwicklung. Unser Team
        sind prämierte und engagierte Entwickler mit jahrelanger Erfahrung, die
        Deine digitale Lösung realisieren.
      </h1>

      <Button
        action={() => navigate("/application")}
        style={{ marginTop: width <= 450 ? "2rem" : "5rem" }}
        title="APP-Entwicklung"
      />
      <Button
        action={() => navigate("/software")}
        style={{ marginTop: width <= 450 ? "2rem" : "5rem" }}
        title="Software-Entwicklung"
      />
      <Button
        action={() => navigate("/website")}
        style={{ marginTop: width <= 450 ? "2rem" : "5rem" }}
        title="WEB-ENTWICKLUNG"
      />
    </div>
  );
}
