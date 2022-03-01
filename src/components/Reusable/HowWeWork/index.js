import React from "react";
import { useWindowSize } from "react-use";
import Button from "../Button";
import TextCard from "../TextCard";
import Style from "./index.module.css";

export default function HowWeWork() {
  const { width } = useWindowSize();
  return (
    <React.Fragment>
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
        <Button
          style={{ marginTop: width <= 450 ? "5rem" : 0 }}
          title="Kostenlos beraten lassen"
        />
      </div>
    </React.Fragment>
  );
}
