---
layout: page
title: "Tubular Common Models and Data Transformer | tubular-common"
description: "Check out uno-react, a Typescript library with common functions and hooks for React"
---
<div class="container content-home d-flex flex-row">
  <div class="col-lg-10 col-xl-10 col-sm-12 col-md-12 p-0">
    <div class="d-flex flex-row space-between">
      <h2>tubular-common</h2>
      <a href="https://www.npmjs.com/package/tubular-react" class="first-icon">
        <img class="npm-icon" src="/assets/npm.svg" alt="tubular-react npm" title="tubular-react npm"/>
      </a>
      <a href="https://github.com/unosquare/tubular-react">
        <img class="github-icon" src="/assets/github.png" alt="tubular-react Github Repo" title="tubular-react Github Repo"/>
      </a>
    </div>
    <p>tubular-common Models and Data Transformer</p>
    <div class="mb-4">
      <div id="ShallowHttpClient">
        <h4 class="blue-title">ShallowHttpClient</h4>
        <p>
          Request to server
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
              <td>request</td>
              <td>string</td>
              <td>Server URL to fetch data</td>
              <td>No</td>
              <td>None</td>
            </tr>
            <tr>
              <td>handler</td>
              <td>FetchHandler</td>
              <td>Hnadler for fetching operations</td>
              <td>No</td>
              <td>None</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="mb-4">
      <div id="TubularHttpClient">
        <h4 class="blue-title">TubularHttpClient</h4>
        <p>
          Handle requests for Tubular grid.
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
              <td>request</td>
              <td>
                <ul style="list-style-type:disc;">
                  <li>string</li>
                  <li>Request</li>
                  <li>TubularHttpClientAbstract</li>
                </ul>
              </td>
              <td>Request performed to fetch data from/to server</td>
              <td>No</td>
              <td>None</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="mb-4">
      <div id="TubularHttpClientAbstract">
        <h4 class="blue-title">TubularHttpClientAbstract</h4>
        <p>
          Interface to create Tubular requests.
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
              <td>request</td>
              <td>
                <ul style="list-style-type:disc">
                  <li>string</li>
                  <li>Request</li>
                </ul>
              </td>
              <td>Fetch request performed by the class</td>
              <td>No</td>
              <td>None</td>
            </tr>
            <tr>
              <td>fetch</td>
              <td>Function</td>
              <td>Fetch function to connect to server</td>
              <td>No</td>
              <td>None</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="mb-4">
      <div id="ColumnModel">
        <h4 class="blue-title">ColumnModel</h4>
        <p>
          Model used to describe columns for the data grid
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
              <td>aggregate</td>
              <td>AggregateFunctions</td>
              <td>Functions used to operate on the column's data </td>
              <td>No</td>
              <td>None</td>
            </tr>
            <tr>
              <td>dataType</td>
              <td>ColumnDataType</td>
              <td>Type for the data on this column</td>
              <td>No</td>
              <td>None</td>
            </tr>
            <tr>
              <td>filter</td>
              <td>
                <ul>
                  <li>FilterWrapper</li>
                  <li>Object</li>
                </ul>
              </td>
              <td>Filter of the column</td>
              <td>No</td>
              <td>None</td>
            </tr>
            <tr>
              <td>filterable</td>
              <td>boolean</td>
              <td>Defines if column can have applicable filters on its data</td>
              <td>Yes</td>
              <td>None</td>
            </tr>
            <tr>
              <td>isKey</td>
              <td>boolean</td>
              <td>Defines if the data of this column can be used as a DB key</td>
              <td>Yes</td>
              <td>None</td>
            </tr>
            <tr>
              <td>label</td>
              <td>string</td>
              <td>Label shown on the header of the grid</td>
              <td>Yes</td>
              <td>None</td>
            </tr>
            <tr>
              <td>name</td>
              <td>string</td>
              <td>Name of the column</td>
              <td>Yes</td>
              <td>None</td>
            </tr>
            <tr>
              <td>searchable</td>
              <td>boolean</td>
              <td>Defines if column data can be searched on the SearchTextInput component of the grid</td>
              <td>Yes</td>
              <td>None</td>
            </tr>
            <tr>
              <td>sortDirection</td>
              <td>ColumnSortDirection</td>
              <td>Defines if data should be sorted in a ascending or descending order</td>
              <td>Yes</td>
              <td>None</td>
            </tr>
            <tr>
              <td>sortOrder</td>
              <td>number</td>
              <td></td>
              <td>Yes</td>
              <td>None</td>
            </tr>
            <tr>
              <td>sortable</td>
              <td>boolean</td>
              <td>Defines if the column can be used to sort data of the grid</td>
              <td>Yes</td>
              <td>None</td>
            </tr>
            <tr>
              <td>visible</td>
              <td>boolean</td>
              <td>Defines if the Column is visible on the Grid</td>
              <td>Yes</td>
              <td>None</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="mb-4">
      <div id="GridRequest">
        <h4 class="blue-title">GridRequest</h4>
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
              <td>columns</td>
              <td><a href="https://github.com/unosquare/tubular/tubular-common#ColumnModel">ColumnModel[]</a></td>
              <td>Columns data that will hold the request result</td>
              <td>No</td>
              <td>None</td>
            </tr>
            <tr>
              <td>counter</td>
              <td>number</td>
              <td>Number of registries to be input on the grid</td>
              <td>No</td>
              <td>None</td>
            </tr>
            <tr>
              <td>search</td>
              <td>SearchOptions</td>
              <td>Options used to search for data on Grid</td>
              <td>No</td>
              <td>None</td>
            </tr>
            <tr>
              <td>skip</td>
              <td>number</td>
              <td>Number of skipped registries</td>
              <td>No</td>
              <td>None</td>
            </tr>
            <tr>
              <td>take</td>
              <td>number</td>
              <td>Total of items taken on request</td>
              <td>No</td>
              <td>None</td>
            </tr>
            <tr>
              <td>timezoneOffset</td>
              <td>number</td>
              <td>Offset depending on local time</td>
              <td>No</td>
              <td>None</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="mb-4">
      <div id="DataGridStorage">
        <h4 class="blue-title">DataGridStorage</h4>
        <p>
          Define an object to store grid data.
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
              <td>setTextSearch</td>
              <td>Function</td>
              <td>Set the options to search data on grid</td>
              <td>Yes</td>
              <td>None</td>
            </tr>
            <tr>
              <td>setPage</td>
              <td>Function</td>
              <td>Set columns for the grid to store</td>
              <td>No</td>
              <td>None</td>
            </tr>
            <tr>
              <td>setColumns</td>
              <td>Function</td>
              <td>Set columns</td>
              <td>No</td>
              <td>None</td>
            </tr>
            <tr>
              <td>getTextSearch</td>
              <td>Function</td>
              <td>Get textsearch result</td>
              <td>Yes</td>
              <td>None</td>
            </tr>
            <tr>
              <td>getPage</td>
              <td>Function</td>
              <td>Get the page</td>
              <td>Yes</td>
              <td>None</td>
            </tr>
            <tr>
              <td>getColumns</td>
              <td>Function</td>
              <td>Function that returns the grid for storing</td>
              <td>Yes</td>
              <td>None</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="mb-4">
      <div id="LocalStorage">
        <h4 class="blue-title">LocalStorage</h4>
        <p>Stores the data of the grid on the local storage. Implements DataGridStorage interface</p>
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
              <td>setGridName</td>
              <td>ITbTableInstance</td>
              <td>Set the current grid for localStorage use</td>
              <td>Yes</td>
              <td>None</td>
            </tr>
            <tr>
              <td>setTextSearch</td>
              <td>React.ReactElement</td>
              <td>Set a localStorage reference to store the search text result</td>
              <td>No</td>
              <td>None</td>
            </tr>
            <tr>
              <td>setPage</td>
              <td>ITbTableInstance</td>
              <td>Set a localStorage reference to store the page</td>
              <td>Yes</td>
              <td>None</td>
            </tr>
            <tr>
              <td>setColumns</td>
              <td>Function</td>
              <td>Set a localStorage reference to store the columns</td>
              <td>No</td>
              <td>None</td>
            </tr>
            <tr>
              <td>getTextSearch</td>
              <td>Function</td>
              <td>Returns the localStorage reference </td>
              <td>Yes</td>
              <td>None</td>
            </tr>
            <tr>
              <td>getPage</td>
              <td>Function</td>
              <td>Returns the localStorage reference page</td>
              <td>No</td>
              <td>None</td>
            </tr>
            <tr>
              <td>getColumns</td>
              <td>Function</td>
              <td>Returns localStorage reference to the current page</td>
              <td>No</td>
              <td>None</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="mb-4">
      <div id="NullStorage">
        <h4 class="blue-title">NullStorage</h4>
        <p>Implements DataGridStorage with null results.</p>
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
