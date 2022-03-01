import React from "react";
import Style from "./index.module.css";

export default function FirstSection() {
  return (
    <div className={Style.container}>
      <h1 className={Style.mainHeading}>Sie benötigen eine eigene App?</h1>
      <h1 className={Style.mainParagraph}>
        Wir sind der ideale Partner für die Appentwicklung und Umsetzung Ihrer
        Vision. Als Digitalagentur bieten wir Ihnen umfassendes Know-how und
        besitzen eine große Erfahrung in diesem Bereich. Setzen Sie sich jetzt
        mit unseren Spezialisten in Verbindung. Gerne beraten wir Sie umfassend
        zu allen Themen rund um die App- und Softwareentwicklung.
        <br /><br />
        Bei mobilen Applikationen, auch „Apps“ genannt, handelt es sich um
        Anwendungssoftware für mobile Endgeräte wie Smartphones oder Tablets.
        Allgemein werden Apps in drei Kategorien eingeteilt: Native Apps,
        hybride Apps und sogenannte mobile Web-Apps. Die Programmierung mobiler
        Applikationen gehört seit jeher zu unseren Steckenpferden. Daher können
        wir auf dem Gebiet der App-Entwicklung ein sehr breites Spektrum
        verschiedenster Dienste und Anwendungen für alle gängigen Smartphones
        und Betriebssysteme abdecken. Mobile Apps unterscheiden sich in der
        Programmierung und bieten dementsprechend je nach Anwendungsfall viele
        Vorteile.
      </h1>
    </div>
  );
}
