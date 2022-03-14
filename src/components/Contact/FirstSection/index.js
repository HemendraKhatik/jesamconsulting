import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../Reusable/Button";
import PopUp from "../PopUp";
import Style from "./index.module.css";

export default function FirstSection() {
  const [popUp, setPopUp] = useState(false);
  const [loading, setLoading] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [appDevelopment, setAppDevelopment] = useState(false);
  const [webDevelopment, setWebDevelopment] = useState(false);
  const [softwareDevelopment, setSoftwareDevelopment] = useState(false);
  const [aiDevelopment, setAiDevelopment] = useState(false);
  const [consulting, setConsulting] = useState(false);

  const navigate = useNavigate();
  const redirectToAboutPage = () => {
    navigate("/about");
  };

  const submit = () => {
    setLoading(true);
    const data = {
      firstName,
      lastName,
      email,
      phone,
      queryType: {
        appDevelopment,
        webDevelopment,
        softwareDevelopment,
        aiDevelopment,
        consulting,
      },
    };

    axios({
      method: "POST",
      url: "https://mysterious-woodland-24203.herokuapp.com/sendMail",
      data: data,
      headers: {
        "content-type": "application/json; charset=utf-8",
      },
    })
      .then((res) => {
        setPopUp(true);
        setLoading(false);
      })
      .catch((err) => {
        console.log("err", err);
        setLoading(false);
      });
  };
  return (
    <div className={Style.container}>
      {/* Popup */}

      {popUp && (
        <PopUp
          action={() => {
            setPopUp(false);
          }}
        />
      )}

      <div className={Style.upperContainer}>
        <div className={Style.left}>
          <h1 className={Style.mainHeading}>Kostenlos beraten lassen</h1>
          <p className={Style.mainSubHeading}>Wobei können wir Dir helfen? </p>
        </div>
        <div className={Style.right}>
          <div className={Style.inputField}>
            <input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              type="text"
              placeholder="Vorname"
            />
          </div>
          <div className={Style.inputField}>
            <input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              type="text"
              placeholder="Nachname"
            />
          </div>
          <div className={Style.inputField}>
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              type="text"
              placeholder="Telefon"
            />
          </div>
          <div className={Style.inputField}>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="E-Mail"
            />
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
              type="checkbox"
              id="App-Entwicklung"
              name="option"
              value="App-Entwicklung"
              checked={appDevelopment}
              onChange={() => setAppDevelopment(!appDevelopment)}
            />
            <span
              onClick={() => setAppDevelopment(!appDevelopment)}
              className={Style.checkmark}
            ></span>
             <label htmlFor="App-Entwicklung">App-Entwicklung</label>
          </div>
          <div className={Style.radioInputField}>
            <input
              type="checkbox"
              id="Web-Entwicklung"
              name="option"
              value="Web-Entwicklung"
              checked={webDevelopment}
              onChange={() => setWebDevelopment(!webDevelopment)}
            />
            <span
              onClick={() => setWebDevelopment(!webDevelopment)}
              className={Style.checkmark}
            ></span>
             <label htmlFor="Web-Entwicklung">Web-Entwicklung</label>
          </div>

          <div className={Style.radioInputField}>
            <input
              type="checkbox"
              id="Software-Entwicklung"
              name="option"
              value="Software-Entwicklung"
              checked={softwareDevelopment}
              onChange={() => setSoftwareDevelopment(!softwareDevelopment)}
            />
            <span
              onClick={() => setSoftwareDevelopment(!softwareDevelopment)}
              className={Style.checkmark}
            ></span>
              <label htmlFor="Software-Entwicklung">Software-Entwicklung</label>
          </div>
          <div className={Style.radioInputField}>
            <input
              type="checkbox"
              id="KI-Entwicklung"
              name="option"
              value="KI-Entwicklung"
              checked={aiDevelopment}
              onChange={() => setAiDevelopment(!aiDevelopment)}
            />
            <span
              onClick={() => setAiDevelopment(!aiDevelopment)}
              className={Style.checkmark}
            ></span>
              <label htmlFor="App-Entwicklung">KI-Entwicklung</label>
          </div>
          <div className={Style.radioInputField}>
            <input
              type="checkbox"
              id="Consulting"
              name="option"
              value="Consulting"
              checked={consulting}
              onChange={() => setConsulting(!consulting)}
            />
            <span
              onClick={() => setConsulting(!consulting)}
              className={Style.checkmark}
            ></span>
             <label htmlFor="Consulting">Consulting</label>
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
            action={redirectToAboutPage}
          />
        </div>
        <div className={Style.btn}>
          <Button
            style={{
              backgroundColor: "var(--background)",
              color: "var(--primary-color)",
            }}
            title="Absenden"
            action={submit}
            loading={loading}
          />
        </div>
      </div>
    </div>
  );
}
