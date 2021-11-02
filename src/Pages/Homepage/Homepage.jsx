import React from "react";
import styles from "./Homepage.module.scss"
import Menu from "../../Components/Menu/Menu"
import menuImg from "../../assets/Rectangle.png"
const Homepage = ()=>{
    return(
        <div className={styles.Homepage}>
            <Menu activeLink={"Home"} img={menuImg}/>
            <div className={styles.showcase}>
                <div className={styles.description}>
                    <h3>so,you want to travel to</h3>
                    <h2>space</h2>
                    <p>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it.
                         Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
                </div>
                <div className={styles.explore}>
                    <div>
                    explore
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Homepage