import React, { useEffect, useState } from "react";
import Style from "./index.module.css";
import WhyWe from "../../Reusable/WhyWe";
import { useWindowSize } from "react-use";
import TabletCarousel from "./TabletCarousel";
import DesktopCarousel from "./DesktopCarousel";
import MobileCarousel from "./MobileCarousel";

export default function FirstSection() {
  const [size, setSize] = useState(0);
  const { width } = useWindowSize();

  useEffect(() => {
    setSize(width);
  }, [width]);

  return (
    <div id="software-carousel" className={Style.container}>
      {size <= 900 ? (
        size <= 500 ? (
          <MobileCarousel />
        ) : (
          <TabletCarousel />
        )
      ) : (
        <DesktopCarousel />
      )}

      {/*  */}
      <div className={Style.innerContainer}>
        <WhyWe />
      </div>
    </div>
  );
}
