import React, { Component } from "react";
import { Icon } from "@blueprintjs/core";
import { NavLink } from "react-router-dom";
import Collapsible from "react-collapsible";
import "./Navbar.css";

class NavMenu extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        {this.props.navMenu.map((itemMenu, index) => {
          return (
            <div className="card" key={index}>
              <Collapsible
                open
                key={index}
                className="title-collapse"
                trigger={itemMenu.title}
              >
                <Icon
                  className="icon-title"
                  icon={itemMenu.iconName}
                  iconSize={22}
                />
                {itemMenu.subNav.map((item123, index) => {
                  return (
                    <div key={index}>
                      <div className="title-collapse-name">
                        <NavLink
                          activeClassName="selectedColor"
                          to={item123.path}
                        >
                          <Icon
                            className="icon-title__small"
                            icon={item123.iconName2}
                            iconSize={20}
                          />
                          <span className="title-collapse__small">
                            {item123.title2}
                          </span>
                        </NavLink>
                      </div>
                    </div>
                  );
                })}
              </Collapsible>
            </div>
          );
        })}
      </>
    );
  }
}

export default NavMenu;
