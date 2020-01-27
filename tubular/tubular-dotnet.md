---
layout: page
title: "Tubular .NET Library | tubular-dotnet"
description: "Create REST service and use it with any WebApi library"
---
<div class="container content-home d-flex flex-row">
  <div class="col-lg-10 col-xl-10 col-sm-12 col-md-12 p-0">
    <div class="d-flex flex-row space-between">
      <h2>tubular-dotnet</h2>
      <a href="https://github.com/unosquare/tubular-dotnet">
        <img class="github-icon" src="/assets/github.png" alt="tubular-dotnet Github Repo" title="tubular-dotnet Github Repo"/>
      </a>
    </div>
    <p>
      Tubular provides .NET Framework and .NET Core Library to create REST service 
      to use with Tubular Angular Components easily with any WebApi library (ASP.NET Web API for example).
    </p>
    <div class="mb-4">
      <div id="Installation">
        <h4 class="blue-title">Installation</h4>
        <p>Install the latest NuGet from Visual Studio's Package Manager</p>
        <code>
          <pre class="pre-block">
            PM> Install-Package Tubular.ServerSide
          </pre>
        </code>
      </div>
    </div>
    <div class="mb-4">
      <div id="GlobalSettings">
        <p>
          You can access global settings by using the static object 
          TubularDefaultSettings and setup common behavior in Tubular.
        </p>
        <h6>SETTINGS</h6>
        <table class="table table-striped w-100 mt-2">
          <thead>
            <tr>
              <th>Setting</th>
              <th>Default value</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>AdjustTimezoneOffset</td>
              <td>true</td>
              <td>
                Determines if the DateTime from a Response should adjust 
                the timezone offset send by within the Request.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="mb-4">
      <div id="Common">
        <h4 class="blue-title">Common</h4>
        <p>Types for the .NET library.</p>
        <h6>PROPERTIES</h6>
        <table class="table table-striped w-100 mt-2">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Values</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>SortDirection</td>
              <td>Direction to sort data on a grid</td>
              <td>
                <ul style="list-style-type:disc">
                  <li>None</li>
                  <li>Ascending</li>
                  <li>Descending</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>CompareOperators</td>
              <td>Operators to compare data</td>
              <td>
                <ul style="list-style-type:disc">
                  <li>None</li>
                  <li>Auto</li>
                  <li>Equals</li>
                  <li>NotEquals</li>
                  <li>Contains</li>
                  <li>StartsWith</li>
                  <li>EndsWith</li>
                  <li>Gte - Greater Than or Equal</li>
                  <li>Gt</li>
                  <li>Lte</li>
                  <li>Lt</li>
                  <li>Multiple</li>
                  <li>Between</li>
                  <li>NotContains</li>
                  <li>NotStartsWith</li>
                  <li>NotEndsWith</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>DataType</td>
              <td>Types for the data of a grid column</td>
              <td>
                <ul style="list-style-type:disc">
                  <li>String</li>
                  <li>Numeric</li>
                  <li>DateTime</li>
                  <li>Date</li>
                  <li>Boolean</li>
                  <li>DateTimeUtc</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>AggregationFunction</td>
              <td>Functions </td>
              <td>
                <ul style="list-style-type:disc">
                  <li>None</li>
                  <li>Sum</li>
                  <li>Average</li>
                  <li>Count</li>
                  <li>DistinctCount</li>
                  <li>Max</li>
                  <li>Min</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="mb-4">
      <div id="Extensions">
        <h4 class="blue-title">Extensions</h4>
        <p>Extension methods for tubular.</p>
        <h6>CONSTANTS</h6>
        <table class="table table-striped w-100 mt-2">
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>DateTimeFormat</td>
              <td>string</td>
              <td>Format for date and time strings</td>
            </tr>
            <tr>
              <td>DateFormat</td>
              <td>string</td>
              <td>Format for date strings</td>
            </tr>
          </tbody>
        </table>
        <h6>METHODS</h6>
        <table class="table table-striped w-100 mt-2">
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Description</th>
              <th>Parameters</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>AdjustTimeZone</td>
              <td>object</td>
              <td>Adjust a timezone data in an object</td>
              <td>
                <ul>
                  <li>data</li>
                  <li>timezoneOffset</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>fetch</td>
              <td>GridDataResponse</td>
              <td>
                Generates a response using a request and a queryable source, 
                similar to a DataSet in Entity Framework
              </td>
              <td>
                <ul>
                  <li>request</li>
                  <li>dataSource</li>
                  <li>preProcessSubset</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>MapColumnsToProperties</td>
              <td>Dictionary< GridColumn, PropertyInfo ></td>
              <td>Maps data from columns to an object's properties</td>
              <td>
                <ul>
                  <li>columns</li>
                  <li>properties</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>CreateGridPayload</td>
              <td>List< List< object > ></td>
              <td>Creates a payload for a Tubular grid</td>
              <td>
                <ul>
                  <li>subset</li>
                  <li>columnMap</li>
                  <li>initialCapacity</li>
                  <li>timeZoneOffset</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>AdjustTimeZoneForProperty</td>
              <td>void</td>
              <td>Adjusts time zone for a property</td>
              <td>
                <ul>
                  <li>data</li>
                  <li>timeZoneOffset</li>
                  <li>prop</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>AggregateSubset</td>
              <td>Dictionary< string, object ></td>
              <td>Returns a dictionary with a new subset</td>
              <td>
                <ul>
                  <li>columns</li>
                  <li>subset</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>GetSqlOperator</td>
              <td>string - nullable</td>
              <td>Return an SQL logical operator</td>
              <td>
                <ul>
                  <li>op</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>FilterResponse</td>
              <td>IQueryable - nullable</td>
              <td></td>
              <td>
                <ul>
                  <li>request</li>
                  <li>subset</li>
                  <li>response</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>FilterColumn</td>
              <td>void</td>
              <td>
                Filters the data of a column using a string
              </td>
              <td>
                <ul>
                  <li>column</li>
                  <li>searchLambda</li>
                  <li>searchParamsArgs</li>
                  <li>isDbQuery</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>GetSearchFilter</td>
              <td>void</td>
              <td></td>
              <td>
                <ul>
                  <li>request</li>
                  <li>isDbQuery</li>
                  <li>searchValue</li>
                  <li>searchLambda</li>
                  <li>searchParamsArgs</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="mb-4">
      <div id="Filter">
        <h4 class="blue-title">Filter</h4>
        <p>Object to be serialized between API and tubular</p>
        <h6>PROPERTIES</h6>
        <table class="table table-striped w-100 mt-2">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Name</td>
              <td>Filter's name</td>
              <td>string</td>
            </tr>
            <tr>
              <td>Text</td>
              <td>Search text</td>
              <td>string</td>
            </tr>
            <tr>
              <td>Argument</td>
              <td>Parameters for the filter search</td>
              <td>string[]</td>
            </tr>
            <tr>
              <td>Operator</td>
              <td>Operator applied by the filter</td>
              <td>CompareOperator</td>
            </tr>
            <tr>
              <td>HasFilter</td>
              <td>Checks if the filter is applied</td>
              <td>bool</td>
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
    <div class="mb-4">
      <div id="LocalStorage">
        <h4 class="blue-title">LocalStorage</h4>
        <p>Stores the data of the grid on the local storage. Implements <b>DataGridStorage</b> interface</p>
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
        <p>Implements <b>DataGridStorage</b> interface with null results.</p>
      </div>
    </div>
  </div>
  <div class="col-2 toc d-none d-lg-block">
    <ul>
      <li><p class="navbar-brand pl-3">Table of Content</p></li>
      <li><a class="nav-link" href="#ShallowHttpClient">ShallowHttpClient</a></li>
      <li><a class="nav-link" href="#TubularHttpClient">TubularHttpClient</a></li>
      <li><a class="nav-link" href="#TubularHttpClientAbstract">TubularHttpClientAbstract</a></li>
      <li><a class="nav-link" href="#ColumnModel">ColumnModel</a></li>
      <li><a class="nav-link" href="#GridRequest">GridRequest</a></li>
      <li><a class="nav-link" href="#DataGridStorage">DataGridStorage</a></li>
      <li><a class="nav-link" href="#LocalStorage">LocalStorage</a></li>
      <li><a class="nav-link" href="#NullStorage">NullStorage</a></li>
    </ul>
  </div>
</div>
