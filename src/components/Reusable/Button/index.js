import React from "react";
import Style from "./index.module.css";

export default function Button({ title, style }) {
  return <div style={style} className={Style.cta}>{title}</div>;
}
