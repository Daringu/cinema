import React from 'react';
import styles from './UserButton.module.css'
import {useHover} from "../../hooks/hooks.jsx";

const UserButton = ({accountName,accountIcon}) => {
    return (
        <div  className={styles.userContainer}>
            <img  style={{width:'32px',height:'32px',borderRadius:'50%'}} src={accountIcon} alt=""/>
            <p >dasdasad{accountName}</p>
        </div>
    );
};

export default UserButton;