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
        <a class="nav-link link-blue button" onclick="convert(this, 'remotedatagrid-footercomponent-example-rr4op');">Open CodeSandbox</a>
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
        <a class="nav-link link-blue button" onclick="convert(this, 'remotedatagrid-footercomponent-example-rr4op');">Open CodeSandbox</a>
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
        <a class="nav-link link-blue button" onclick="convert(this, 'remotedatagrid-itemsperpage-example-ny2k5');">Open CodeSandbox</a>
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
        <a class="nav-link link-blue button" onclick="convert(this, 'remotedatagrid-onrowclick-example-ulurp');">Open CodeSandbox</a>
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
        <a class="nav-link link-blue button" onclick="convert(this, 'remotedatagrid-detailcomponent-example-yusvc');">Open CodeSandbox</a>
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
        <a class="nav-link link-blue button" onclick="convert(this, 'remotedatagrid-onerror-example-vyhze');">Open CodeSandbox</a>
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
        <a class="nav-link link-blue button" onclick="convert(this, 'localdatagrid-example-vpcs2');">Open CodeSandbox</a>
      </div>
    </div><div class="mb-4">
      <div id="TbRow">
        <h4 class="blue-title">TbRow</h4>
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
              <td>row</td>
              <td>Object</td>
              <td>Row from the data grid</td>
              <td>No</td>
              <td>None</td>
            </tr>
            <tr>
              <td>rowIndex</td>
              <td>number</td>
              <td>Index of the row to be rendered</td>
              <td>No</td>
              <td>None</td>
            </tr>
            <tr>
              <td>columns</td>
              <td>ColumnModel[]</td>
              <td>Columns to be rendered on the row</td>
              <td>No</td>
              <td>None</td>
            </tr>
            <tr>
              <td>onRowClick</td>
              <td>Function</td>
              <td>Function to be passed when row element is clicked</td>
              <td>Yes</td>
              <td>None</td>
            </tr>
          </tbody>
        </table>
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
        <a class="nav-link link-blue button" onclick="convert(this, 'remotedatagrid-rowcomponent-example-j9h69');">Open CodeSandbox</a>
      </div>
    </div></div><div class="mb-4">
      <div id="TbMobileRow">
        <h4 class="blue-title">TbMobileRow</h4>
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
              <td>Columns to be rendered on the row</td>
              <td>No</td>
              <td>None</td>
            </tr>
            <tr>
              <td>onRowClick</td>
              <td>Function</td>
              <td>Function to handle the click event over a grid's row - <i>Takes a row object as parameter</i></td>
              <td>No</td>
              <td>None</td>
            </tr>
            <tr>
              <td>row</td>
              <td>Object</td>
              <td>Row from the data grid</td>
              <td>No</td>
              <td>None</td>
            </tr>
          </tbody>
        </table>
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
        <a class="nav-link link-blue button" onclick="convert(this, 'remotedatagrid-mobilebreakpointwidthwidth-example-lumcz');">Open CodeSandbox</a>
      </div>
    </div>
  </div>
  <div class="col-2 toc d-none d-lg-block">
    <ul>
      <li><p class="navbar-brand pl-3">Table of Content</p></li>
      <li><a class="nav-link" href="#DataGrid">DataGrid</a></li>
      <li><a class="nav-link" href="#TbRow">TbRow</a></li>
      <li><a class="nav-link" href="#TbMobileRow">TbMobileRow</a></li>
    </ul>
  </div>
</div>
