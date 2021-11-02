import React from "react";
import styles from "./TechTemplate.module.scss";


const TechTemplate=(props)=>{
   const {img,header,desc,subHeader,id}=props.item
    return(
        <div className={styles.TechTemplate}>
            <ul>
                    {props.items.map(item=><li style={id===item.id ? {backgroundColor:"white",color:"black"}:null} onClick={()=>props.setId(item.id)}>{item.id}</li>)}
                </ul>
            <div className={styles.description}>
               
                <h3>{subHeader}</h3>
                <h2>{header}</h2>
                <p>{desc}</p>
                
            </div>
            <div className={styles.imgContainer}>
            <img src={img}/>

            </div>
             
        </div>
    )
}

export default TechTemplate