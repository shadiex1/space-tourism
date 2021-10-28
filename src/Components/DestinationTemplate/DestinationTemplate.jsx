import React from "react";
import styles from "./DestinationTemplate.module.scss";


const DestinationTemplate=(props)=>{
   const {img,header,desc,avgDest,estTime}=props.item
    return(
        <div className={styles.DestinationTemplate}>
            <img src={img}/>
            <div className={styles.description}>
                <ul>
                    {props.items.map(item=><li onClick={()=>props.setId(item.id)}>{item.header}</li>)}
                </ul>
                <h2>{header}</h2>
                <p>{desc}</p>
                <div className={styles.stats}>
                    <div className={styles.distance}>
                        <p>AVG. DISTANCE</p>
                        <span>{avgDest}</span>
                    </div>
                    <div className={styles.time}>
                        <p>EST. TRAVEL TIME</p>
                        <span>{estTime}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DestinationTemplate