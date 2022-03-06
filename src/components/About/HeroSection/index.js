import React, { useEffect, useState } from "react";
import Style from "./index.module.css";
import Button from "../../Reusable/Button";
import HowWeWork from "../../Reusable/HowWeWork";
import { useWindowSize } from "react-use";

const data = [
  {
    title: "Mobile Apps",
    description: `Wir entwickeln maßgeschneiderte native und plattformübergreifende mobile
  Apps für iOS- und Android-Plattformen, die sowohl nachhaltig als auch
  skalierbar sind. Das bedeutet, dass Systemupdates Ihren Geschäftsbetrieb
  nicht stören und alle Funktionen Ihres Geräts auf die neueste Version
  aktualisiert werden.`,
  },
  {
    title: "Unternehmens Apps",
    description: `Um Arbeitsabläufe zu rationalisieren und Geschäftsprozesse für Customer
    Relationship Management (CRM), Supply Chain Management (SCM), Enterprise
    Resource Planning (ERP) und vieles mehr zu verbessern, entwickeln wir
    auf Grundlage ihrer Bedürfnisse mobile Anwendungen der
    Enterprise-Klasse.`,
  },
  {
    title: "Web-Apps",
    description: `Unser talentiertes und engagiertes Entwickler Team erstellt
    benutzerfreundliche Web Anwendungen mit Mobile-First-Schnittstellen
    erstellen. Egal, ob Sie eine online-shop-Plattform oder ein
    Business-Webportal benötigen, das auf verschiedenen Geräten oder
    Browsern funktioniert, JESAM Consulting bietet Ihnen alles.`,
  },
];
export default function HeroSection() {
  const [margin, setMargin] = useState(100);
  const { width } = useWindowSize();

  useEffect(() => {
    if (width <= 900 && width >= 500) {
      setMargin(50);
    }
    if (width <= 500) {
      setMargin(30);
    }
  }, [width]);

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

      <Button
        style={{ marginBottom: margin }}
        title="Kostenlos beraten lassen"
      />
      <h1 className={Style.mainHeading}>
        Unsere App-Entwickler haben Erfahrung in der Entwicklung von…
      </h1>

      {data.map((item, index) => {
        return (
          <React.Fragment key={index}>
            <p className={Style.mainSubHeading}>{item.title}</p>
            <p className={Style.mainParagraph}>{item.description}</p>
          </React.Fragment>
        );
      })}

      <HowWeWork />
    </div>
  );
}
