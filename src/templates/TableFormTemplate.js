import React, { Component } from "react";
import "../components/Table/tableproduct.css";

class TableFormTemplate extends Component {
  title = () => {
    return this.props.table.map((item) => {
      return <th> {item} </th>;
    });
  };
  render() {
    return (
      <table className="table table-striped">
        <tbody>
          <tr>
            <th></th>
            {this.title()}
            {/* {this.props.table.map((titleTable, index) => {
              return <th> {titleTable} </th>;
            })} */}
          </tr>
          {this.props.children}
        </tbody>
      </table>
    );
  }
}

export default TableFormTemplate;
