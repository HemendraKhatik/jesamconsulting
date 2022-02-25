import React from "react";
import Style from "./index.module.css";

export default function TextCard({ title, description, style }) {
  return (
    <div style={style} className={Style.textCardContainer}>
      <h1 className={Style.textCardHeading}>{title}</h1>
      <p className={Style.textCardParagraph}>{description}</p>
    </div>
  );
}
