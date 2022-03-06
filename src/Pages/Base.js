import React, { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion, useDragControls } from "framer-motion";
import { useWindowScroll, useWindowSize } from "react-use";

export default function Base({
  children,
  headerBackground,
  headerTextColor,
  isDarkLogo,
  yOffset,
  showBubble,
}) {
  const { width } = useWindowSize();
  const constraintsRef = useRef(null);
  const bubble = useRef(null);

  const [margin, setMargin] = useState(0);
  const [directionY, setDirectionY] = useState(0);

  const [dimensions, setDimensions] = useState({
    width: 250,
    height: 250,
  });

  const scrollRef = useRef(null);
  const isScrolled = useWindowScroll(scrollRef);

  // FIXME: need reduce bubble size for mobile
  useEffect(() => {
    if (showBubble) {
      if (isScrolled.y > yOffset) {
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
              width: prev.width - 2.5,
              height: prev.height - 2.5,
            };
          }
        });
      }
      setDirectionY(isScrolled.y);
    }

    try {
      bubble.current.style.left = `0%`;
    } catch {
      // do nothing
    }
  }, [isScrolled, directionY, yOffset, showBubble]);

  const dragControls = useDragControls();

  useEffect(() => {
    if (width <= 500) {
      setDimensions({
        width: 150,
        height: 150,
      });
    }
  }, [width]);
  return (
    <React.Fragment>
      <Header
        background={headerBackground}
        color={headerTextColor}
        isDarkLogo={isDarkLogo}
      />
      {showBubble && (
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
            ref={bubble}
          ></motion.div>
        </div>
      )}
      <motion.div
        style={{
          width: "100%",
          height: "fit-content",
          paddingTop: "10vh",
          overflow: "hidden !important",
        }}
        drag={false}
        ref={constraintsRef}
        dragControls={dragControls}
      >
        {children}
      </motion.div>

      <Footer />
    </React.Fragment>
  );
}
