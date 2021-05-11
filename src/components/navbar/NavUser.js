import React, { Component } from "react";
import "./Navbar.css";
import { Icon } from "@blueprintjs/core";

class NavUser extends Component {
  render() {
    return (
      <div>
        <span className="sidenav-user cursor">
          <Icon className="icon-color__white" icon="user" iconSize={20} />
          {this.props.children}
          <Icon
            icon="caret-right"
            className="icon-color__white cursor"
            iconSize={20}
          />
        </span>
      </div>
    );
  }
}

export default NavUser;
