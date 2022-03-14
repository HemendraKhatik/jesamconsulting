import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import Style from "./index.module.css";
import D1 from "../../../assets/home/desktop/1.png";
import D2 from "../../../assets/home/desktop/2.png";
import D3 from "../../../assets/home/desktop/3.png";
import D4 from "../../../assets/home/desktop/4.png";
import D5 from "../../../assets/home/desktop/5.png";

import T1 from "../../../assets/home/tablet/1.png";
import T2 from "../../../assets/home/tablet/2.png";
import T3 from "../../../assets/home/tablet/3.png";

import M1 from "../../../assets/home/mobile/1.png";
import M2 from "../../../assets/home/mobile/2.png";
import M3 from "../../../assets/home/mobile/3.png";
import { useWindowSize } from "react-use";

export default function DesktopCarousel() {
  const { width } = useWindowSize();
  const [imageOne, setImageOne] = useState(D1);
  const [imageTwo, setImageTwo] = useState(D2);
  const [imageThree, setImageThree] = useState(D3);

  useEffect(() => {
    if (width > 450 && width < 900) {
      setImageOne(T1);
      setImageTwo(T2);
      setImageThree(T3);
    }

    if (width <= 450) {
      setImageOne(M1);
      setImageTwo(M2);
      setImageThree(M3);
    }
  }, [width]);

  return (
    <div id="home-carousel">
      <Carousel
        showThumbs={false}
        showStatus={false}
        showArrows={false}
        autoPlay={false}
        verticalSwipe="standard"
      >
        <div className={Style.companies}>
          <img src={imageOne} alt="icon " />
          <img src={imageTwo} alt="icon " />
          <img src={imageThree} alt="icon " />
        </div>
        <div className={Style.companies}>
          <img src={D4} alt="icon " />
          <img src={D5} alt="icon " />
        </div>
        <div className={Style.companies}>
          <img src={imageOne} alt="icon " />
          <img src={imageTwo} alt="icon " />
          <img src={imageThree} alt="icon " />
        </div>
      </Carousel>
    </div>
  );
}
