import React, { Component } from "react";
import styles from "./Destination.module.scss";
import Menu from "../../Components/Menu/Menu";
import DestinationTemplate from "../../Components/DestinationTemplate/DestinationTemplate";
import img1 from "../../assets/dest/planets/Bitmap.png"
import img2 from "../../assets/dest/planets/Bitmap-1.png"
import img3 from "../../assets/dest/planets/Bitmap-2.png"
import img4 from "../../assets/dest/planets/Bitmap-3.png"
import menuImg from "../../assets/Rectangle2.png"

class Destination extends Component{
    state={
        items:[
            {
                id:1,
                header:"MOON",
                desc:"See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
                avgDest:"384,400 km",
                estTime:"3 days",
                img:img1
            },
            {
                id:2,
                header:"MARS",
                desc:"Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
                avgDest:"225 MIL. km",
                estTime:"9 months",
                img:img2
            },
            {
                id:3,
                header:"EUROPA",
                desc:"The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
                avgDest:"628 MIL. km",
                estTime:"3 years",
                img:img3
            },
            {
                id:4,
                header:"TITAN",
                desc:"The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
                avgDest:"1.6 BIL. km",
                estTime:"7 years",
                img:img4
            }
        ]
        ,
        item: {
            id:1,
            header:"MOON",
            desc:"See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
            avgDest:"384,400 km",
            estTime:"3 days",
            img:img1
        }
    }
    setId=(id)=>{
       let selectedItem=this.state.items.find(item=>item.id==id)
       this.setState({
           item:selectedItem
       })
    }
    render(){

        return(
            <div className={styles.Destination}>
                   <Menu img={menuImg}/>
                   <h2><span>01</span> Pick your destination</h2>
                   <DestinationTemplate item={this.state.item} setId={this.setId} items={this.state.items}/>
            </div>
        )
    }
}

export default Destination