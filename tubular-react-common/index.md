---
layout: default
title: "Tubular React Common functions and hooks | tubular-react-common"
description: "Check how to improve your CRUD views with amazing webcontrols from Unosquare"
---

<div class="container content-home d-flex flex-row">
  <div class="col-10 p-0">
    <div class="d-flex flex-row space-between">
      <h2>tubular react common</h2>
      <a href="https://www.npmjs.com/package/tubular-react-common" class="first-icon">
        <img class="npm-icon" src="/assets/npm.svg" alt="uno-react npm" title="uno-react npm"/>
      </a>
      <a href="https://github.com/unosquare/tubular-react-common">
        <img class="github-icon" src="/assets/github.png" alt="uno-react Github Repo" title="uno-react Github Repo"/>
      </a>
    </div>
    <p>Tubular React Common functions and hooks.</p>
    <div class="mb-4">
      <div id="useGridRefresh">
        <h4 class="blue-title">useGridRefresh</h4>
        <p>
          useGridRefresh contains a state hook conformed by a number that initaly is zero, 
          and returns the number and a function that adds one to the number each time that the the hook is executed
        </p>
        <h6>PARAMETERS</h6>
        <p>No parameters</p>
        <h6>RETURN</h6>
        <p>
          Number - Number of refreshings executed over the grid - Initial value: 0.
        </p>
        <p>
          Function - That adds another count whenever grid is refreshed.
        </p>
      </div>
    </div>
```tsx
{% raw %}
import React from "react";
import { useGridRefresh } from "tubular-react-common";
const UseTubularExample = () => {
  const [refresh, forceRefresh] = useGridRefresh();
  const forceGridRefresh = () => {
    setTimeout(() => {
      forceRefresh();
    }, 8000);
  };
  return (
    <>
      <button onClick={() => forceGridRefresh()}>Force Refresh</button>
      <div
        id="loader"
      />
      <DataTable
        gridName="tbTable"
        columns={columns}
        dataSource="https://tubular.azurewebsites.net/api/orders/paged"
        deps={[refresh]}
      />
    </>
  );
};
export default UseTubularExample;
{% endraw %}
```
<button class="nav-link link-blue" onclick="convert(this, 'usegridrefresh-hook-example-tmgf2');">Open CodeSanbox</button>
    <div class="mb-4">
      <div id="useMasterDetails">
        <h4 class="blue-title">useMasterDetails</h4>
        <p>
          useMasterDetails contains a state hook conformed by a boolean, and returns 
          the boolean and a function to change the boolean to the opposite value.
        </p>
        <h6>PARAMETERS</h6>
        <p>
          No parameters
        </p>
        <h6>RETURN</h6>
        <p>
          Boolean - Flag to toggle use of master details.
        </p>
        <p>
          Function - Function to toggle the value of the flag.
        </p>
      </div>
    </div>
```tsx
{% raw %}
import React from "react";
import "./styles.css";
import { useMasterDetails } from "tubular-react-common";
const MasterDetailRow = ({ columns, row, index }) => {
  const [open, openDetails] = useMasterDetails();
  const openMasterDetails = () => {
    openDetails();
  };
  return (
    <>
      <tr key={index}>
        <td role="row" key={row.OrderID}>
          <span style={{ paddingRight: "5px" }}>
            Order {row[columns[0].name]}
          </span>
          <button onClick={openMasterDetails}>Show details</button>
        </td>
      </tr>
      {open && (
        <tr key={index}>
          {columns
            .filter(col => col.visible)
            .map(col => {
              return (
                <td role="cell" key={col.name}>
                  {row[col.name]}
                </td>
              );
            })}
        </tr>
      )}
    </>
  );
};
export default MasterDetailRow;
{% endraw %}
```
<button class="nav-link link-blue" onclick="convert(this, 'usemasterdetails-hook-example-sjzwo');">Open CodeSanbox</button>
    <div class="mb-4">
      <div id="useTbList">
        <h4 class="blue-title">useTbList</h4>
        <p>
          This hook handles the process of getting a external resource like a fetch or reading a file,
          and prevent updating the react state if the component is unmounted before the resource is loaded.
        </p>
        <h6>PARAMETERS</h6>
        <table class="table table-striped w-100 mt-2">
          <thead>
            <tr>
              <th scope="col">Type</th>
              <th scope="col">Description</th>
              <th scope="col">Optional</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Function</td>
              <td>The function that will get the data.</td>
              <td>No</td>
            </tr>
            <tr>
              <td>Object</td>
              <td>Initial value or initial model.</td>
              <td>No</td>
            </tr>
            <tr>
              <td>Array</td>
              <td>An array of variables that the effect depends on.</td>
              <td>No</td>
            </tr>
          </tbody>
        </table>
        <h6>RETURN</h6>
        <p>
          Object - The value that is returned by the effect function when the data has been loaded, otherwise the initialValue.
        </p>
        <p>
          Boolean - A flag that indicates if the data has been fetched or not.
        </p>
      </div>
    </div>
