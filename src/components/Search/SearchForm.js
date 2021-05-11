import React, { Component } from "react";
import "./CollapsibleTest.css";
import "./Search.css";
import { Icon } from "@blueprintjs/core";

class SearchForm extends Component {
  render() {
    return (
      <form className="form">
        <div className="search__form">
          {this.props.titleItem.map((item3, index) => {
            return (
              <div className="search__list">
                <label htmlFor="fname">
                  <span className="search__list-title">{item3}</span>
                </label>
                <input type="text" id="fname" name="fname" />
              </div>
            );
          })}
        </div>
        {this.props.children}
      </form>
    );
  }
}

export default SearchForm;
