import React from "react";
import Style from "./index.module.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./carousel.css";
import { carouselData } from "./data";

export default function HeroSection() {
  return (
    <Carousel
      showThumbs={false}
      showStatus={false}
      showArrows={false}
      autoPlay={false}
      verticalSwipe="standard"
    >
      {carouselData.map((slide, index) => {
        return (
          <div key={index} className={Style.container}>
            <div className={Style.left}>
              <h1 className={Style.mainHeading}>{slide.title}</h1>
              <p className={Style.mainParagraph}>{slide.description}</p>
            </div>
            <div className={Style.right}>
              <img src={slide.img} alt="jesamconsulting" />
            </div>
          </div>
        );
      })}
    </Carousel>
  );
}