```tsx
{% raw %}
import * as React from "react";
import Button from "@material-ui/core/Button";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { useTbList } from "tubular-react-common";
const UseTbListExample: React.FunctionComponent<any> = () => {
  const tbList = useTbList(
    columns,
    "https://tubular.azurewebsites.net/api/orders/paged"
  );
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const sortEvent = columnName => tbList.api.sortByColumn(columnName);
  return (
    <div className="root" style={{ width: 200, height: 500 }}>
      <div>
        <Button>Sort by</Button>
        <Button
          color="primary"
          size="small"
          onClick={handleClick}
        >
          <ArrowDropDownIcon />
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted={true}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleColumnSelect("OrderID")}>OrderID</MenuItem>
          <MenuItem onClick={handleColumnSelect("CustomerName")}>
            CustomerName
          </MenuItem>
          <MenuItem onClick={handleColumnSelect("ShipperCity")}>
            ShipperCity
          </MenuItem>
        </Menu>
      </div>
      <div style={{ width: "250px", height: "100%" }}>
        <TbList
          tbInstance={tbList}
          listItemComponent={MyListItem}
          onItemClick={rowClick}
        />
      </div>
    </div>
  );
};
export default UseTbListExample;
{% endraw %}
```
<button class="nav-link link-blue" onclick="convert(this, 'usetblistexample-sort-by-z36pr');">Open CodeSanbox</button>
    <div class="mb-4">
      <div id="useTbTable">
        <h4 class="blue-title">useTbTable</h4>
        <p>
          useTbTable hook returns a tubular table instance conformer by a tubular API that returns 
          a set of functions that you can execute over your source data and a tubular state with 
          all the tubular properties, this allows manipulating all the tubular features, 
          performing changes in our tubular instance.
        </p>
        <h6>PARAMETERS</h6>
        <table class="table table-striped w-100 mt-2">
          <thead>
            <tr>
              <th scope="col">Type</th>
              <th scope="col">Description</th>
              <th scope="col">Optional</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Array</td>
              <td>Array with the column model description.</td>
              <td>No</td>
            </tr>
            <tr>
              <td>Object</td>
              <td>The source of data.</td>
              <td>No</td>
            </tr>
            <tr>
              <td>Object</td>
              <td>
                Options that you can set up if you want 
                a particular behavior on the grid.
                If you don’t send them, the hook creates 
                them with default values.
              </td>
              <td>Yes</td>
            </tr>
          </tbody>
        </table>
        <h6>RETURN</h6>
        <p>
          Object - A Tubular state with all the tubular properties.
          Function - A Tubular instance conformer that returns a set of functions to execute over your source data.
        </p>
    </div>
