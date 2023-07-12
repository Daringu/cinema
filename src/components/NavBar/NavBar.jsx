import styles from './NavBar.module.css'
import UserButton from "../UserButton/UserButton.jsx";
import NavBarButton from "../UI/NavBarButton/NavBarButton.jsx";
import {useContext, useState} from "react";
import {TypeContext} from "../../contextProviders/TypeProvider.jsx";

const NavBar = () => {
    const [currentType,setCurrentType]=useContext(TypeContext)
    const handleClick=(type)=>setCurrentType(type)
    return (
        <>
            <div  className={styles.navBarContainer}>
                <div className={styles.navBarButtonContainer}>
                    <NavBarButton onClick={handleClick} typeToCheck={currentType} type={'movie'}>Movies</NavBarButton>
                    <NavBarButton onClick={handleClick} typeToCheck={currentType} type={'tv'}>TV</NavBarButton>
                </div>
                <UserButton/>
            </div>
        </>
    );
};

export default NavBar;