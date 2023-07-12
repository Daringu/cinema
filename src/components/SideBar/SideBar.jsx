import {ReactComponent as Logo} from "../../assets/logo.svg";
import styles from './SideBar.module.css'
import {sideBarNavigationLinks,sideBarSocialLinks,sideBarFunctionalLinks} from '../../utils/links.js'
import LinksList from "../UI/LinksLists/LinksList.jsx";
import {useNavigate} from "react-router-dom";

const SideBar = () => {
    const  navigate=useNavigate()
    return (
        <div className={styles.SideBarContainer}>
            <div className={styles.logoLinks}>
                <Logo className={styles.logo} onClick={()=>navigate('/home')}/>
                <LinksList navListClass={styles.list} links={sideBarNavigationLinks}></LinksList>
            </div>
            <div className={styles.otherLinks}>
                <LinksList navListClass={styles.list} links={sideBarSocialLinks}></LinksList>
                <LinksList navListClass={styles.list} links={sideBarFunctionalLinks}></LinksList>
            </div>
        </div>
    );
};

export default SideBar;