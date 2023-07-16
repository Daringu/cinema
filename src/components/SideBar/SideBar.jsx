import { ReactComponent as Logo } from "../../assets/logo.svg";
import styles from "./SideBar.module.css";
import burgerStyles from "./burgerButton.module.css";

import {
  sideBarNavigationLinks,
  sideBarSocialLinks,
  sideBarFunctionalLinks
} from "../../utils/links.js";
import LinksList from "../UI/LinksLists/LinksList.jsx";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import NavBarButton from "../UI/NavBarButton/NavBarButton";
import { TypeContext } from "../../contextProviders/TypeProvider";

const SideBar = () => {
  const navigate = useNavigate();
  const [isOpened, setOpened] = useState(false);
  const [type, setType] = useContext(TypeContext);

  const onTypeClick = (type) => {
    setType(type);
  };
  const onClickBurg = (e) => {
    e.stopPropagation();
    setOpened(!isOpened);
  };
  const onBgClick = () => setOpened(false);

  return (
    <div onClick={onBgClick} className={styles.siddeBarLinks}>
      <Logo className={styles.logo} onClick={() => navigate("/home")} />
      <div className={styles.fullLinks}>
        <div className={`${styles.logoLinks} ${styles.wide}`}>
          <LinksList
            navListClass={styles.list}
            links={sideBarNavigationLinks}
          ></LinksList>
        </div>
        <div className={`${styles.otherLinks} ${styles.wide}`}>
          <LinksList
            navListClass={styles.list}
            links={sideBarSocialLinks}
          ></LinksList>
          <LinksList
            navListClass={styles.list}
            links={sideBarFunctionalLinks}
          ></LinksList>
        </div>
      </div>

      <div
        onClick={onClickBurg}
        className={`${burgerStyles.button} ${
          isOpened ? burgerStyles.opened : ""
        }`}
      >
        <svg width="10vh" height="10vh" viewBox="0 0 100 100">
          <path
            className={`${burgerStyles.line} ${burgerStyles.line1}`}
            d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
          />
          <path
            className={`${burgerStyles.line} ${burgerStyles.line2}`}
            d="M 20,50 H 80"
          />
          <path
            className={`${burgerStyles.line} ${burgerStyles.line3}`}
            d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
          />
        </svg>
        <div
          onClick={(e) => setOpened(false)}
          className={`${isOpened ? styles.active : styles.inActive}`}
        >
          <div className={`${styles.logoLinks} ${styles.wide}`}>
            <LinksList
              navListClass={styles.list}
              links={sideBarNavigationLinks}
            />
          </div>
          <div className={`${styles.otherLinks} ${styles.wide}`}>
            <LinksList navListClass={styles.list} links={sideBarSocialLinks} />
            <LinksList
              navListClass={styles.list}
              links={sideBarFunctionalLinks}
            />
          </div>
          <div
            onClick={(e) => e.stopPropagation()}
            className={styles.brnsContainer}
          >
            <NavBarButton
              typeToCheck={type}
              type={"movie"}
              onClick={onTypeClick}
            >
              Movie
            </NavBarButton>
            <span>|</span>
            <NavBarButton typeToCheck={type} type={"tv"} onClick={onTypeClick}>
              TV
            </NavBarButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
