---
layout: page
title: "Tubular Common Models and Data Transformer | tubular-common"
description: "Utilize Unosquare's tool to model and transform data with tubular-common"
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
    <p>
      Tubular Common provides TypeScript and Javascript models and data transformer 
      to use any Tubular DataGrid component with an array of Javascript objects.
    </p>
    <div class="mb-4">
      <div id="AggregateFunctions">
        <h4 class="blue-title">AggregateFunctions</h4>
        <p>Functions used operate with the column data</p>
        <h6>PROPERTIES</h6>
        <table class="table table-striped w-100 mt-2">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>None</td>
              <td>No functions added to the column</td>
            </tr>
            <tr>
              <td>Sum</td>
              <td>Sums data on column</td>
            </tr>
            <tr>
              <td>Average</td>
              <td>Calculates the average of the column data entries</td>
            </tr>
            <tr>
              <td>Count</td>
              <td>Counts the number of entries in a column</td>
            </tr>
            <tr>
              <td>DistinctCount</td>
              <td>boolean</td>
            </tr>
            <tr>
              <td>Max</td>
              <td>Gets the maximum value of the column's data</td>
            </tr>
            <tr>
              <td>Min</td>
              <td>Gets the minimum value of the column's data</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <hr class="separator"/>
    <div class="mb-4">
      <div id="ColumnDataType">
        <h4 class="blue-title">ColumnDataType</h4>
        <p>Specifies the data type of the entries on a column</p>
        <h6>PROPERTIES</h6>
        <table class="table table-striped w-100 mt-2">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>String</td>
              <td>Defines the column's data as string values</td>
            </tr>
            <tr>
              <td>Numeric</td>
              <td>Defines the column's data as numbers</td>
            </tr>
            <tr>
              <td>Boolean</td>
              <td>Defines the column's data as boolean</td>
            </tr>
            <tr>
              <td>Date</td>
              <td>Defines the column's data as date objects</td>
            </tr>
            <tr>
              <td>DateTime</td>
              <td>Defines the column's data as date and time objects</td>
            </tr>
            <tr>
              <td>DateTimeUtc</td>
              <td>Defines the column's data as Universal Time date time objects</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <hr class="separator"/>
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
    <hr class="separator"/>
    <div class="mb-4">
      <div id="CompareOperators">
        <h4 class="blue-title">CompareOperators</h4>
        <p>Functions used </p>
        <h6>PROPERTIES</h6>
        <table class="table table-striped w-100 mt-2">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>None</td>
              <td>No operators added</td>
            </tr>
            <tr>
              <td>Auto</td>
              <td>ColumnDataType</td>
            </tr>
            <tr>
              <td>Equals</td>
              <td>Check if two values are equal</td>
            </tr>
            <tr>
              <td>NotEquals</td>
              <td>Check if two values are not equal</td>
            </tr>
            <tr>
              <td>Contains</td>
              <td>Check if an object value contains a property</td>
            </tr>
            <tr>
              <td>StartsWith</td>
              <td>Checks if a string value starts with a given character</td>
            </tr>
            <tr>
              <td>EndsWith</td>
              <td>Checks if a string value ends with a given character</td>
            </tr>
            <tr>
              <td>Gte</td>
              <td>Checks if a value is greater than or equal to another value</td>
            </tr>
            <tr>
              <td>Gt</td>
              <td>Checks if a value is greater than another value</td>
            </tr>
            <tr>
              <td>Lte</td>
              <td>Checks if a value is lesser than or equal to another value</td>
            </tr>
            <tr>
              <td>Lt</td>
              <td>Checks if a value is lesser than another value</td>
            </tr>
            <tr>
              <td>Between</td>
              <td>Checks if a value is between two other values</td>
            </tr>
            <tr>
              <td>NotContains</td>
              <td>Checks if an object doesn't contain a property</td>
            </tr>
            <tr>
              <td>NotStartsWith</td>
              <td>Checks if a string doesn't start with a given character</td>
            </tr>
            <tr>
              <td>NotEndsWith</td>
              <td>Checks if a string doesn't end with a given character</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <hr class="separator"/>
    <div class="mb-4">
      <div id="ColumnSortDirection">
        <h4 class="blue-title">ColumnSortDirection</h4>
        <p>Directions in which the data is sorted</p>
        <h6>PROPERTIES</h6>
        <table class="table table-striped w-100 mt-2">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>None</td>
              <td>No sorting</td>
            </tr>
            <tr>
              <td>Ascending</td>
              <td>Sort in an ascending order</td>
            </tr>
            <tr>
              <td>Descending</td>
              <td>Sort in a descending order</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <hr class="separator"/>
    <div class="mb-4">
      <div id="DataGridStorage">
        <h4 class="blue-title">DataGridStorage</h4>
        <p>Define an object to store grid data.</p>
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
    <hr class="separator"/>
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
              <td><a class="nav-link" href="#ColumnModel">ColumnModel[]</a></td>
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
              <td><a href="#SearchOptions">SearchOptions</a></td>
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
    <hr class="separator"/>
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
              <td>string</td>
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
    <hr class="separator"/>
    <div class="mb-4">
      <div id="NullStorage">
        <h4 class="blue-title">NullStorage</h4>
        <p>Implements DataGridStorage interface with null results.</p>
      </div>
    </div>
    <hr class="separator"/>
    <div class="mb-4">
      <div id="SearchOptions">
        <h4 class="blue-title">SearchOptions</h4>
        <p>Options to search in Grid</p>
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
              <td>operator</td>
              <td>string</td>
              <td>SQL operator to search on DB</td>
              <td>No</td>
              <td>None</td>
            </tr>
            <tr>
              <td>text</td>
              <td>string</td>
              <td>Text input to search through data</td>
              <td>Yes</td>
              <td>None</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <hr class="separator"/>
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
              <td>Handler for fetching operations</td>
              <td>No</td>
              <td>None</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <hr class="separator"/>
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
    <hr class="separator"/>
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
  </div>
  <div class="col-2 toc d-none d-lg-block">
    <ul>
      <li><p class="navbar-brand pl-3">Table of Content</p></li>
      <li><a class="nav-link" href="#AggregateFunctions">AggregateFunctions</a></li>
      <li><a class="nav-link" href="#ColumnDataType">ColumnDataType</a></li>
      <li><a class="nav-link" href="#ColumnModel">ColumnModel</a></li>
      <li><a class="nav-link" href="#CompareOperators">CompareOperators</a></li>
      <li><a class="nav-link" href="#ColumnSortDirection">ColumnSortDirection</a></li>
      <li><a class="nav-link" href="#DataGridStorage">DataGridStorage</a></li>
      <li><a class="nav-link" href="#GridRequest">GridRequest</a></li>
      <li><a class="nav-link" href="#LocalStorage">LocalStorage</a></li>
      <li><a class="nav-link" href="#NullStorage">NullStorage</a></li>
      <li><a class="nav-link" href="#SearchOptions">SearchOptions</a></li>
      <li><a class="nav-link" href="#ShallowHttpClient">ShallowHttpClient</a></li>
      <li><a class="nav-link" href="#TubularHttpClient">TubularHttpClient</a></li>
      <li><a class="nav-link" href="#TubularHttpClientAbstract">TubularHttpClientAbstract</a></li>
    </ul>
  </div>
</div>
