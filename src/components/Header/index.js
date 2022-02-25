import React from "react";
import Style from "./index.module.css";
import Logo from "../../assets/logo/logo.svg";
export default function Header() {
  return (
    <div className={Style.headerContainer}>
      <img src={Logo} alt="Jessam" />
      <nav>
        <ul>
          <li>WEBSITE</li>
          <li>APPLIKATION</li>
          <li>SOFTWARE</li>
          <li>KONTAKT</li>
        </ul>
      </nav>
    </div>
  );
}
