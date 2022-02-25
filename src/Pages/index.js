import React from "react";
import FirstSection from "../components/Home/FirstSection";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSection from "../components/Home/HeroSection";
import SecondSection from "../components/Home/SecondSection";
import ThirdSection from "../components/Home/ThirdSection";
import FourthSection from "../components/Home/FourthSection";

export default function index() {
  return (
    <React.Fragment>
      <Header />
      <HeroSection />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <Footer />
    </React.Fragment>
  );
}
