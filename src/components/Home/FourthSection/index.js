import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../Reusable/Button";
import HowWeWork from "../../Reusable/HowWeWork";
import Style from "./index.module.css";

export default function FourthSection() {
  const navigate = useNavigate();

  const redirectToContactPage = () => {
    navigate("/contact");
  };
  return (
    <div className={Style.fourthSectionContainer}>
      <p className={Style.mainParagraph}>
        Zwischen Startup und Konzern machen wir keine Unterscheidung. Für uns
        ist jeder einzelne Kunde wichtig. Dabei streben wir eine
        partnerschaftliche Beziehung auf Augenhöhe an und pflegen eine
        transparente Kommunikation. Wir haben bereits für viele kleinere und
        große Unternehmen wertvolle Softwarelösungen entwickelt und die digitale
        Transformation erfolgreich begleitet.
      </p>

      <p className={Style.mainParagraph}>
        Zwischen Startup und Konzern machen wir keine Unterscheidung. Für uns
        ist jeder einzelne Kunde wichtig. Dabei streben wir eine
        partnerschaftliche Beziehung auf Augenhöhe an und pflegen eine
        transparente Kommunikation. Wir haben bereits für viele kleinere und
        große Unternehmen wertvolle Softwarelösungen entwickelt und die digitale
        Transformation erfolgreich begleitet.
      </p>

      <Button
        action={redirectToContactPage}
        style={{ marginTop: "5rem" }}
        title="Kostenlos beraten lassen"
      />

      <HowWeWork />
    </div>
  );
}
