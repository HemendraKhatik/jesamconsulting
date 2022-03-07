import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { BrowserTypes } from "react-device-detect";

// import { motion, useDragControls } from "framer-motion";
// import { useWindowScroll, useWindowSize } from "react-use";

export default function Base({
  children,
  headerBackground,
  headerTextColor,
  isDarkLogo,
  yOffset,
  showBubble,
}) {
  // const { width } = useWindowSize();
  // const constraintsRef = useRef(null);
  // const bubble = useRef(null);

  // const [margin, setMargin] = useState(0);
  // const [directionY, setDirectionY] = useState(0);

  // const [dimensions, setDimensions] = useState({
  //   width: 180,
  //   height: 180,
  // });

  // const scrollRef = useRef(null);
  // const isScrolled = useWindowScroll(scrollRef);

  // FIXME: need reduce bubble size for mobile
  // useEffect(() => {
  //   if (showBubble) {
  //     if (isScrolled.y > yOffset) {
  //       // Do nothing
  //     } else {
  //       setMargin(isScrolled.y);
  //     }
  //     if (isScrolled.y >= directionY) {
  //       setDimensions((prev) => {
  //         if (prev.width >= 500) {
  //           return {
  //             width: 500,
  //             height: 500,
  //           };
  //         } else {
  //           return {
  //             width: prev.width + 0.4,
  //             height: prev.height + 0.4,
  //           };
  //         }
  //       });
  //     } else {
  //       setDimensions((prev) => {
  //         if (prev.width <= 180) {
  //           return {
  //             width: 180,
  //             height: 180,
  //           };
  //         } else {
  //           return {
  //             width: prev.width - 2.5,
  //             height: prev.height - 2.5,
  //           };
  //         }
  //       });
  //     }
  //     setDirectionY(isScrolled.y);
  //   }

  //   try {
  //     bubble.current.style.left = `0%`;
  //   } catch {
  //     // do nothing
  //   }
  // }, [isScrolled, directionY, yOffset, showBubble]);

  // const dragControls = useDragControls();

  // useEffect(() => {
  //   if (width <= 500) {
  //     setDimensions({
  //       width: 150,
  //       height: 150,
  //     });
  //   }
  // }, [width]);

  // It keeps the scroll to the top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <React.Fragment>
      <Header
        background={headerBackground}
        color={headerTextColor}
        isDarkLogo={isDarkLogo}
      />
      {/* {showBubble && (
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
      </motion.div> */}

      <div
        style={{ paddingTop: BrowserTypes.Safari ? "10vh" : "12vh" }}
        className="parent-container"
      >
        {children}
      </div>
      <Footer />
    </React.Fragment>
  );
}
