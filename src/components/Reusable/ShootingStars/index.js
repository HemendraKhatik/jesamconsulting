import React from "react";
import Styles from "./index.module.css";

export default function ShootingStars() {
  return (
    <div className={Styles.night}>
      <div className={Styles.shooting_star}></div>
      <div className={Styles.shooting_star}></div>
      <div className={Styles.shooting_star}></div>
      <div className={Styles.shooting_star}></div>
    </div>
  );
}
