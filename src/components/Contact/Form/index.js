import React from "react";
import Style from "./index.module.css";
export default function Form() {
  return (
    <React.Fragment>
      <div className={Style.radioInputField}>
        <input
          type="checkbox"
          id="App-Entwicklung"
          name="option"
          value="App-Entwicklung"
        />
        <span className={Style.checkmark}></span> 
        <label htmlFor="App-Entwicklung">App-Entwicklung</label>
      </div>
      <div className={Style.radioInputField}>
        <input
          type="checkbox"
          id="Web-Entwicklung"
          name="option"
          value="Web-Entwicklung"
        />
        <span className={Style.checkmark}></span> 
        <label htmlFor="Web-Entwicklung">Web-Entwicklung</label>
      </div>

      <div className={Style.radioInputField}>
        <input
          type="checkbox"
          id="Software-Entwicklung"
          name="option"
          value="Software-Entwicklung"
        />
        <span className={Style.checkmark}></span> {" "}
        <label htmlFor="Software-Entwicklung">Software-Entwicklung</label>
      </div>
      <div className={Style.radioInputField}>
        <input
          type="checkbox"
          id="KI-Entwicklung"
          name="option"
          value="KI-Entwicklung"
        />
        <span className={Style.checkmark}></span> {" "}
        <label htmlFor="App-Entwicklung">KI-Entwicklung</label>
      </div>
      <div className={Style.radioInputField}>
        <input
          type="checkbox"
          id="KI-Entwicklung"
          name="option"
          value="KI-Entwicklung"
        />
        <span className={Style.checkmark}></span> 
        <label htmlFor="App-Entwicklung">Consulting</label>
      </div>
    </React.Fragment>
  );
}
