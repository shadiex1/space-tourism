import React ,{Component} from "react";
import styles from "./Technology.module.scss";
import img1 from "../../assets/tech/1.jpg"
import img2 from "../../assets/tech/2.jpg"
import img3 from "../../assets/tech/3.jpg"
import Menu from "../../Components/Menu/Menu"
import MenuImg from "../../assets/Rectangle4.png"
class Technology extends Component {
    state={
        items:[
            {
                id:1,
                subHeader:"THE TERMINOLOGY…",
                header:"LAUNCH VEHICLE",
                text:"A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
                img:img1
            },
            {
                id:2,
                subHeader:"THE TERMINOLOGY…",
                header:"SPACEPORT",
                text:"A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
                img:img2
            },
            {
                id:3,
                subHeader:"THE TERMINOLOGY…",
                header:"SPACE CAPSULE",
                text:"A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
                img:img3
            },
        ]
    }
    render(){
        return(
               <div className={styles.Technology}>
            <Menu img={MenuImg}/>
        </div>
        )
     
    }
}

export default Technology