import styles from './NavBarButton.module.css'
import {useRef} from "react";

const NavBarButton = ({onClick,type,typeToCheck,children}) => {
    const typeCurrent=useRef()
    typeCurrent.current=type
    return <p onClick={()=>onClick(type)} className={`${styles.navBarBtn} ${typeToCheck === type ?styles.navBarBtnActive:''}`}>{children}</p>
};

export default NavBarButton;