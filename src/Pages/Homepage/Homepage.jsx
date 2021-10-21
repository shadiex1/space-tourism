import React from "react";
import styles from "./Homepage.module.scss"
import Menu from "../../Components/Menu/Menu"

const Homepage = ()=>{
    return(
        <div className={styles.Homepage}>
            <Menu/>
            <div className={styles.showcase}>
                <div className={styles.description}>
                    <h2>so,you want to travel to</h2>
                    <h1>space</h1>
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