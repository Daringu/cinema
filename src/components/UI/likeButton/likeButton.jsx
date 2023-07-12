import { useState } from "react";
import styles from "./LikeButton.module.css";
import { ReactComponent as Heart } from "../../../assets/icons/heart.svg";

export default function LikeButton({
  btnStyles,
  dispatchOnClick,
  isActive,
  iconStyles
}) {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        dispatchOnClick();
      }}
      style={{ ...btnStyles }}
      className={styles.button}
    >
      <Heart
        style={{ ...iconStyles }}
        className={`${styles.icon} ${isActive && styles.iconActive}`}
      />
    </button>
  );
}
//
