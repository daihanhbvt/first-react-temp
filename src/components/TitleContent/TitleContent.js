import React, { Component } from "react";
import { DataNavbar } from "../../Data/DataNavbar";

export default class TitleContent extends Component {
  render() {
    return (
      <div className="title-style">
        <h4 className="title-name"> {this.props.children} </h4>
      </div>
    );
  }
}
