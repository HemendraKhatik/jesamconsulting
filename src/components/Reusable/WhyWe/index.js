import React from "react";
import HowWeWork from "../../Reusable/HowWeWork";
import Style from "./index.module.css";
import Item from "./Item";

const data = [
  {
    title: "Erfahrene Entwickler",
    description: `Unser exzellentes Team aus Software Entwicklern, Programmierern und
    Ingenieuren verfügt über langjährige Erfahrung in der Entwicklung von
    Websites.`,
  },
  {
    title: "Kompetente Beratung",
    description: `Unser Entwicklungsteam arbeitet eng mit Dir zusammen, um die beste Vorgehensweise bei der Erstellung Deiner Software zu ermitteln. Wir planen die Anforderungen und erstellen einen detaillierten Dokument-/Projektplan, der den Entwicklungsprozess für Dich verständlich erklärt und begleitet.`,
  },
  {
    title: "Transparenz",
    description: `Unser Entwicklungsteam und unsere Projektmanager senden Dir regelmäßige Updates, um Dich während der gesamten Projektentwicklungsphase auf dem Laufenden zu halten. 
    Kontaktiere uns per Kontaktformular, Telefon, Chat oder E-Mail, damit wir auf Deine Anliegen eingehen und Deine Fragen beantworten können.`,
  },
];

export default function FirstSection() {
  return (
    <div className={Style.container}>
      {data.map((item, index) => {
        return (
          <React.Fragment key={index}>
            <Item {...item} />
          </React.Fragment>
        );
      })}
      <HowWeWork />
    </div>
  );
}
