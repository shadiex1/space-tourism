import React from "react";
import styles from "./TechTemplate.module.scss";


const TechTemplate=(props)=>{
   const {img,header,desc,subHeader}=props.item
    return(
        <div className={styles.TechTemplate}>
            <ul>
                    {props.items.map(item=><li onClick={()=>props.setId(item.id)}>{item.header}</li>)}
                </ul>
            <div className={styles.description}>
               
                <h3>{subHeader}</h3>
                <h2>{header}</h2>
                <p>{desc}</p>
                
            </div>
            <img src={img}/>
             
        </div>
    )
}

export default TechTemplate