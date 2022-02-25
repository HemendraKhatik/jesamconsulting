import React from "react";
import FirstSection from "../components/FirstSection";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import SecondSection from "../components/SecondSection";

export default function index() {
  return (
    <React.Fragment>
      <Header />
      <HeroSection />
      <FirstSection />
      <SecondSection />
    </React.Fragment>
  );
}
