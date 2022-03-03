import React, { useRef } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

export default function Base({
  children,
  headerBackground,
  headerTextColor,
  isDarkLogo,
}) {
  
  const constraintsRef = useRef(null);

  return (
    <React.Fragment>
      <Header
        background={headerBackground}
        color={headerTextColor}
        isDarkLogo={isDarkLogo}
      />
      <div className="bubble-container" >
        <motion.div className="drag-area" ref={constraintsRef}></motion.div>
        <motion.div drag dragConstraints={constraintsRef}></motion.div>
      </div>
      {children}
      <Footer />
    </React.Fragment>
  );
}
