import React, { Component } from "react";

class ContentRightTemp extends Component {
  render() {
    return (
      <div id="col-content" className="testleft">
        <div className="container-product">{this.props.children}</div>
      </div>
    );
  }
}

export default ContentRightTemp;
