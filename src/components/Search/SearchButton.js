import React, { Component } from "react";
import { Icon } from "@blueprintjs/core";

class SearchButton extends Component {
  render() {
    return (
      <button type="button" className="btn-search">
        <span className="btn-icon">
          <Icon icon={this.props.iconName}> </Icon>
        </span>
        {this.props.iconTitle}
      </button>
    );
  }
}

export default SearchButton;
