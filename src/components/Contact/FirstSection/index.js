import React from "react";
import Button from "../../Reusable/Button";
import Style from "./index.module.css";

export default function FirstSection() {
  return (
    <div className={Style.container}>
      <div className={Style.upperContainer}>
        <div className={Style.left}>
          <h1 className={Style.mainHeading}>Kostenlos beraten lassen</h1>
          <p className={Style.mainSubHeading}>Wobei können wir Dir helfen? </p>
        </div>
        <div className={Style.right}>
          <div className={Style.inputField}>
            <input type="text" placeholder="Vorname" />
          </div>
          <div className={Style.inputField}>
            <input type="text" placeholder="Nachname" />
          </div>
          <div className={Style.inputField}>
            <input type="text" placeholder="Telefon" />
          </div>
          <div className={Style.inputField}>
            <input type="text" placeholder="E-Mail" />
          </div>
        </div>
      </div>
      <div className={Style.upperContainer}>
        <div className={Style.left}>
          <p className={Style.mainSubHeading}>
            Wozu möchtest du Dich beraten lassen?
          </p>
        </div>
        <div className={Style.right}>
          <div className={Style.radioInputField}>
            <input
              type="radio"
              id="App-Entwicklung"
              name="option"
              value="App-Entwicklung"
            />
            <span className={Style.checkmark}></span> 
            <label htmlFor="App-Entwicklung">App-Entwicklung</label>
          </div>
          <div className={Style.radioInputField}>
            <input
              type="radio"
              id="Web-Entwicklung"
              name="option"
              value="Web-Entwicklung"
            />
            <span className={Style.checkmark}></span> 
            <label htmlFor="Web-Entwicklung">Web-Entwicklung</label>
          </div>

          <div className={Style.radioInputField}>
            <input
              type="radio"
              id="Software-Entwicklung"
              name="option"
              value="Software-Entwicklung"
            />
            <span className={Style.checkmark}></span> {" "}
            <label htmlFor="Software-Entwicklung">Software-Entwicklung</label>
          </div>
          <div className={Style.radioInputField}>
            <input
              type="radio"
              id="KI-Entwicklung"
              name="option"
              value="KI-Entwicklung"
            />
            <span className={Style.checkmark}></span> {" "}
            <label htmlFor="App-Entwicklung">KI-Entwicklung</label>
          </div>
          <div className={Style.radioInputField}>
            <input
              type="radio"
              id="KI-Entwicklung"
              name="option"
              value="KI-Entwicklung"
            />
            <span className={Style.checkmark}></span> 
            <label htmlFor="App-Entwicklung">Consulting</label>
          </div>
        </div>
      </div>
      <div className={Style.buttonContainer}>
        <div className={Style.btn}>
          <Button
            style={{
              backgroundColor: "var(--background)",
              color: "var(--primary-color)",
            }}
            title="Über uns"
          />
        </div>
        <div className={Style.btn}>
          <Button
            style={{
              backgroundColor: "var(--background)",
              color: "var(--primary-color)",
            }}
            title="Absenden"
          />
        </div>
      </div>
    </div>
  );
}
