import React, { Component } from "react";
import { Icon } from "@blueprintjs/core";
import "./Navbar.css";

class NavTop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false,
    };
  }
  setTaskForm = () => {
    this.props.onCloseTaskForm();
  };

  render() {
    return <div className="sidenav-top_item ">{this.props.children}</div>;
  }
}

export default NavTop;
