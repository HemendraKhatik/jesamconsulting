import React, { useState } from "react";
import Style from "./index.module.css";
import Logo from "../../assets/logo/logo.svg";
import DarkLogo from "../../assets/logo/dark_logo.svg";
import Hamburger from "../../assets/icons/hamburger.svg";
import CloseIcon from "../../assets/icons/closeIcon.svg";
import { Link, useNavigate } from "react-router-dom";

export default function Header({ background, color, isDarkLogo }) {
  const [isNavBarVisible, setIsNavBarVisible] = useState(false);

  const navigate = useNavigate();

  const redirectToHome = () => {
    navigate("/");
  };

  return (
    <header
      style={{ backgroundColor: background ? background : "var(--background)" }}
      className={Style.headerContainer}
    >
      <img
        onClick={redirectToHome}
        src={isDarkLogo ? DarkLogo : Logo}
        alt="jesamconsulting logo"
      />
      <nav className={Style.nav}>
        <ul>
          <Link to="/website">
            <li style={{ color: color ? color : "var(--primary-color)" }}>
              WEBSITE
            </li>
          </Link>
          <Link to="/application">
            <li style={{ color: color ? color : "var(--primary-color)" }}>
              APPLIKATION
            </li>
          </Link>
          <li style={{ color: color ? color : "var(--primary-color)" }}>
            SOFTWARE
          </li>
          <li style={{ color: color ? color : "var(--primary-color)" }}>
            KONTAKT
          </li>
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
