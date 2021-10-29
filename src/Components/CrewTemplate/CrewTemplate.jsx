import React from "react";
import styles from "./CrewTemplate.module.scss";


const CrewTemplate=(props)=>{
   const {img,header,desc,subHeader}=props.item
    return(
        <div className={styles.CrewTemplate}>
            
            <div className={styles.description}>
               
                <h3>{subHeader}</h3>
                <h2>{header}</h2>
                <p>{desc}</p>
                 <ul>
                    {props.items.map(item=><li onClick={()=>props.setId(item.id)}>{item.header}</li>)}
                </ul>
            </div>
            <img src={img}/>
        </div>
    )
}

export default CrewTemplate