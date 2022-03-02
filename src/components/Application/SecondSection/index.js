import React from "react";
import Style from "./index.module.css";
import WhyWe from "../../Reusable/WhyWe";

const data = [
  {
    title: "Skalierbar",
    description:
      "Wir entwickeln unsere Software, websites und Apps so, dass sie einen großen Zustrom von Benutzern und einen erhöhten Datenverkehr problemlos bewältigen können.",
  },
  {
    title: "Sicher",
    description:
      "Bei JESAM Consulting sind wir äußerst sicherheitsbewusst, was bedeutet, dass wir alles dafür tun, um Deine wichtigen Daten zu schützen, indem wir robuste Sicherheitsprotokolle implementieren und die Einhaltung branchenspezifischer Vorschriften sicherstellen.",
  },
  {
    title: "Nutzerfreundlich zu bedienen",
    description:
      "Bei JESAM Consulting sind wir äußerst sicherheitsbewusst, was bedeutet, dass wir alles dafür tun, um Deine wichtigen Daten zu schützen, indem wir robuste Sicherheitsprotokolle implementieren und die Einhaltung branchenspezifischer Vorschriften sicherstellen.",
  },
];
export default function SecondSection() {
  return (
    <>
      <div className={Style.container}>
        <h1 className={Style.mainHeading}>Unsere Apps sind…</h1>
        {data.map((item, index) => {
          return (
            <details open key={index} className={Style.details}>
              <summary className={Style.summary}>{item.title}</summary>
              <h1 className={Style.mainParagraph}>{item.description}</h1>
            </details>
          );
        })}
      </div>
      <div className={Style.secondContainer}>
        <WhyWe />
      </div>
    </>
  );
}
