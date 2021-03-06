import React, { Component } from "react";
import styles from "./Crew.module.scss";
import img1 from "../../assets/crew/1.png"
import img2 from "../../assets/crew/2.png"
import img3 from "../../assets/crew/3.png"
import img4 from "../../assets/crew/4.png"
import Menu from "../../Components/Menu/Menu";
import menuImg from "../../assets/Rectangle3.png";
import CrewTemplate from "../../Components/CrewTemplate/CrewTemplate";

class Crew extends Component{
    state={
        items:[
            {
                id:1,
                subHeader:"Commander",
                header:"Douglas Hurley",
                desc:"Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
                img:img1
            },
            {
                id:2,
                subHeader:"Mission Specialist ",
                header:"MARK Henry",
                desc:"Mark Richard Henry is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
                img:img2

            },
            {
                id:3,
                subHeader:"PILOT",
                header:"Victor Glover",
                desc:"Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ",
                img:img3
            },
            {
                id:4,
                subHeader:"Flight Engineer",
                header:"Anousheh Ansari",
                desc:"Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ",
                img:img4
            },
        ],
        item:   {
            id:1,
            subHeader:"Commander",
            header:"Douglas Hurley",
            desc:"Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
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
            <div className={styles.Crew}>
                <Menu activeLink={"Crew"} img={menuImg}/>   
                             <div className={styles.header}><h2><span>02</span> MEET YOUR CREW</h2></div>

                <CrewTemplate setId={this.setId} items={this.state.items} item={this.state.item}/>
            </div>
        )
    }
}

export default Crew


