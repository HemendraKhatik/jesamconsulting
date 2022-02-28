import React, { useState } from "react";
import Style from "./index.module.css";
import Logo from "../../assets/logo/logo.svg";
import Hamburger from "../../assets/icons/hamburger.svg";
import CloseIcon from "../../assets/icons/closeIcon.svg";

export default function Header() {
  const [isNavBarVisible, setIsNavBarVisible] = useState(false);

  return (
    <header className={Style.headerContainer}>
      <img src={Logo} alt="jesamconsulting logo" />
      <nav className={Style.nav}>
        <ul>
          <li>WEBSITE</li>
          <li>APPLIKATION</li>
          <li>SOFTWARE</li>
          <li>KONTAKT</li>
        </ul>
      </nav>

      {isNavBarVisible && (
        <nav className={Style.mobileNav}>
          <ul>
            <li className={Style.activemobilelink}>WEBSITE</li>
            <li>APPLIKATION</li>
            <li>SOFTWARE</li>
            <li>KONTAKT</li>
          </ul>
        </nav>
      )}

      <img
        onClick={() => setIsNavBarVisible(!isNavBarVisible)}
        className={Style.hamburger}
        src={isNavBarVisible ? CloseIcon : Hamburger}
        alt="jesamconsulting hamburger"
      />
    </header>
  );
}
