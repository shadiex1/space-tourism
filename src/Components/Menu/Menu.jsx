import React from "react"
import styles from "./Menu.module.scss"
import { Logo } from "../Svg"
const Menu = (props)=>{
    return(
        <div className={styles.Menu}>
            <div className={styles.logo}>
                <Logo/>
            </div>
            <div className={styles.line}></div>
            <div className={styles.nav} style={{backgroundImage: `url(${props.img})`}}>
                <ul>
                    <li>00 Home</li>
                    <li>01 destination</li>
                    <li>02 Crew</li>
                    <li>03 Technology</li>
                </ul>
            </div>
        </div>
    )
}

export default Menu