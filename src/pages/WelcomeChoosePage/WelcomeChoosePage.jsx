import styles from './WelcomeChoosePage.module.css'
import MyButton from "../../components/UI/myButton/myButton.jsx";
import {NavLink, useNavigate} from "react-router-dom";
import {useContext} from "react";
import {AuthContext} from "../../contextProviders/AuthContextProvider.jsx";
import {ReactComponent as Logo} from "../../assets/logo.svg";
import WelcomePage from "../../layouts/WelcomePage/WelcomePage.jsx";

const WelcomeChoosePage = () => {
    const  navigate=useNavigate()
    const handleClick=()=>{
        navigate('ver/log')
    }
    return (
        <>
            <div className={styles.logoTextContainer}>
            <Logo/>
            <p className={styles.text}>Enjoy the newest movies</p>
        </div>
            <div className={styles.welcomeButtons}>
                <MyButton onClick={handleClick}>Log in</MyButton>
                <p className={styles.text}>No account? <NavLink to={'ver/reg'}>Sign up</NavLink></p>
            </div>
        </>
    );
};

export default WelcomeChoosePage;