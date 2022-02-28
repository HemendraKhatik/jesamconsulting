import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Base({
  children,
  headerBackground,
  headerTextColor,
  isDarkLogo,
}) {
  return (
    <React.Fragment>
      <Header
        background={headerBackground}
        color={headerTextColor}
        isDarkLogo={isDarkLogo}
      />
      {children}
      <Footer />
    </React.Fragment>
  );
}
