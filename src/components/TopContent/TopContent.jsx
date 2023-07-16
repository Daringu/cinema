import styles from "./TopContent.module.css";
import Back from "../../assets/Rectangle.png";
import NavBar from "../NavBar/NavBar.jsx";

let back = Back;

const TopContent = ({ backGround }) => {
  const background = backGround
    ? `https://image.tmdb.org/t/p/original${backGround}`
    : back;
  return (
    <div
      className={styles.container}
      style={{
        position: "relative",
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%"
      }}
    >
      <NavBar></NavBar>
    </div>
  );
};

export default TopContent;
