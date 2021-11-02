import React from "react";
import styles from "./CrewTemplate.module.scss";


const CrewTemplate=(props)=>{
   const {img,header,desc,subHeader,id}=props.item
    return(
        <div className={styles.CrewTemplate}>
            
            <div className={styles.description}>
               
                <h3>{subHeader}</h3>
                <h2>{header}</h2>
                <p>{desc}</p>
                 <ul>
                    {props.items.map(item=><li style={id === item.id ? {backgroundColor:"white"}:null} onClick={()=>props.setId(item.id)}></li>)}
                </ul>
            </div>
            <div className={styles.coverImg}>
            <img src={img}/>
            </div>
        </div>
    )
}

export default CrewTemplate