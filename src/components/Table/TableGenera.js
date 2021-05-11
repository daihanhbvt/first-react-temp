import React, { Component } from "react";

class TableGenera extends Component {
  render() {
    return (
      <div className="menu-navbar">
        {this.props.titleGenera.map((title, index) => {
          return <div className="menu-navbar__item">{title}</div>;
        })}
      </div>
    );
  }
}

export default TableGenera;
