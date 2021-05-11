import React, { Component } from "react";
import ContentRightTemp from "../templates/ContentRightTemp";
import TableFormTemplate from "../templates/TableFormTemplate";
import { DataProductCompany } from "../Data/DataProductCompany";
import { DataMotoTable } from "../Data/DataMotoTable";
import PageTemp from "../templates/PageTemp";

class Terminal extends Component {
  render() {
    return (
      <PageTemp>
        <ContentRightTemp>
          <TableFormTemplate
            table={DataMotoTable}
            datatable={DataProductCompany}
          ></TableFormTemplate>
        </ContentRightTemp>
      </PageTemp>
    );
  }
}

export default Terminal;
