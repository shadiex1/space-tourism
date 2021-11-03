import React from "react";
import styles from "./MenuSidebar.module.scss";
// import { CloseIcon } from "../SvgIcons/SvgIcons";
import { CloseIcon } from "../Svg";
import { Link } from "react-router-dom";
import { Component } from "react";

class MenuSidebar extends Component {
  state = {
    showMenuSidebar: false,
  };

  componentDidUpdate() {
    const { open } = this.props;
    if (open) {
      document.body.style.overflow = "hidden";
    } else document.body.style.overflow = "unset";
  }
  componentWillUnmount() {
document.body.style.overflow = "auto";
  }
  showMenuSidebarToggleHandler = () => {
    this.setState((prevState) => {
      return { showMenuSidebar: !prevState.showMenuSidebar };
    });
  };
  showMenuSidebarClosedHandler = () => {
    this.setState({ showMenuSidebar: false });
  };
  
  render() {
    const { closed, open } = this.props;

    let attachdstyles = [styles.sidebar, styles.Close];
    if (open) {
      attachdstyles = [styles.sidebar, styles.Open];
    }

    return (
      <React.Fragment>
        <div className={attachdstyles.join(" ")}>
          <div className={styles.title}>
            <div className={styles.close} onClick={closed}>
              <CloseIcon />
            </div>
          </div>
          <div className={styles.navigation}>
            <ul>
              <Link to="/" onClick={closed} className={styles.link}>
                <li><span>00</span> HOME</li>
              </Link>
              <Link to="/Destination" onClick={closed} className={styles.link}>
                <li><span>01</span> DESTINATION</li>
              </Link>

              <Link to="/Crew" className={styles.link} onClick={closed}>
                <li><span>02</span> CREW</li>
              </Link>
              <Link to="/Technology" className={styles.link} onClick={closed}>
                <li><span>03</span> TECHNOLOGY</li>
              </Link>
            </ul>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default MenuSidebar;
