import React from "react";
import styles from "./DestinationTemplate.module.scss";


const DestinationTemplate=(props)=>{
   const {img,header,desc,avgDest,estTime,id}=props.item
    return(
        <div className={styles.DestinationTemplate}>
            <div className={styles.imgContainer}>
            <img src={img}/>

            </div>
            <div className={styles.description}>
                <ul>
                    {props.items.map(item=><li style={id === item.id ? {color:"white",borderBottom:"2px solid #fff",paddingBottom:"5px"}:null} onClick={()=>props.setId(item.id)}>{item.header}</li>)}
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