import React, { Component } from "react";
import { DataGenera } from "../../Data/DataGenera";
import { DataTitleCompany } from "../../Data/DataTitleCompany";
import SearchForm from "../Search/SearchForm";
import { Drawer, Classes, Position, Icon } from "@blueprintjs/core";
import TableGenera from "./TableGenera";

export default class TableProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      address: "",
      phone: "",
      fax: "",
      email: "",
      bigreg: "",
      type: false,
      country: "",
    };
  }
  componentDidMount() {
    if (this.props.task) {
      this.setState({
        id: this.props.task.id,
        name: this.props.task.name,
        address: this.props.task.address,
        phone: this.props.task.phone,
        fax: this.props.task.fax,
        email: this.props.task.email,
        bigreg: this.props.task.bigreg,
        type: this.props.task.type,
        country: this.props.task.country,
      });
    }
  }
  onChange = (event) => {
    let target = event.target;
    let name = target.name;
    let value = target.value;
    if (name === "type") {
      value = target.value === "true" ? true : false;
    }
    this.setState({
      [name]: value,
    });
  };

  onUpdate = () => {
    this.props.onUpdate(this.props.task.id);
  };
  handleOpen = () => this.setState({ isOpen: true });
  handleClose = () => this.setState({ isOpen: false });
  //   handleOpen = () => this.setState({ isOpen: true });

  //   setTaskForm = () => {
  //     // this.props.onCloseTaskForm();
  //     this.props.handleOpen();
  //   };

  tableItem = () => {
    return this.props.datatable.map((item, index) => {
      return (
        <tr key={index}>
          {Object.values(item).map((item2, key) => {
            return (
              <td
                key={key}
                className="click__name"
                onClick={() => this.handleOpen()}
              >
                {item2}
              </td>
            );
          })}
        </tr>
      );
    });
  };
  render() {
    return (
      <>
        {this.tableItem()}
        {/* {this.props.datatable.map((item, index) => {
          return (
            <tr key={index}>
              <td>{item.id}</td>
              <td className="click__name" onClick={() => this.handleOpen()}>
                {item.name}
              </td>
              <td>{item.address}</td>
              <td>{item.phone}</td>
              <td>{item.fax}</td>
              <td>{item.email}</td>
              <td>{item.bigreg}</td>
              <td>{item.type}</td>
              <td>{item.country}</td>
            </tr>
          );
        })} */}
        <Drawer
          open
          size={Drawer.SIZE_LARGE}
          position={Position.BOTTOM}
          icon="info-sign"
          onClose={this.handleClose}
          title="Edit Company #Test"
          {...this.state}
        >
          {this.props.children}
          <div className={Classes.DRAWER_FOOTER}>Footer</div>
        </Drawer>
      </>
    );
  }
}
