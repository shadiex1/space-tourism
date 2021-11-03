import React,{Component} from "react";
import styles from "./Menu.module.scss";
import { Logo } from "../Svg";
import {Link} from "react-router-dom";
import MenuSidebar from "../MenuSidebar/MenuSidebar";
class Menu extends Component{
    state = {
      showMenuSidebar: false,
      };
      showMenuSidebarToggleHandler = () => {
        this.setState((prevState) => {
          return { showMenuSidebar: !prevState.showMenuSidebar };
        });
      };
      showMenuSidebarClosedHandler = () => {
        this.setState({ showMenuSidebar: false });
      };
    render(){
        const {activeLink} = this.props
 return( <> <MenuSidebar
          open={this.state.showMenuSidebar}
          closed={this.showMenuSidebarClosedHandler}
        />
        <div className={styles.Menu}>
            <div className={styles.logo}>
                <Logo/>
            </div>

           
         <div
            onClick={this.showMenuSidebarToggleHandler}
            className={styles.toggler}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
            <div className={styles.line}></div>
            <div className={styles.nav} style={{backgroundImage: `url(${this.props.img})`}}>
                <ul>
                <Link  to={`${process.env.PUBLIC_URL}/`}>
                    <li style={activeLink=== "Home"? {borderBottom:"3px solid white"}:null}>00 Home</li>
                    </Link>
                    <Link  to={`${process.env.PUBLIC_URL}/Destination`}>
                    <li style={activeLink=== "Dest"? {borderBottom:"3px solid white"}:null} >01 destination</li>
                    </Link>
                    <Link to={`${process.env.PUBLIC_URL}/Crew`}>

                    <li style={activeLink=== "Crew"? {borderBottom:"3px solid white"}:null}>02 Crew</li>
                    </Link>
                    <Link to={`${process.env.PUBLIC_URL}/Technology`}>

                    <li style={activeLink=== "Tech"? {borderBottom:"3px solid white"}:null}>03 Technology</li>
                    </Link>
                </ul>
            </div>
        </div>
        </>
    )
    }
   
}

export default Menu