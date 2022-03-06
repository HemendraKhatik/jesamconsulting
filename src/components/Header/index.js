import React, { useState } from "react";
import Style from "./index.module.css";
import Logo from "../../assets/logo/logo.svg";
import DarkLogo from "../../assets/logo/dark_logo.svg";
import Hamburger from "../../assets/icons/hamburger.svg";
import DarkHamburger from "../../assets/icons/dark_hamburger.svg";
import CloseIcon from "../../assets/icons/closeIcon.svg";
import LightCloseIcon from "../../assets/icons/light_closeIcon.svg";
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
          <Link to="/software">
            <li style={{ color: color ? color : "var(--primary-color)" }}>
              SOFTWARE
            </li>
          </Link>
          <Link to="/contact">
            <li style={{ color: color ? color : "var(--primary-color)" }}>
              KONTAKT
            </li>
          </Link>
        </ul>
      </nav>

      {isNavBarVisible && (
        <nav className={isDarkLogo ? Style.darkMobileNav : Style.mobileNav}>
          <ul>
            <Link to="/website">
              <li
                className={
                  isDarkLogo
                    ? Style.darkActivemobilelink
                    : Style.activemobilelink
                }
              >
                WEBSITE
              </li>
            </Link>
            <Link to="/application">
              <li>APPLIKATION</li>
            </Link>
            <Link to="/software">
              <li>SOFTWARE</li>
            </Link>
            <Link to="/contact">
              <li>KONTAKT</li>
            </Link>
          </ul>
        </nav>
      )}

      <img
        onClick={() => setIsNavBarVisible(!isNavBarVisible)}
        className={Style.hamburger}
        src={
          isNavBarVisible
            ? isDarkLogo
              ? LightCloseIcon
              : CloseIcon
            : isDarkLogo
            ? DarkHamburger
            : Hamburger
        }
        alt="jesamconsulting hamburger"
      />
    </header>
  );
}
