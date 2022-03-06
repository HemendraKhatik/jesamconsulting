import React from "react";
import Style from "./index.module.css";
import "./carousel.css";

export default function DesktopCarousel() {
  return (
    <div className={Style.row}>
          <div>
            <h1>Webbasierte maßgeschneiderte Lösungen</h1>
            <h2>
              Wir sind nicht nur darauf spezialisiert, die beste technische
              Lösung bereitzustellen, sondern diese Lösung auch kreativ zu
              verbessern, indem wir die professionelle Anwendung präzise auf die
              Anforderungen Ihres Unternehmens zuschneiden.
            </h2>

            <p className={Style.readMore}>Mehr erfahren</p>
          </div>

          <div>
            <h1>Entwicklung von B2B, B2E und B2C Anwendungen</h1>
            <h2>
              Die Anforderungen an die Individualsoftwareentwicklung sind ganz
              unterschiedlich – je nachdem, ob die Anwendungen für
              Geschäftspartner, Ihre eignen Mitarbeiter oder private
              Endverbraucher bestimmt sind.
            </h2>

            <p className={Style.readMore}>Mehr erfahren</p>
          </div>

          <div>
            <h1>Agile Methoden</h1>
            <h2>
              Bei 28Apps setzen wir bei der individuellen Softwareentwicklung
              stets auf agile Methoden. Wir sind überzeugt davon, dass wir auf
              diese Weise die Kundenwünsche besonders gut erfüllen und die
              Projekte schnell umsetzen können.
            </h2>

            <p className={Style.readMore}>Mehr erfahren</p>
          </div>
        </div>
  )
}
