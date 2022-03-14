import React from "react";
import { useNavigate } from "react-router-dom";
import Style from "./index.module.css";

export default function PopUp({ action }) {
  const navigate = useNavigate();
  const exporeMore = () => {
    navigate("/");
    action();
  };
  return (
    <div className={Style.container}>
      <div className={Style.innerContainer}>
        <h1 onClick={action} className={Style.close}>
          close
        </h1>

        <h1 className={Style.heading}>Thank you for contacting us</h1>
        <p className={Style.subHeading}>We will get back to you shortly.</p>

        <button onClick={exporeMore}>Explore More</button>
      </div>
    </div>
  );
}
