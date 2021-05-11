import React, { Component } from "react";
import NavMenu from "../components/navbar/NavMenu";
import NavUser from "../components/navbar/NavUser";
import { DataNavbar } from "../Data/DataNavbar";
import NavbarTemp from "./NavbarTemp";

export default class PageTemp extends Component {
  render() {
    return (
      <div className="company--container">
        <NavbarTemp>
          <NavUser>
            <span className="text-white"> truong@gmail.com</span>
          </NavUser>
          <NavMenu navMenu={DataNavbar}> </NavMenu>
        </NavbarTemp>
        {this.props.children}
      </div>
    );
  }
}
