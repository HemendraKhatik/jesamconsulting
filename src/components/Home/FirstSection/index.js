import React, { useEffect, useRef, useState } from "react";
import Style from "./index.module.css";
import Balloon from "../../../assets/home/balloon.svg";
import useOnScreen from "../../../hooks/useOnScreen";

export default function FirstSection() {
  var ref = useRef();
  const isVisible = useOnScreen(ref);
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    if (isVisible) {
      setAnimate(true);
    }
  }, [isVisible]);

  return (
    <div className={Style.firstSectionContainer}>
      <div className={Style.left}>
        <h1 className={Style.mainHeading}>
          mehr Performance bedeutet nicht weniger design
        </h1>
        <p className={Style.mainParagraph}>
          Für uns steht die Performance an erster Stelle, jede von JESAM
          Consulting entwickelte Software erfüllt höchste
          Qualitätsstandards.<br/>
          JESAM ist immer up-to-date und bietet höchste
          Sicherheits und Entwicklungsstandards.
        </p>
      </div>

      <div className={Style.right}>
        <img
          className={animate ? Style.bubble : null}
          ref={ref}
          src={Balloon}
          alt="Balloon icon"
        />
      </div>
    </div>
  );
}
