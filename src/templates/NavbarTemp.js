import React, { Component } from "react";
import Navbar from "../components/navbar/Navbar";
import NavMenu from "../components/navbar/NavMenu";
import NavUser from "../components/navbar/NavUser";
import "../components/navbar/Navbar.css";
import { DataNavbar } from "../Data/DataNavbar";
import "../components/navbar/Navbar.css";
import "../components/navbar/NavS.css";
import { Icon } from "@blueprintjs/core";
import NavbarSmall from "../components/navbar/NavbarSmall";
// import "../../components/Search/CollapsibleTest.css";

export default class NavbarTemp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      isDisplayForm: true,
    };
  }
  onHandleTaskForm = () => {
    this.setState({
      isDisplayForm: !this.state.isDisplayForm,
    });
  };

  onOpenTaskForm = () => {
    this.setState({
      isDisplayForm: true,
    });
  };

  onCloseTaskForm = () => {
    this.setState({
      isDisplayForm: false,
    });
  };
  render() {
    let { isDisplayForm } = this.state;
    let elmTaskForm = isDisplayForm ? (
      <div id="mySidenav" className="sidenav">
        <div className="sidenav-top">
          <div className="sidenav-top_item ">
            <div className="cursor">
              <Icon icon="more" className="sidenav-icon" iconSize={30} />
            </div>
            <div>{/* <img className="logo-payment" src={logo} /> */}</div>
            <div className="cursor">
              <Icon
                icon="menu"
                className="sidenav-icon"
                // onClick={() => this.setTaskForm()}
                onClick={() => this.onCloseTaskForm()}
                iconSize={30}
              />
            </div>
          </div>
          {this.props.children}
        </div>
      </div>
    ) : (
      <NavbarSmall
        onOpenTaskForm={() => this.onOpenTaskForm()}
        navSmall={DataNavbar}
      />
    );
    return (
      <div className="sidenav-container">
        <div id="main">{elmTaskForm}</div>
      </div>
    );
  }
}
