import styles from './WelcomePage.module.css'
import backGround from '../../assets/welcomeBackground.png'
import {Navigate, Outlet} from "react-router-dom";
import {useContext, useEffect} from "react";
import {AuthContext} from "../../contextProviders/AuthContextProvider.jsx";


export default function WelcomePage() {
  const [isAuthed]=useContext(AuthContext)
  if (isAuthed){
    return <Navigate to={'/'}></Navigate>
  }
  return (
      <div style={{background:`url(${backGround}) #622e99 50%`, backgroundRepeat: 'no-repeat',backgroundSize: 'cover'}} className={styles.welcomeBody}>
    <div className={styles.welcomeContainer}>
      <Outlet/>
    </div>
  </div>)
}
