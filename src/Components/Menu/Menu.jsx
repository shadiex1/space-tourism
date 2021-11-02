import React from "react";
import styles from "./Menu.module.scss";
import { Logo } from "../Svg";
import {Link} from "react-router-dom";
const Menu = (props)=>{
    const {activeLink} = props
    return(
        <div className={styles.Menu}>
            <div className={styles.logo}>
                <Logo/>
            </div>
            <div className={styles.line}></div>
            <div className={styles.nav} style={{backgroundImage: `url(${props.img})`}}>
                <ul>
                <Link  to="/">
                    <li style={activeLink=== "Home"? {borderBottom:"3px solid white"}:null}>00 Home</li>
                    </Link>
                    <Link  to="/Destination">
                    <li style={activeLink=== "Dest"? {borderBottom:"3px solid white"}:null} >01 destination</li>
                    </Link>
                    <Link to="/Crew">

                    <li style={activeLink=== "Crew"? {borderBottom:"3px solid white"}:null}>02 Crew</li>
                    </Link>
                    <Link to="/Technology">

                    <li style={activeLink=== "Tech"? {borderBottom:"3px solid white"}:null}>03 Technology</li>
                    </Link>
                </ul>
            </div>
        </div>
    )
}

export default Menu