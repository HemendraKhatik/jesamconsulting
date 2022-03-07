import React, { useState } from "react";
import Style from "./index.module.css";
import Logo from "../../assets/logo/logo.svg";
import DarkLogo from "../../assets/logo/dark_logo.svg";
import Hamburger from "../../assets/icons/hamburger.svg";
import DarkHamburger from "../../assets/icons/dark_hamburger.svg";
import CloseIcon from "../../assets/icons/closeIcon.svg";
import LightCloseIcon from "../../assets/icons/light_closeIcon.svg";
import { Link, useNavigate } from "react-router-dom";
import { useLocalStorage } from "react-use";

export default function Header({ background, color, isDarkLogo }) {
  const [activeLink, setActiveLink] = useLocalStorage("activeLink", 1);

  const [isNavBarVisible, setIsNavBarVisible] = useState(false);
  const navigate = useNavigate();
  
  const redirectToHome = () => {
    setActiveLink(-1);
    navigate("/");
  };

  const navigationLinks = [
    {
      title: "WEBSITE",
      route: "/website",
    },
    {
      title: "APPLIKATION",
      route: "/application",
    },
    {
      title: "SOFTWARE",
      route: "/software",
    },
    {
      title: "KONTAKT",
      route: "/contact",
    },
    {
      title: "",
      route: "/website",
    },
  ];

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
          {navigationLinks.map((item, index) => {
            const activeClass = isDarkLogo
              ? Style.darkActivemobilelink
              : Style.activemobilelink;
            return (
              <Link key={index} to={item.route}>
                <li
                  onClick={() => setActiveLink(index)}
                  style={{
                    color: color ? color : "var(--primary-color)",
                    borderBottom:
                      index === activeLink && color
                        ? `2px solid ${color}`
                        : "0px solid red",
                  }}
                  className={index === activeLink ? activeClass : null}
                >
                  {item.title}
                </li>
              </Link>
            );
          })}
        </ul>
      </nav>

      {isNavBarVisible && (
        <nav className={isDarkLogo ? Style.darkMobileNav : Style.mobileNav}>
          <ul>
            {navigationLinks.map((item, index) => {
              const activeClass = isDarkLogo
                ? Style.darkActivemobilelink
                : Style.activemobilelink;
              return (
                <Link key={index} to={item.route}>
                  <li
                    onClick={() => setActiveLink(index)}
                    className={index === activeLink ? activeClass : null}
                    // style={{ color: color ? color : "var(--primary-color)" }}
                  >
                    {item.title}
                  </li>
                </Link>
              );
            })}
            {/* <Link to="/website">
              <li
                onClick={() => setActiveLink(0)}
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
              <li onClick={() => setActiveLink(1)}>APPLIKATION</li>
            </Link>
            <Link to="/software">
              <li onClick={() => setActiveLink(2)}>SOFTWARE</li>
            </Link>
            <Link to="/contact">
              <li onClick={() => setActiveLink(3)}>KONTAKT</li>
            </Link> */}
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
