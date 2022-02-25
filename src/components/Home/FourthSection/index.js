import React from "react";
import Button from "../../Reusable/Button";
import TextCard from "../../Reusable/TextCard";
import Style from "./index.module.css";

export default function FourthSection() {
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

      <Button style={{ marginTop: 50 }} title="Kostenlos beraten lassen" />

      <div className={Style.row}>
        <TextCard
          title="Erzählen Sie uns von Ihren Bedürfnissen"
          description="Per E-Mail, vor Ort, dem Telefon, durch Kontaktaufnahme mit dem Formular oder per Chat kannst du uns mitteilen, was Deine Anforderugen für das System sind."
        />
        <TextCard
          title="Wir tauschen uns aus"
          description="Nach Eingang der Informationen treffen wir uns persönlich oder virtuell, um mögliche Lösungen zu besprechen und weitere Details zu klären."
        />
        <TextCard
          title="Wir entwickeln Deine Idee"
          description="Sobald alles klar ist, beginnen wir mit der Entwicklung und Lieferung gemäß den festgelegten Fristen."
        />
      </div>

      <div className={Style.buttonContainer}>
        <Button title="Über uns" />
        <Button title="Kostenlos beraten lassen" />
      </div>
    </div>
  );
}
