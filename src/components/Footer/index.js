import React from "react";
import Style from "./index.module.css";
import Logo from "../../assets/logo/light_logo.svg";
import PhoneIcon from "../../assets/icons/phone.svg";
import EmailIcon from "../../assets/icons/email.svg";
import FacebookIcon from "../../assets/icons/facebook.svg";
import InstagramIcon from "../../assets/icons/instagram.svg";

export default function Footer() {
  return (
    <footer className={Style.footerContainer} >
      <div className={Style.innnerContainer}>
        <div className={Style.left}>
          <img src={Logo} alt="jesamconsulting logo" />
          <h1>IMPRESSUM</h1>
          <p>
            Angaben gemäß § 5 TMG JESAM Consulting GmbH Insterburger Str. 5
            28207 Bremen
          </p>
        </div>
        <div className={Style.center}>
          <nav>
            <ul>
              <li>WEBSITE</li>
              <li>APPLIKATION</li>
              <li>SOFTWARE</li>
              <li>KONTAKT</li>
            </ul>
          </nav>
        </div>
        <div className={Style.right}>
          <div className={Style.contactItem}>
            <img src={PhoneIcon} alt="jesamconsulting phone icon" />
            <h1>insert phone numbre</h1>
          </div>
          <div className={Style.contactItem}>
            <img src={EmailIcon} alt="jesamconsulting phone icon" />
            <h1>impressum@jesamconsulting.com</h1>
          </div>
          <div className={Style.contactItem}>
            <img src={FacebookIcon} alt="jesamconsulting phone icon" />
            <h2>FACEBOOK</h2>
          </div>
          <div className={Style.contactItem}>
            <img src={InstagramIcon} alt="jesamconsulting phone icon" />
            <h2>INSTAGRAM</h2>
          </div>
        </div>
      </div>

      <p className={Style.copywrite}>Copyright © 2021 JESAM. Alle Rechte vorbehalten.</p>
    </footer>
  );
}
