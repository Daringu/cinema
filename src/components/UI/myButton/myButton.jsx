import styles from "./Button.module.css";

export default function MyButton({ children, onClick,type }) {
  return (
    <button type={type}
      className={styles.button}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
