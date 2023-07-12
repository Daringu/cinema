import { ReactComponent as PlayerArrow } from "../../../assets/functionalIcons/arrow.svg";
import styles from "./PlayerArrowButton.module.css";
export default function PlayerArrowButton({ buttonStyles }) {
  return (
    <button style={{ ...buttonStyles }} className={styles.button}>
      <PlayerArrow />
    </button>
  );
}
