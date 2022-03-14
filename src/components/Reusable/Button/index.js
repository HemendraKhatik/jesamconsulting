import React from "react";
import Style from "./index.module.css";

export default function Button({ title, style, action, loading }) {
  return (
    <div onClick={action} style={style} className={Style.cta}>
      {loading ? (
        <div className={Style.loadingContainer}>
          <div className={Style.loading}></div>
        </div>
      ) : (
        title
      )}
    </div>
  );
}
