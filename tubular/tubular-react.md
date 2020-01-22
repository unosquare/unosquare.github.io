---
layout: page
title: "Open Source Software Initiatives from Unosquare | uno-react"
description: "Check out uno-react, a Typescript library with common functions and hooks for React"
---
<div class="container content-home d-flex flex-row">
  <div class="col-lg-10 col-xl-10 col-sm-12 col-md-12 p-0">
    <div class="d-flex flex-row space-between">
      <h2>tubular-react</h2>
      <a href="https://www.npmjs.com/package/tubular-react" class="first-icon">
        <img class="npm-icon" src="/assets/npm.svg" alt="tubular-react npm" title="tubular-react npm"/>
      </a>
      <a href="https://github.com/unosquare/tubular-react">
        <img class="github-icon" src="/assets/github.png" alt="tubular-react Github Repo" title="tubular-react Github Repo"/>
      </a>
    </div>
    <p>Tubular-React is a Material-UI table with local or remote data-source. Featuring:</p>
    <ul style="list-style-type:disc;">
      <li>Define a custom layout for columns and cells using render methods.</li>
      <li>Use a remote or local datasource. Remote datasource use a specific Request and Response format.</li>
      <li>Sort and filter multiple columns.</li>
      <li>Free-text search of string columns.</li>
      <li>Page data. Remote data is paged in the server side.</li>
      <li>Export data to a CSV file.</li>
      <li>Print data.</li>
    </ul>
    <div class="mb-4">
      <div id="DataGrid">
        <h4 class="blue-title">DataGrid</h4>
        <p>
          The grid will connect to a remote datasource or have a local datasource 
          depending on what's passed in the dataSource property.
        </p>
        <h6>PROPERTIES</h6>
        <table class="table table-striped w-100 mt-2">
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Description</th>
              <th>Optional</th>
              <th>Default value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>columns</td>
              <td>ColumnModel[]</td>
              <td>Array that defines the type of columns to be rendered on the grid</td>
              <td>No</td>
              <td>None</td>
            </tr>
            <tr>
              <td>dataSource</td>
              <td>
                <ul style="list-style-type:disc;">
                  <li>Object[]</li>
                  <li>string</li>
                  <li>Request</li>
                  <li>TubularHttpClientAbstract</li>
                </ul>
              </td>
              <td>Source of the data for the grid</td>
              <td>No</td>
              <td>None</td>
            </tr>
            <tr>
              <td>deps</td>
              <td>any[]</td>
              <td>Array of dependencies for grid</td>
              <td>No</td>
              <td>None</td>
            </tr>
            <tr>
              <td>detailComponent</td>
              <td>React.ReactElement</td>
              <td>Element used to render row details</td>
              <td>No</td>
              <td>None</td>
            </tr>
            <tr>
              <td>gridName</td>
              <td>string</td>
              <td>Name of the grid - *Note: two or more grids with same name may cause problems*</td>
              <td>No</td>
              <td>None</td>
            </tr>
            <tr>
              <td>storage</td>
              <td>DataGridStorage</td>
              <td>Save data to localStorage</td>
              <td>Yes</td>
              <td>None</td>
            </tr>
            <tr>
              <td>toolbarOptions</td>
              <td>ToolbarOptions</td>
              <td>Options to present on the grid</td>
              <td>Yes</td>
              <td>None</td>
            </tr>
            <tr>
              <td>mobileBreakpointWidth</td>
              <td>number</td>
              <td>Minimum width to change style to mobile version</td>
              <td>Yes</td>
              <td>None</td>
            </tr>
            <tr>
              <td>rowComponent</td>
              <td>React.FunctionComponent</td>
              <td>Custom row component</td>
              <td>Yes</td>
              <td>None</td>
            </tr>
            <tr>
              <td>rowMobileComponent</td>
              <td>React.FunctionComponent</td>
              <td>Custom row component for mobile version</td>
              <td>Yes</td>
              <td>None</td>
            </tr>
            <tr>
              <td>footerComponent</td>
              <td>React.FunctionComponent</td>
              <td>Custom component for Grid footer</td>
              <td>Yes</td>
              <td>None</td>
            </tr>
            <tr>
              <td>onError</td>
              <td>Function</td>
              <td>Function to handle errors</td>
              <td>Yes</td>
              <td>None</td>
            </tr>
            <tr>
              <td>onRowClick</td>
              <td>Function</td>
              <td>Function to handle when a row is clicked</td>
              <td>Yes</td>
              <td>None</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h3>Examples</h3>
      <div>
        <p>Example of DataGrid with footer component.</p>
        <code>
          <pre>
            import columns from "./columns";
            import { DataGrid, ToolbarOptions } from "tubular-react";
            const tbFooter = ({ aggregates }: any) => (
              < tr >
                < tdTotal:< /td >
                < td >{aggregates && aggregates.CustomerName}< /td >
              < /tr >
            );
            const RemoteDataGrid: React.FunctionComponent = () => {
              return (
                < DataGrid
                  gridName="Tubular-React"
                  columns={columns}
                  dataSource="https://tubular.azurewebsites.net/api/orders/paged"
                  footerComponent={tbFooter}
                >
              );
            };
          </pre>
        </code>
        <a class="nav-link link-blue button" href="https://codesandbox.io/s/remotedatagrid-footercomponent-example-rr4op?fontsize=14&hidenavigation=1&theme=dark)">Open CodeSandbox</a>
      </div>
      <div>
        <p>Example of DataGrid with Toolbar options.</p>
        <code>
          <pre>
            import columns from "./columns";
            import { DataGrid, ToolbarOptions } from "tubular-react";
            const RemoteDataGrid: React.FunctionComponent = () => {
              const toolbarOptions = new ToolbarOptions({
                searchText: false,
                topPager: false
              });
              return (
                < DataGrid
                  gridName="Tubular-React"
                  columns={columns}
                  dataSource="https://tubular.azurewebsites.net/api/orders/paged"
                  toolbarOptions={toolbarOptions}
                  footerComponent={tbFooter}
                / >
              );
            };
          </pre>
        </code>
        <a class="nav-link link-blue button" href="https://codesandbox.io/s/remotedatagrid-footercomponent-example-rr4op?fontsize=14&hidenavigation=1&theme=dark">Open CodeSandbox</a>
      </div>
      <div>
        <p>Example of DataGrid with custom number of items per page.</p>
        <code>
          <pre>
            import { DataGrid, ToolbarOptions } from "tubular-react";
            import columns from "./columns";
            const RemoteDataGrid: React.FunctionComponent = () => {
              const toolbarOptions = new ToolbarOptions({
                itemsPerPage: 15,
              });
              return (
                < DataGrid
                  gridName="Tubular-React"
                  columns={columns}
                  dataSource="https://tubular.azurewebsites.net/api/orders/paged"
                  toolbarOptions={toolbarOptions}
                / >
              );
            };
          </pre>
        </code>
        <a class="nav-link link-blue button" href="https://codesandbox.io/s/remotedatagrid-itemsperpage-example-ny2k5?fontsize=14&hidenavigation=1&theme=dark">Open CodeSandbox</a>
      </div>
      <div>
        <p>Example of DataGrid with onRowClick event.</p>
        <code>
          <pre>
            import { DataGrid } from "tubular-react";
            import columns from "./columns";
            const RemoteDataGrid: React.FunctionComponent = () => {
              const rowClick = (row: {}) => {
                console.log("You clicked on a row: ", row);
                alert("You clicked on the order Id: " + row.OrderID);
              };
              return (
                < DataGrid
                  gridName="Tubular-React"
                  columns={columns}
                  dataSource="https://tubular.azurewebsites.net/api/orders/paged"
                  onRowClick={rowClick}
                / >
              );
            };
          </pre>
        </code>
        <a class="nav-link link-blue button" href="https://codesandbox.io/s/remotedatagrid-onrowclick-example-ulurp?fontsize=14&hidenavigation=1&theme=dark">Open CodeSandbox</a>
      </div>
      <div>
        <p>Example of DataGrid with custom row component.</p>
        <code>
          <pre>
            import { DataGrid, ToolbarOptions, TbRowProps } from "tubular-react";
            const CustomTbRow: React.FunctionComponent = ({
              row,
            }: TbRowProps) => (
              < TableRow hover={true} key={row.OrderID}>
                < TableCell padding="default">{row.OrderID} < /TableCell>
                < TableCell padding="default">{row.CustomerName} < /TableCell>
                < TableCell padding="default">{row.ShipperCity}< /TableCell>
                < TableCell padding="default" align={"right"} >
                  {row.Amount || 0}
                < /TableCell>
                < TableCell padding="default">
                  {row.IsShipped ? < CheckBox /> : < CheckBoxOutlineBlank />}
                < /TableCell>
              < /TableRow>
            );
            const RemoteDataGrid: React.FunctionComponent = () => {
              return (
                < DataGrid
                  gridName="Tubular-React"
                  columns={columns}
                  dataSource="https://tubular.azurewebsites.net/api/orders/paged"
                  rowComponent={CustomTbRow}
                />
              );
            };
          </pre>
        </code>
        <a class="nav-link link-blue button" href="https://codesandbox.io/s/remotedatagrid-rowcomponent-example-j9h69?fontsize=14&hidenavigation=1&theme=dark">Open CodeSandbox</a>
      </div>
      <div>
        <p>Example of DataGrid with Detail component.</p>
        <code>
          <pre>
            import * as React from "react";
            import { DataGrid, DetailBaseComponent, ToolbarOptions } from "tubular-react";
            import columns from "./columns";
            export interface DetailBaseComponentProps { row: any; }
            const DetailComponent: DetailBaseComponent = ({
              row
            }: DetailBaseComponentProps) => <>This is a test with the row #{row.OrderID}</>;
            const RemoteDataGrid: React.FunctionComponent = () => {
              return (
                < DataGrid
                  gridName="Tubular-React"
                  columns={columns}
                  dataSource="https://tubular.azurewebsites.net/api/orders/paged"
                  detailComponent={< DetailComponent />}
                />
              );
            };
          </pre>
        </code>
        <a class="nav-link link-blue button" href="https://codesandbox.io/s/remotedatagrid-detailcomponent-example-yusvc?fontsize=14&hidenavigation=1&theme=dark">Open CodeSandbox</a>
      </div>
      <div>
        <p>Example of DataGrid with MobileResolution breakpoint.</p>
        <code>
          <pre>
            import { DataGrid, ToolbarOptions } from "tubular-react";
            import columns from "./columns";
            const mobileBreakpointWidth = 800;
            const RemoteDataGrid: React.FunctionComponent = () => {
              return (
                <>
                  < h4>Try to change the resolution...< /h4>
                  < DataGrid
                    gridName="Tubular-React"
                    columns={columns}
                    dataSource="https://tubular.azurewebsites.net/api/orders/paged"
                    mobileBreakpointWidth={mobileBreakpointWidth}
                  />
                </>
              );
            };
          </pre>
        </code>
        <a class="nav-link link-blue button" href="https://codesandbox.io/s/remotedatagrid-mobilebreakpointwidthwidth-example-lumcz?fontsize=14&hidenavigation=1&theme=dark">Open   CodeSandbox</a>
      </div>
      <div>
        <p>Example of OnError messages on DataGrid.</p>
        <code>
          <pre>
            import { DataGrid, ToolbarOptions } from "tubular-react";
            import Snackbar from "@material-ui/core/Snackbar";
            const RemoteDataGrid: React.FunctionComponent = () => {
              const [getErrorMessage, setErrorMessage] = React.useState(null as string);
              return (
                <>
                  {getErrorMessage && (
                    < Snackbar
                      anchorOrigin={{ vertical: "top", horizontal: "center" }}
                      style={{ paddingTop: "10px" }}
                      open={true}
                      ContentProps={{ "aria-describedby": "message-id" }}
                      message={< span id="message-id">{getErrorMessage}< /span>}
                    />
                  )}
                  < DataGrid
                    columns={columns}
                    dataSource="https://tubular.azurewebsites.net/api/orders/paged"
                    gridName="LocalDataGrid"
                    onError={setErrorMessage}
                  />
                </>
              );
            };
          </pre>
        </code>
        <a class="nav-link link-blue button" href="https://codesandbox.io/s/remotedatagrid-onerror-example-vyhze?fontsize=14&hidenavigation=1&theme=dark">Open CodeSandbox</a>
      </div>
      <div>
        <p>Example of DataGrid with localDataSource</p>
        <code>
          <pre>
            import { DataGrid, ToolbarOptions } from "tubular-react";
            import columns from "./columns";
            const localData = [
              // Collection of data
            ];
            const LocalDataGrid: React.FunctionComponent = () => {
              return (
                < DataGrid
                  gridName="Tubular-React"
                  columns={columns}
                  dataSource={localData}
                />
              );
            };
          </pre>
        </code>
        <a class="nav-link link-blue button" href="https://codesandbox.io/s/localdatagrid-example-vpcs2?fontsize=14&hidenavigation=1&theme=dark">Open CodeSandbox</a>
      </div>
    </div>
    <div class="mb-4">
      <div id="ColumnModel">
        <h4 class="blue-title">ColumnModel</h4>
        <p>
          It represents a DataGrid column and its constructor 
          requires a name identifier as well as an object of 
          column options with the following properties:
        </p>
        <h6>PROPERTIES</h6>
        <table class="table table-striped w-100 mt-2">
          <thead>
            <tr>
              <td>Name</td>
              <td>Type</td>
              <td>Description</td>
              <td>Optional</td>
              <td>Default value</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Name</td>
              <td>string</td>
              <td>Name of the Column</td>
              <td>No</td>
              <td>None</td>
            </tr>
            <tr>
              <td>Aggregate</td>
              <td>Function[]</td>
              <td>Functions for aggregation of data</td>
              <td>Yes</td>
              <td>None</td>
            </tr>
            <tr>
              <td>DataType</td>
              <td>ColumnDataType</td>
              <td>Column's data type</td>
              <td>Yes</td>
              <td>STRING</td>
            </tr>
            <tr>
              <td>Filterable</td>
              <td>Boolean</td>
              <td>Flag to determine if column can be filtered</td>
              <td>Yes</td>
              <td>false</td>
            </tr>
            <tr>
              <td>IsKey</td>
              <td>Boolean</td>
              <td>Determine if column is key</td>
              <td>Yes</td>
              <td>false</td>
            </tr>
            <tr>
              <td>Label</td>
              <td>string</td>
              <td>Label to show</td>
              <td>Yes</td>
              <td>*Name of the column*</td>
            </tr>
            <tr>
              <td>Searchable</td>
              <td>Boolean</td>
              <td>Set if the column is searchable</td>
              <td>Yes</td>
              <td>true</td>
            </tr>
            <tr>
              <td>SortDirection</td>
              <td>ColumnSortDirection</td>
              <td>Direction in which data is sorted</td>
              <td>Yes</td>
              <td>None</td>
            </tr>
            <tr>
              <td>SortOrder</td>
              <td>number</td>
              <td>Order to sort the data</td>
              <td>Yes</td>
              <td>-1</td>
            </tr>
            <tr>
              <td>Sortable</td>
              <td>Boolean</td>
              <td>Flag to determine if data can be sorted</td>
              <td>Yes</td>
              <td>false</td>
            </tr>
            <tr>
              <td>Visible</td>
              <td>Boolean</td>
              <td>Flag to hide/view the column on grid</td>
              <td>Yes</td>
              <td>true</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h3>EXAMPLES</h3>
      <div>
        <p>Example of Column configurations</p>
        <code>
          <pre>
            import {
              AggregateFunctions,
              ColumnDataType,
              ColumnModel,
              ColumnSortDirection
            } from "tubular-common";
            const columns = [
              new ColumnModel("OrderID", {
                dataType: ColumnDataType.Numeric,
                filterable: true,
                isKey: true,
                label: "Id",
                sortDirection: ColumnSortDirection.Ascending,
                sortOrder: 1,
                sortable: true
              }),
              new ColumnModel("CustomerName", {
                aggregate: AggregateFunctions.Count,
                filterable: true,
                searchable: true,
                sortable: true
              }),
              new ColumnModel("ShippedDate", {
                dataType: ColumnDataType.DateTime,
                filterable: true,
                sortable: true
              }),
              new ColumnModel("ShipperCity"),
              new ColumnModel("Amount", {
                dataType: ColumnDataType.Numeric,
                sortable: true
              }),
              new ColumnModel("IsShipped", {
                dataType: ColumnDataType.Boolean,
                filterable: true,
                sortable: true
              })
            ];
          </pre>
        </code>
        <a class="nav-link link-blue button" href="https://codesandbox.io/s/localdatagrid-example-vpcs2?fontsize=14&hidenavigation=1&theme=dark">Open CodeSandbox</a>
      </div>
    </div>
  </div>
  <div class="col-2 toc d-none d-lg-block">
    <ul>
      <li>
        <p class="navbar-brand pl-3">Table of Content</p>
      </li>
      <li>
        <a class="nav-link" href="#DataGrid">DataGrid</a>
      </li>
      <li>
        <a class="nav-link" href="#ColumnModel">ColumnModel</a>
      </li>
    </ul>
  </div>
</div>
