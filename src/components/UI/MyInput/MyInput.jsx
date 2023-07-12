import styles from './MyInput.module.css'
import {forwardRef} from "react";
import React from 'react';

const MyInput =forwardRef( ({placeholder,onChange,value},ref) => {
    return (
            <input value={value} ref={ref} onChange={onChange} className={styles.input} placeholder={placeholder}/>
    );
})

export default MyInput;