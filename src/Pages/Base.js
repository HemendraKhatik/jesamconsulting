import React, { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion, useDragControls } from "framer-motion";
import { useWindowScroll } from "react-use";
// import test from "./explosion";

export default function Base({
  children,
  headerBackground,
  headerTextColor,
  isDarkLogo,
}) {
  const constraintsRef = useRef(null);

  const [margin, setMargin] = useState(0);
  const [directionY, setDirectionY] = useState(0);

  const [dimensions, setDimensions] = useState({
    width: 250,
    height: 250,
  });
  const scrollRef = useRef(null);
  const isScrolled = useWindowScroll(scrollRef);
  useEffect(() => {
    if (isScrolled.y > 4000) {
      // Do nothing
    } else {
      setMargin(isScrolled.y);
    }
    if (isScrolled.y >= directionY) {
      setDimensions((prev) => {
        if (prev.width >= 500) {
          return {
            width: 500,
            height: 500,
          };
        } else {
          return {
            width: prev.width + 1,
            height: prev.height + 1,
          };
        }
      });
    } else {
      setDimensions((prev) => {
        if (prev.width <= 250) {
          return {
            width: 250,
            height: 250,
          };
        } else {
          return {
            width: prev.width - 1,
            height: prev.height - 1,
          };
        }
      });
    }
    setDirectionY(isScrolled.y);
  }, [isScrolled, directionY]);

  const dragControls = useDragControls();



  return (
    <React.Fragment>
      <Header
        background={headerBackground}
        color={headerTextColor}
        isDarkLogo={isDarkLogo}
      />
      <div className="bubble-container">
        <motion.div className="drag-area" ref={constraintsRef}></motion.div>
        <motion.div
          style={{
            marginTop: margin,
            width: dimensions.width,
            height: dimensions.height,
          }}
          drag={true}
          dragConstraints={constraintsRef}
          dragControls={dragControls}
        ></motion.div>
      </div>
      <motion.div
        style={{ width: "100%", height: "fit-content" }}
        drag={true}
        ref={constraintsRef}
      >
        {children}
      </motion.div>

      <Footer />
    </React.Fragment>
  );
}
