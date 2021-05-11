import React, { Component } from "react";
import SearchTemplate from "../templates/SearchTemplate";
import TitleContent from "../components/TitleContent/TitleContent";
import TableFormTemplate from "../templates/TableFormTemplate";
import "./page.css";
import { DataTitleCompany } from "../Data/DataTitleCompany";
import SearchButton from "../components/Search/SearchButton";
import SearchForm from "../components/Search/SearchForm";
import ContentRightTemp from "../templates/ContentRightTemp";
import TableProduct from "../components/Table/TableProduct";
import { DataProductCompany } from "../Data/DataProductCompany";
import PageTemp from "../templates/PageTemp";
import TableGenera from "../components/Table/TableGenera";
import { DataGenera } from "../Data/DataGenera";

class Company extends Component {
  render() {
    return (
      <PageTemp>
        <ContentRightTemp>
          <TitleContent> Company </TitleContent>

          <SearchTemplate>
            <SearchForm titleItem={DataTitleCompany}>
              <div className="search__list-btn">
                <SearchButton iconName={"search"} iconTitle={"Search"} />
                <SearchButton iconName={"plus"} iconTitle={"Add Company"} />
              </div>
            </SearchForm>
          </SearchTemplate>

          <TableFormTemplate table={DataTitleCompany}>
            <TableProduct datatable={DataProductCompany}>
              <TableGenera titleGenera={DataGenera} />
              <SearchForm titleItem={DataTitleCompany} />
            </TableProduct>
          </TableFormTemplate>
        </ContentRightTemp>
      </PageTemp>
    );
  }
}

export default Company;
