import React, { Component } from "react";
import NavMenu from "../components/navbar/NavMenu";
import NavUser from "../components/navbar/NavUser";
import TableProduct from "../components/Table/TableProduct";
import TitleContent from "../components/TitleContent/TitleContent";
import { DataMotoList } from "../Data/DataMoToList";
import { DataMotoTable } from "../Data/DataMotoTable";
import { DataNavbar } from "../Data/DataNavbar";
import { DataProductCompany } from "../Data/DataProductCompany";
import { DataTitleCompany } from "../Data/DataTitleCompany";
import ContentRightTemp from "../templates/ContentRightTemp";
import NavbarTemp from "../templates/NavbarTemp";
import PageTemp from "../templates/PageTemp";
import SearchTemplate from "../templates/SearchTemplate";
import TableFormTemplate from "../templates/TableFormTemplate";

class Moto extends Component {
  render() {
    return (
      <PageTemp>
        <ContentRightTemp>
          <TitleContent> Moto </TitleContent>
          <SearchTemplate>
            <h4> Moto </h4>
          </SearchTemplate>
          <TableFormTemplate table={DataMotoTable} datatable={DataMotoList}>
            {/* <TableProduct datatable={DataMotoList}/> */}
          </TableFormTemplate>
        </ContentRightTemp>{" "}
      </PageTemp>
    );
  }
}
export default Moto;
