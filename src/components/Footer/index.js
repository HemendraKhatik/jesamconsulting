import React from "react";
import Style from "./index.module.css";
import Logo from "../../assets/logo/light_logo.svg";
import PhoneIcon from "../../assets/icons/phone.svg";
import EmailIcon from "../../assets/icons/email.svg";
import FacebookIcon from "../../assets/icons/linkedin.svg";
import InstagramIcon from "../../assets/icons/instagram.svg";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className={Style.footerContainer}>
      <div className={Style.innnerContainer}>
        <div className={Style.mobileNav}>
          <nav className={Style.nav}>
            <ul>
              <Link to="/website">
                <li>WEBSITE</li>
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
        </div>
        <div className={Style.left}>
          <img src={Logo} alt="jesamconsulting logo" />
          <h1>IMPRESSUM</h1>
          <p>
            Angaben gemäß § 5 TMG JESAM Consulting GmbH Insterburger Str. 5
            28207 Bremen
          </p>
        </div>
        <div className={Style.center}>
          <nav className={Style.nav}>
            <ul>
              <Link to="/website">
                <li>WEBSITE</li>
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
        </div>
        <div className={Style.right}>
          <div className={Style.contactItem}>
            <a href="tel:042179281617">
              <img src={PhoneIcon} alt="jesamconsulting phone icon" />
            </a>
            <a href="tel:042179281617">
              <h1>0421 79281617</h1>
            </a>
          </div>
          <div className={Style.contactItem}>
            <a href="mailto:impressum@jesamconsulting.com">
              <img src={EmailIcon} alt="jesamconsulting email icon" />
            </a>
            <a href="mailto:impressum@jesamconsulting.com">
              <h1>impressum@jesamconsulting.com</h1>
            </a>
          </div>
          <div className={Style.contactItem}>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/company/jesam-consulting-gmbh/"
            >
              <img src={FacebookIcon} alt="jesamconsulting Linkedin icon" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/company/jesam-consulting-gmbh/"
            >
              <h2>Linkedin</h2>
            </a>
          </div>
          <div className={Style.contactItem}>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/jesamconsulting/"
            >
              <img src={InstagramIcon} alt="jesamconsulting INSTAGRAM icon" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/jesamconsulting/"
            >
              <h2>INSTAGRAM</h2>
            </a>
          </div>
        </div>
      </div>

      <p className={Style.copywrite}>
        Copyright © 2021 JESAM. Alle Rechte vorbehalten.
      </p>
    </footer>
  );
}
