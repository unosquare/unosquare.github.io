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
    <p>tubular-react is a Material-UI table with local or remote data-source. Featuring:</p>
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
      <div id="AdvancePaginationActions">
        <h4 class="blue-title">AdvancePaginationActions</h4>
        <p>
          Custom dropdown showing the different operators used to filter data on a column.
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
              <td>count</td>
              <td>number</td>
              <td>number of pages to go through</td>
              <td>No</td>
              <td>None</td>
            </tr>
            <tr>
              <td>isAdvanced</td>
              <td>boolean</td>
              <td>Check if count or paginator has advanced</td>
              <td>No</td>
              <td>None</td>
            </tr>
            <tr>
              <td>isLoading</td>
              <td>boolean</td>
              <td>Checks when grid content is loading after page changed</td>
              <td>No</td>
              <td>None</td>
            </tr>
            <tr>
              <td>page</td>
              <td>number</td>
              <td>Current page</td>
              <td>No</td>
              <td>None</td>
            </tr>
            <tr>
              <td>rowsPerPage</td>
              <td>number</td>
              <td>Number of table rows on each page</td>
              <td>No</td>
              <td>None</td>
            </tr>
            <tr>
              <td>onChangePage</td>
              <td>Function</td>
              <td>
                Function that handles the changing and 
                rendering of the content of the grid on 
                a new page
              </td>
              <td>No</td>
              <td>None</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
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
              <td><a href="https://github.com/unosquare/tubular/tubular-common#ColumnModel">ColumnModel[]</a></td>
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
        <a class="nav-link link-blue button" style="width:max-content!important" onclick="convert(this, 'remotedatagrid-footercomponent-example-rr4op');">Open CodeSandbox</a>
      </div>
    </div>
    <div class="mb-4">
      <div id="DataGridCard">
        <h4 class="blue-title">DataGridCard</h4>
        <p>
          Visualizes a grid element in a Material UI card.
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
              <td><a href="https://github.com/unosquare/tubular/tubular-common#ColumnModel">ColumnModel[]</a></td>
              <td>Columns that compose the grid</td>
              <td>No</td>
              <td>None</td>
            </tr>
            <tr>
              <td>item</td>
              <td>Object</td>
              <td>Description of the object</td>
              <td>No</td>
              <td>None</td>
            </tr>
            <tr>
              <td>onClickCallback</td>
              <td>Function</td>
              <td>Function to handle the click event over a grid's row - Takes a row object as parameter</td>
              <td>No</td>
              <td>None</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="mb-4">
      <div id="DataGridTable">
        <h4 class="blue-title">DataGridTable</h4>
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
              <td>tbTableInstance</td>
              <td>ITbTableInstance</td>
              <td>Table instance to render props on grid</td>
              <td>No</td>
              <td>None</td>
            </tr>
            <tr>
              <td>rowComponent</td>
              <td>React.FunctionComponent</td>
              <td>Component that renders a grid row</td>
              <td>No</td>
              <td>None</td>
            </tr>
            <tr>
              <td>footerComponent</td>
              <td>React.FunctionComponent</td>
              <td>Component that renders the grid footer</td>
              <td>No</td>
              <td>None</td>
            </tr>
            <tr>
              <td>detailComponent</td>
              <td>React.ReactElement</td>
              <td>Element that renders the details of a row</td>
              <td>Yes</td>
              <td>None</td>
            </tr>
            <tr>
              <td>onRowClick</td>
              <td>Function</td>
              <td>Function to be passed when row element is clicked - Note: Takes a row object</td>
              <td>Yes</td>
              <td>None</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="mb-4">
      <div id="DialogModal">
        <h4 class="blue-title">DialogModal</h4>
        <p>Opens a modal dialog when clicking a row.</p>
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
              <td>anchorFilter</td>
              <td>HTMLElement</td>
              <td>Element binding filter dialog</td>
              <td>No</td>
              <td>None</td>
            </tr>
            <tr>
              <td>activeColumn</td>
              <td><a href="https://github.com/unosquare/tubular/tubular-common#ColumnModel">ColumnModel</a></td>
              <td>Active column of the Grid</td>
              <td>No</td>
              <td>None</td>
            </tr>
            <tr>
              <td>setAnchorFilter</td>
              <td>Function</td>
              <td>Function to configure anchor to UI element</td>
              <td>No</td>
              <td>None</td>
            </tr>
            <tr>
              <td>setFilter</td>
              <td>Function</td>
              <td>Function to filter the Column data</td>
              <td>No</td>
              <td>None</td>
            </tr>
            <tr>
              <td>handleFilterChange</td>
              <td>Function</td>
              <td>Function to handle the UI rendering changes</td>
              <td>No</td>
              <td>None</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="mb-4">
      <div id="ExportButton">
        <h4 class="blue-title">ExportButton</h4>
        <p>Button utilized to export the data grid into a file</p>
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
              <td>type</td>
              <td>string</td>
              <td>Type of exporting</td>
              <td>No</td>
              <td>None</td>
            </tr>
            <tr>
              <td>gridName</td>
              <td>string</td>
              <td>Name of the grid exporting the data</td>
              <td>No</td>
              <td>None</td>
            </tr>
            <tr>
              <td>filteredRecordCount</td>
              <td>number</td>
              <td>Count of records filtered to be exported</td>
              <td>No</td>
              <td>None</td>
            </tr>
            <tr>
              <td>toolTip</td>
              <td>string</td>
              <td>Tolltip description for </td>
              <td>Yes</td>
              <td>None</td>
            </tr>
            <tr>
              <td>exportTo</td>
              <td>Function</td>
              <td>Function for exporting </td>
              <td>No</td>
              <td>None</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="mb-4">
      <div id="GridBody">
        <h4 class="blue-title">GridBody</h4>
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
              <td>detailComponent</td>
              <td>React.ReactElement</td>
              <td>Component that renders a row's details</td>
              <td>Yes</td>
              <td>None</td>
            </tr>
            <tr>
              <td>tbTableInstance</td>
              <td>ITbTableInstance</td>
              <td>Instance of a table to render its props</td>
              <td>No</td>
              <td>None</td>
            </tr>
            <tr>
              <td>rowComponent</td>
              <td>React.FunctionComponent</td>
              <td>Component that renders a grid row</td>
              <td>No</td>
              <td>None</td>
            </tr>
            <tr>
              <td>onRowClick</td>
              <td>Function</td>
              <td>Function to be passed when row element is clicked - Note: Takes a row object</td>
              <td>Yes</td>
              <td>None</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="mb-4">
      <div id="GridHeader">
        <h4 class="blue-title">GridHeader</h4>
        <p>
          Sets the header row for a grid.
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
              <td>tbTableInstance</td>
              <td>ITbTableInstance</td>
              <td>Instance of a table to render its props</td>
              <td>Yes</td>
              <td>None</td>
            </tr>
            <tr>
              <td>detailComponent</td>
              <td>React.ReactElement</td>
              <td>Component that renders a row's details</td>
              <td>No</td>
              <td>None</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="mb-4">
      <div id="GridToolbar">
        <h4 class="blue-title">GridToolbar</h4>
        <p>
          Toolbar options of the Grid.
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
              <td>toolbarOptions</td>
              <td>ToolbarOptions</td>
              <td>Options included on the grid</td>
              <td>No</td>
              <td>None</td>
            </tr>
            <tr>
              <td>gridName</td>
              <td>string</td>
              <td>Name of the grid that has this toolbar options assigned</td>
              <td>No</td>
              <td>None</td>
            </tr>
            <tr>
              <td>tbTableInstance</td>
              <td>ITbTableInstance</td>
              <td>Table assigned to the grid.</td>
              <td>No</td>
              <td>None</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="mb-4">
      <div id="GridHeaderCell">
        <h4 class="blue-title">GridHeaderCell</h4>
        <p>
          Sets the header cell for a grid.
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
              <td>column</td>
              <td><a href="https://github.com/unosquare/tubular/tubular-common#ColumnModel">ColumnModel</a></td>
              <td>Column to get data for cell</td>
              <td>No</td>
              <td>None</td>
            </tr>
            <tr>
              <td>key</td>
              <td>string</td>
              <td>Key for the cell</td>
              <td>No</td>
              <td>None</td>
            </tr>
            <tr>
              <td>setActiveColumn</td>
              <td>Function</td>
              <td>Function to configure column as active</td>
              <td>No</td>
              <td>None</td>
            </tr>
            <tr>
              <td>sortColumn</td>
              <td>Function</td>
              <td>Function to sort the data of the column</td>
              <td>No</td>
              <td>None</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="mb-4">
      <div id="MasterDetailRow">
        <h4 class="blue-title">MasterDetailRow</h4>
        <p> Sets the header cell for a grid. </p>
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
              <td>detail</td>
              <td>React.ReactElement</td>
              <td>Detail component to render details of a render</td>
              <td>No</td>
              <td>None</td>
            </tr>
            <tr>
              <td>renderCells</td>
              <td>any</td>
              <td>Object to render </td>
              <td>No</td>
              <td>None</td>
            </tr>
            <tr>
              <td>style</td>
              <td>React.CSSProperties</td>
              <td>Object to style component</td>
              <td>No</td>
              <td>None</td>
            </tr>
            <tr>
              <td>clickEvent</td>
              <td>Function</td>
              <td>Function to handle onClick events</td>
              <td>No</td>
              <td>None</td>
            </tr>
            <tr>
              <td>rowData</td>
              <td>Object</td>
              <td>Object to represent data of the column</td>
              <td>No</td>
              <td>None</td>
            </tr>
            <tr>
              <td>columns</td>
              <td><a href="https://github.com/unosquare/tubular/tubular-common#ColumnModel">ColumnModel[]</a></td>
              <td>Columns of header details</td>
              <td>No</td>
              <td>None</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <p>Example of DataGrid with details row.</p>
        <code>
          <pre>
            import { DataGridTable, ToolbarOptions, TbRowProps } from "tubular-react";
            const CustomTbRow: React.FunctionComponent = ({
              row,
            }: TbRowProps) => (
              return (
                <>
                  {getErrorMessage && (
                    < Snackbar
                      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                      style={{ paddingTop: '10px' }}
                      open={true}
                      ContentProps={{ 'aria-describedby': 'message-id' }}
                      message={< span id="message-id">{getErrorMessage}< /span>}
                    />
                  )}
                  < Typography style={{ margin: '25px', marginBottom: '10px' }} variant="h4">
                    No card grid!
                  < /Typography>
                  < Table>
                    < TableHead>
                      < TableRow>
                        < Paginator
                          tbTableInstance={tbTableInstance}
                          rowsPerPageOptions={null}
                          advancePagination={false}
                        />
                      < /TableRow>
                    < /TableHead>
                  < /Table>
                  < DataGridTable
                    tbTableInstance={tbTableInstance}
                    rowComponent={CustomTbRow}
                    footerComponent={tbFooter}
                    onRowClick={onRowClick}
                  />
                </>
              );
            };
          </pre>
        </code>
        <a class="nav-link link-blue button" style="width:max-content!important" onclick="convert(this, 'remotedatagrid-rowcomponent-example-j9h69');">Open CodeSandbox</a>
      </div>
    </div>
    <div class="mb-4">
      <div id="MobileDataGridTable">
        <h4 class="blue-title">MobileDataGridTable</h4>
        <p>Sets the row for a mobile grid.</p>
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
              <td>tbTableInstance</td>
              <td>ITbTableInstance</td>
              <td>Instance of table to represent data</td>
              <td>No</td>
              <td>None</td>
            </tr>
            <tr>
              <td>rowComponent</td>
              <td>React.FunctionComponent</td>
              <td>Component for custom row</td>
              <td>No</td>
              <td>None</td>
            </tr>
            <tr>
              <td>onRowClick</td>
              <td>Function</td>
              <td>Function to handle when row is clicked</td>
              <td>No</td>
              <td>None</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="mb-4">
      <div id="NoDataRow">
        <h4 class="blue-title">NoDataRow</h4>
        <p>Sets the row for a mobile grid.</p>
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
              <td><a href="https://github.com/unosquare/tubular/tubular-common#ColumnModel">ColumnModel[]</a></td>
              <td>Columns </td>
              <td>No</td>
              <td>None</td>
            </tr>
            <tr>
              <td>styles</td>
              <td>any</td>
              <td>Object to style grid </td>
              <td>No</td>
              <td>None</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="mb-4">
      <div id="OperatorsDropdown">
        <h4 class="blue-title">OperatorsDropdown</h4>
        <p>
          Custom dropdown showing the different operators used to filter data on a column.
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
              <td>activeColumn</td>
              <td><a href="https://github.com/unosquare/tubular/tubular-common#ColumnModel">ColumnModel</a></td>
              <td>Active column of the grid</td>
              <td>No</td>
              <td>None</td>
            </tr>
            <tr>
              <td>handleFilterChange</td>
              <td>Function</td>
              <td>Function that controls the change of the grid rendering</td>
              <td>No</td>
              <td>None</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="mb-4">
      <div id="Paginator">
        <h4 class="blue-title">Paginator</h4>
        <p>
          Paginator component to handle when grid contains tpp much data
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
              <td>tbTableInstance</td>
              <td>ITbTableInstance</td>
              <td>Instance of a table component</td>
              <td>No</td>
              <td>None</td>
            </tr>
            <tr>
              <td>rowsPerPageOptions</td>
              <td>number[]</td>
              <td>Number of rows for each page of the grid</td>
              <td>No</td>
              <td>None</td>
            </tr>
            <tr>
              <td>advancePagination</td>
              <td>boolean</td>
              <td>Checks if pagination does advanced</td>
              <td>No</td>
              <td>None</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="mb-4">
      <div id="SearchTextInput">
        <h4 class="blue-title">SearchTextInput</h4>
        <p>
          Custom search input for the grid.
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
              <td>searchText</td>
              <td>string</td>
              <td>Search text to query data on Grid</td>
              <td>No</td>
              <td>None</td>
            </tr>
            <tr>
              <td>updateSearchText</td>
              <td>Function</td>
              <td>Function that controls the change of the input</td>
              <td>No</td>
              <td>None</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="mb-4">
      <div id="TbList">
        <h4 class="blue-title">TbList</h4>
        <p>
          Paginator component to handle when grid contains tpp much data
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
              <td>tbTableInstance</td>
              <td>ITbTableInstance</td>
              <td>Instance of a table component</td>
              <td>No</td>
              <td>None</td>
            </tr>
            <tr>
              <td>rowsPerPageOptions</td>
              <td>number[]</td>
              <td>Number of rows for each page of the grid</td>
              <td>No</td>
              <td>None</td>
            </tr>
            <tr>
              <td>advancePagination</td>
              <td>boolean</td>
              <td>Checks if pagination does advanced</td>
              <td>No</td>
              <td>None</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <p>Example of the Advance Pagination actions.</p>
        <code>
          <pre>
            import { DataGridTable, ToolbarOptions, TbRowProps } from "tubular-react";
            const CustomTbRow: React.FunctionComponent = ({
              row,
            }: TbRowProps) => (
              return (
                <>
                  {getErrorMessage && (
                    < Snackbar
                      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                      style={{ paddingTop: '10px' }}
                      open={true}
                      ContentProps={{ 'aria-describedby': 'message-id' }}
                      message={< span id="message-id">{getErrorMessage}< /span>}
                    />
                  )}
                  < Typography style={{ margin: '25px', marginBottom: '10px' }} variant="h4">
                    No card grid!
                  < /Typography>
                  < Table>
                    < TableHead>
                      < TableRow>
                        < Paginator
                          tbTableInstance={tbTableInstance}
                          rowsPerPageOptions={null}
                          advancePagination={false}
                        />
                      < /TableRow>
                    < /TableHead>
                  < /Table>
                  < DataGridTable
                    tbTableInstance={tbTableInstance}
                    rowComponent={CustomTbRow}
                    footerComponent={tbFooter}
                    onRowClick={onRowClick}
                  />
                </>
              );
            };
          </pre>
        </code>
        <a class="nav-link link-blue button" style="width:max-content!important" onclick="convert(this, 'remotedatagrid-rowcomponent-example-j9h69');">Open CodeSandbox</a>
      </div>
    </div>
    <div class="mb-4">
      <div id="TbListItem">
        <h4 class="blue-title">TbListItem</h4>
        <p>
          Paginator component to handle when grid contains tpp much data
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
              <td>tbTableInstance</td>
              <td>ITbTableInstance</td>
              <td>Instance of a table component</td>
              <td>No</td>
              <td>None</td>
            </tr>
            <tr>
              <td>rowsPerPageOptions</td>
              <td>number[]</td>
              <td>Number of rows for each page of the grid</td>
              <td>No</td>
              <td>None</td>
            </tr>
            <tr>
              <td>advancePagination</td>
              <td>boolean</td>
              <td>Checks if pagination does advanced</td>
              <td>No</td>
              <td>None</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="mb-4">
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
              <td><a href="https://github.com/unosquare/tubular/tubular-common#ColumnModel">ColumnModel[]</a></td>
              <td>Columns to be rendered on the row</td>
              <td>No</td>
              <td>None</td>
            </tr>
            <tr>
              <td>onRowClick</td>
              <td>Function</td>
              <td>Function to handle the click event over a grid's row - Takes a row object as parameter</td>
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
        <a class="nav-link link-blue button" style="width:max-content!important" onclick="convert(this, 'remotedatagrid-mobilebreakpointwidthwidth-example-lumcz');">Open CodeSandbox</a>
      </div>
    </div>
    <div class="mb-4">
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
              <td><a href="https://github.com/unosquare/tubular/tubular-common#ColumnModel">ColumnModel[]</a></td>
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
        <a class="nav-link link-blue button" style="width:max-content!important" onclick="convert(this, 'remotedatagrid-rowcomponent-example-j9h69');">Open CodeSandbox</a>
      </div>
    </div>
  </div>
  <div class="col-2 toc d-none d-lg-block">
    <ul>
      <li><p class="navbar-brand pl-3">Table of Content</p></li>
      <li><a class="nav-link" href="#AdvancePaginationActions">AdvancedPaginationActions</a></li>
      <li><a class="nav-link" href="#DataGrid">DataGrid</a></li>
      <li><a class="nav-link" href="#DataGridCard">DataGridCard</a></li>
      <li><a class="nav-link" href="#DataGridTable">DataGridTable</a></li>
      <li><a class="nav-link" href="#DialogModal">DialogModal</a></li>
      <li><a class="nav-link" href="#ExportButton">ExportButton</a></li>
      <li><a class="nav-link" href="#GridBody">GridBody</a></li>
      <li><a class="nav-link" href="#GridHeader">GridHeader</a></li>
      <li><a class="nav-link" href="#GridHeaderCell">GridHeaderCell</a></li>
      <li><a class="nav-link" href="#GridToolbar">GridToolbar</a></li>
      <li><a class="nav-link" href="#MasterDetailRow">MasterDetailRow</a></li>
      <li><a class="nav-link" href="#MobileDataGridTable">MobileDataGridTable</a></li>
      <li><a class="nav-link" href="#NoDataRow">NoDataRow</a></li>
      <li><a class="nav-link" href="#OperatorsDropdown">OperatorsDropdown</a></li>
      <li><a class="nav-link" href="#Paginator">Paginator</a></li>
      <li><a class="nav-link" href="#SearchTextInput">SearchTextInput</a></li>
      <li><a class="nav-link" href="#TbList">TbList</a></li>
      <li><a class="nav-link" href="#TbListItem">TbListItem</a></li>
      <li><a class="nav-link" href="#TbMobileRow">TbMobileRow</a></li>
      <li><a class="nav-link" href="#TbRow">TbRow</a></li>
    </ul>
  </div>
</div>
