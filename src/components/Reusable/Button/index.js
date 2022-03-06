import React from "react";
import Style from "./index.module.css";

export default function Button({ title, style, action }) {
  return (
    <div onClick={action} style={style} className={Style.cta}>
      {title}
    </div>
  );
}
