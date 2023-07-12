
import styles from './TopContent.module.css'
import Back from "../../assets/Rectangle.png";
import NavBar from "../NavBar/NavBar.jsx";

let back=Back

const TopContent = ({backGround}) => {
    const background=backGround?`https://image.tmdb.org/t/p/original${backGround}`:back
    return (
        <div className={styles.container} style={{position:'relative'}}>
            <img style={{position:'absolute',width: '100%',height:'100%',zIndex:-1}} src={background} alt=""/>
            <NavBar></NavBar>
        </div>
    );
};

export default TopContent;