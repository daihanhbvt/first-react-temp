import React, { Component } from "react";
import Collapsible from "react-collapsible";

export default class SearchTemplate extends Component {
  render() {
    return (
      <div style={{ overflowX: "auto" }}>
        <div className="search__title">
          <Collapsible open trigger="SEARCH">
            {this.props.children}
          </Collapsible>
        </div>
      </div>
    );
  }
}
