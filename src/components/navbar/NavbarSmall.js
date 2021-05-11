import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Icon } from "@blueprintjs/core";
import "./NavS.css";

class NavbarSmall extends Component {
  setTaskFormOpen = () => {
    this.props.onOpenTaskForm();
  };
  componentDidMount() {
    for (let choose of document.querySelectorAll(".menu-item"))
      choose.addEventListener("click", function () {
        // debugger
        this.querySelector(".list-group").classList.toggle("show");
      });

    window.addEventListener("click", function (e) {
      for (let select of document.querySelectorAll(".menu-item")) {
        // debugger;
        if (!select.contains(e.target)) {
          select.querySelector(".list-group").classList.remove("show");
        }
      }
    });
  }
  render() {
    return (
      <div className="navbar__small">
        <span className="sidenav-small cursor">
          <Icon
            className="nav_small-menu"
            icon="menu"
            onClick={() => this.setTaskFormOpen()}
            iconSize={30}
          />
        </span>
        <Icon icon="user" className="sidenav-icon__use " iconSize={25} />
        <div className="nav__small">
          {this.props.navSmall.map((value, index) => {
            return (
              <div className="menu">
                <div className="menu-item">
                  <span className="btn btn-info" data-show={value.title}>
                    <Icon
                      className="title__small-item-icon"
                      icon={value.iconName}
                      iconSize={20}
                    />
                  </span>
                  <div className="list-group" id={value.title}>
                    <div className="title__small-list title__small-item">
                      {value.title}
                    </div>
                    {value.subNav.map((item123, index) => {
                      return (
                        <div key={index} className="title__small-name">
                          <NavLink to={item123.path}>
                            <div className="title__small-list-item">
                              <Icon
                                className="title__small-item-icon-name"
                                icon={item123.iconName2}
                                iconSize={20}
                              />
                              <span className="title__small-item-name">
                                {item123.title2}
                              </span>
                            </div>
                          </NavLink>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default NavbarSmall;
