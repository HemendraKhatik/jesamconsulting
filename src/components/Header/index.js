import React from "react";
import Style from "./index.module.css";
import Logo from "../../assets/logo/logo.svg";
import Hamburger from "../../assets/icons/hamburger.svg";

export default function Header() {
  return (
    <header className={Style.headerContainer}>
      <img src={Logo} alt="jesamconsulting logo" />
      <nav>
        <ul>
          <li>WEBSITE</li>
          <li>APPLIKATION</li>
          <li>SOFTWARE</li>
          <li>KONTAKT</li>
        </ul>
      </nav>
      <img className={Style.hamburger} src={Hamburger} alt="jesamconsulting hamburger" />
    </header>
  );
}