```tsx
{% raw %}
import React from "react";
import "./styles.css";
import { useTbTable } from "tubular-react-common";
import columns from "./columns";
import localData from "./localData";
const UseTbTableExample = () => {
  const { state, api } = useTbTable(columns, localData);
  return (
    <>
      <table>
        <thead>
          <tr role="rowheader">
            {state.columns
              .filter(col => col.visible)
              .map(col => {
                return <th key={col.name}>{col.label}</th>;
              })}
          </tr>
        </thead>
        <tbody>
          {state.data.map((row, index) => {
            return (
              <tr key={index}>
                {state.columns
                  .filter(col => col.visible)
                  .map(col => {
                    return (
                      <td role="cell" key={col.name}>
                        {row[col.name]}
                      </td>
                    );
                  })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <br />
      <div>
        <button onClick={() => api.goToPage(state.page + 1)}>
          Go to next page
        </button>
        <button onClick={() => api.goToPage(state.page - 1)}>
          Go to previous page
        </button>
        <button onClick={() => api.sortColumn("CustomerName")}>
          Sort by Customer Name
        </button>
      </div>
    </>
  );
};
export default UseTbTableExample;
{% endraw %}
```
<button class="nav-link link-blue" onclick="convert(this, 'usetbtable-hook-example-tqtit');">Open CodeSanbox</button>
    <div class="mb-4">
      <div id="useTubular">
        <h4 class="blue-title">useTubular</h4>
        <p>
          This hook allows manipulating all the Tubular features, performing changes in our Tubular instance.
        </p>
        <h6>PARAMETERS</h6>
        <table class="table table-striped w-100 mt-2">
          <thead>
            <tr>
              <th scope="col">Type</th>
              <th scope="col">Description</th>
              <th scope="col">Optional</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Array</td>
              <td>Array with the column model description.</td>
              <td>No</td>
            </tr>
            <tr>
              <td>Object</td>
              <td>The source of data.</td>
              <td>No</td>
            </tr>
            <tr>
              <td>Object</td>
              <td>
                Options that you can set up if you want 
                a particular behavior on the grid.
                If you don’t send them, the hook creates 
                them with default values.
              </td>
              <td>Yes</td>
            </tr>
          </tbody>
        </table>
        <h6>RETURN</h6>
        <p>
          Object - A Tubular state with all the tubular properties.
          Function - A Tubular instance conformer that returns a set of functions to execute over your source data.
        </p>
      </div>
    </div>
```tsx
{% raw %}
import React from "react";
import "./styles.css";
import { useTubular } from "tubular-react-common";
import columns from "./columns";
import localData from "./localData";
const UseTubularExample = () => {
  const { state, api } = useTubular(columns, localData);
  return (
    <>
      <table>
        <thead>
          <tr role="rowheader">
            {state.columns
              .filter(col => col.visible)
              .map(col => {
                return <th key={col.name}>{col.label}</th>;
              })}
          </tr>
        </thead>
        <tbody>
          {state.data.map((row, index) => {
            return (
              <tr key={index}>
                {state.columns
                  .filter(col => col.visible)
                  .map(col => {
                    return (
                      <td role="cell" key={col.name}>
                        {row[col.name]}
                      </td>
                    );
                  })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <br />
      <div>
        <button onClick={() => api.goToPage(state.page + 1)}>
          Go to next page
        </button>
        <button onClick={() => api.goToPage(state.page - 1)}>
          Go to previous page
        </button>
        <button onClick={() => api.sortColumn("CustomerName")}>
          Sort by Customer Name
        </button>
      </div>
    </>
  );
};
export default UseTubularExample;
{% endraw %}
```
<button class="nav-link link-blue" onclick="convert(this, 'usetubular-hook-example-otdbu');">Open CodeSanbox</button>
  </div>
  <div class="col-2 toc">
    <ul>
      <li>
        <p class="navbar-brand pl-3">Table of Content</p>
      </li>
      <li>
        <a class="nav-link" href="#useGridRefresh">useGridRefresh</a>
      </li>
      <li>
        <a class="nav-link" href="#useMasterDetails">useMasterDetails</a>
      </li>
      <li>
        <a class="nav-link" href="#useTbList">useTbList</a>
      </li>
      <li>
        <a class="nav-link" href="#useTbTable">useTbTable</a>
      </li>
      <li>
        <a class="nav-link" href="#useTubular">useTubular</a>
      </li>
    </ul>
  </div>
</div>
