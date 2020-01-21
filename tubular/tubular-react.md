# Tubular React
Tubular-React is a Material-UI table with local or remote data-source. Featuring:
- Define a custom layout for columns and cells using render methods.
- Use a remote or local datasource. Remote datasource use a specific Request and Response format.
- Sort and filter multiple columns.
- Free-text search of string columns.
- Page data. Remote data is paged in the server side.
- Export data to a CSV file.
- Print data.

[![Tubular React - npm](/assets/npm.svg "npm")](https://www.npmjs.com/package/uno-react)
[![Tubular React - GitHub](/assets/github.png "GitHub")](https://github.com/unosquare/uno-react)

## DataGrid
The grid will connect to a remote datasource or have a local datasource depending on what's
passed in the dataSource property.

**PROPERTIES**
<table>
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
      <td>columns</td>
      <td>ColumnModel[]</td>
      <td>Array that defines the type of columns to be rendered on the grid</td>
      <td>No</td>
      <td>None</td>
    </tr>
    <tr>
      <td>dataSource</td>
      <td>
        <ul>
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
      <td>React.ReactElement<DetailComponent></td>
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
      <td>React.FunctionComponent<TbRowProps></td>
      <td>Custom row component</td>
      <td>Yes</td>
      <td>None</td>
    </tr>
    <tr>
      <td>rowMobileComponent</td>
      <td>React.FunctionComponent<TbRowProps></td>
      <td>Custom row component for mobile version</td>
      <td>Yes</td>
      <td>None</td>
    </tr>
    <tr>
      <td>footerComponent</td>
      <td>React.FunctionComponent<any></td>
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

# Examples
### Example of DataGrid with footer component.
```tsx
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import * as React from "react";
import columns from "./columns";
import { DataGrid, ToolbarOptions } from "tubular-react";

const tbFooter = ({ aggregates }: any) => (
  <TableRow>
    <TableCell>Total:</TableCell>
    <TableCell>{aggregates && aggregates.CustomerName}</TableCell>
    <TableCell />
    <TableCell />
    <TableCell />
    <TableCell />
  </TableRow>
);

const RemoteDataGrid: React.FunctionComponent = () => {
  return (
    <DataGrid
      gridName="Tubular-React"
      columns={columns}
      dataSource="https://tubular.azurewebsites.net/api/orders/paged"
      footerComponent={tbFooter}
    />
  );
};

export default RemoteDataGrid;
```
[![Edit RemoteDataGrid -footerComponent example](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/remotedatagrid-footercomponent-example-rr4op?fontsize=14&hidenavigation=1&theme=dark)

### Example of DataGrid with Toolbar options.
```tsx
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import * as React from "react";
import columns from "./columns";
import { DataGrid, ToolbarOptions } from "tubular-react";

const RemoteDataGrid: React.FunctionComponent = () => {
  const toolbarOptions = new ToolbarOptions({
    advancePagination: false,
    bottomPager: false,
    exportButton: false,
    printButton: false,
    searchText: false,
    topPager: false
  });
  return (
    <DataGrid
      gridName="Tubular-React"
      columns={columns}
      dataSource="https://tubular.azurewebsites.net/api/orders/paged"
      toolbarOptions={toolbarOptions}
      footerComponent={tbFooter}
    />
  );
};

export default RemoteDataGrid;
```
[![Edit RemoteDataGrid -footerComponent example](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/remotedatagrid-footercomponent-example-rr4op?fontsize=14&hidenavigation=1&theme=dark)

### Example of DataGrid with custom number of items per page.
``` tsx
import * as React from "react";
import { DataGrid, ToolbarOptions } from "tubular-react";
import columns from "./columns";

const RemoteDataGrid: React.FunctionComponent = () => {
  const toolbarOptions = new ToolbarOptions({
    advancePagination: false,
    bottomPager: false,
    exportButton: false,
    itemsPerPage: 15,
    printButton: false,
    searchText: false,
    topPager: false
  });
  return (
    <DataGrid
      gridName="Tubular-React"
      columns={columns}
      dataSource="https://tubular.azurewebsites.net/api/orders/paged"
      toolbarOptions={toolbarOptions}
    />
  );
};

export default RemoteDataGrid;
```
[![Edit RemoteDataGrid -itemsPerPage example](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/remotedatagrid-itemsperpage-example-ny2k5?fontsize=14&hidenavigation=1&theme=dark)

### Example of DataGrid with onRowClick event.
``` tsx
import * as React from "react";
import { DataGrid } from "tubular-react";
import columns from "./columns";

const RemoteDataGrid: React.FunctionComponent = () => {
  const rowClick = (row: {}) => {
    console.log("You clicked on a row: ", row);
    alert("You clicked on the order Id: " + row.OrderID);
  };
  return (
    <DataGrid
      gridName="Tubular-React"
      columns={columns}
      dataSource="https://tubular.azurewebsites.net/api/orders/paged"
      onRowClick={rowClick}
    />
  );
};

export default RemoteDataGrid;
```
[![Edit RemoteDataGrid -onRowClick example](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/remotedatagrid-onrowclick-example-ulurp?fontsize=14&hidenavigation=1&theme=dark)

### Example of DataGrid with custom row component.
``` tsx
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import * as React from "react";
import columns from "./columns";
import { DataGrid, ToolbarOptions, TbRowProps } from "tubular-react";
import CheckBox from "@material-ui/icons/CheckBox";
import CheckBoxOutlineBlank from "@material-ui/icons/CheckBoxOutlineBlank";
import { formatDate } from "tubular-common";

const CustomTbRow: React.FunctionComponent<TbRowProps> = ({
  row,
  onRowClick
}: TbRowProps) => (
  <TableRow hover={true} key={row.OrderID} onClick={onRowClick}>
    <TableCell padding="default">{row.OrderID} </TableCell>
    <TableCell padding="default">{row.CustomerName} </TableCell>
    <TableCell padding="default">
      {formatDate(row.ShippedDate, "M/d/yyyy h:mm a")}
    </TableCell>
    <TableCell padding="default">{row.ShipperCity}</TableCell>
    <TableCell padding="default" align={"right"}>
      {row.Amount || 0}
    </TableCell>
    <TableCell padding="default">
      {row.IsShipped ? <CheckBox /> : <CheckBoxOutlineBlank />}
    </TableCell>
  </TableRow>
);

const RemoteDataGrid: React.FunctionComponent = () => {

  const rowClick = (row: {}) => {
    console.log("You clicked on a row: ", row);
    alert("You clicked on the order Id: " + row.OrderID);
  };

  return (
    <DataGrid
      gridName="Tubular-React"
      columns={columns}
      dataSource="https://tubular.azurewebsites.net/api/orders/paged"
      rowComponent={CustomTbRow}
      onRowClick={rowClick}
    />
  );
};

export default RemoteDataGrid;
```
[![Edit RemoteDataGrid -rowComponent example](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/remotedatagrid-rowcomponent-example-j9h69?fontsize=14&hidenavigation=1&theme=dark)

### Example of DataGrid with Detail component.
``` tsx
import * as React from "react";
import { DataGrid, DetailBaseComponent, ToolbarOptions } from "tubular-react";
import columns from "./columns";

export interface DetailBaseComponentProps {
  row: any;
}

const DetailComponent: DetailBaseComponent = ({
  row
}: DetailBaseComponentProps) => <>This is a test with the row #{row.OrderID}</>;

const RemoteDataGrid: React.FunctionComponent = () => {
  return (
    <DataGrid
      gridName="Tubular-React"
      columns={columns}
      dataSource="https://tubular.azurewebsites.net/api/orders/paged"
      detailComponent={<DetailComponent />}
    />
  );
};

export default RemoteDataGrid;
```
[![Edit RemoteDataGrid -detailComponent example](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/remotedatagrid-detailcomponent-example-yusvc?fontsize=14&hidenavigation=1&theme=dark)

### Example of DataGrid with MobileResolution breakpoint.
```tsx
import * as React from "react";
import { ToolbarOptions } from "tubular-react";
import { DataGrid } from "tubular-react";
import columns from "./columns";

const mobileBreakpointWidth = 800;

const RemoteDataGrid: React.FunctionComponent = () => {
  const toolbarOptions = new ToolbarOptions({
    advancePagination: false,
    bottomPager: false,
    exportButton: false,
    printButton: false,
    searchText: false,
    topPager: false
  });

  return (
    <>
      <h4>Try to change the resolution...</h4>
      <DataGrid
        gridName="Tubular-React"
        columns={columns}
        dataSource="https://tubular.azurewebsites.net/api/orders/paged"
        toolbarOptions={toolbarOptions}
        mobileBreakpointWidth={mobileBreakpointWidth}
      />
    </>
  );
};

export default RemoteDataGrid;
```
[![Edit RemoteDataGrid -mobileBreakpointWidthWidth example](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/remotedatagrid-mobilebreakpointwidthwidth-example-lumcz?fontsize=14&hidenavigation=1&theme=dark)

### Example of OnError messages on DataGrid.
``` tsx
import * as React from "react";
import { DataGrid, ToolbarOptions } from "tubular-react";
import columns from "./columns";
import Snackbar from "@material-ui/core/Snackbar";

const RemoteDataGrid: React.FunctionComponent = () => {
  const [getErrorMessage, setErrorMessage] = React.useState(null as string);

  const toolbarOptions = new ToolbarOptions({
    advancePagination: false,
    bottomPager: false,
    exportButton: false,
    printButton: false,
    searchText: false,
    topPager: false
  });

  return (
    <>
      {getErrorMessage && (
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          style={{ paddingTop: "10px" }}
          open={true}
          ContentProps={{ "aria-describedby": "message-id" }}
          message={<span id="message-id">{getErrorMessage}</span>}
        />
      )}
      <DataGrid
        columns={columns}
        dataSource="https://tubular.azurewebsites.net/api/orders/paged"
        gridName="LocalDataGrid"
        onError={setErrorMessage}
        toolbarOptions={toolbarOptions}
      />
    </>
  );
};

export default RemoteDataGrid;
```
[![Edit RemoteDataGrid - onError Example](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/remotedatagrid-onerror-example-vyhze?fontsize=14&hidenavigation=1&theme=dark)

### Example of DataGrid with localDataSource
``` tsx
import * as React from "react";
import { DataGrid, ToolbarOptions } from "tubular-react";
import columns from "./columns";

const localData = [
  {
    OrderID: 1,
    CustomerName: "Microsoft",
    ShippedDate: "2016-03-19T19:00:00",
    ShipperCity: "Guadalajara, JAL, Mexico",
    Amount: 300.0
  },
  {
    OrderID: 2,
    CustomerName: "Microsoft",
    ShippedDate: "2016-11-08T18:00:00",
    ShipperCity: "Los Angeles, CA, USA",
    Amount: 9.0
  },
  {
    OrderID: 3,
    CustomerName: "Unosquare LLC",
    ShippedDate: "2016-11-08T18:00:00",
    ShipperCity: "Guadalajara, JAL, Mexico",
    Amount: 92.0
  },
];

const LocalDataGrid: React.FunctionComponent = () => {
  return (
    <DataGrid
      gridName="Tubular-React"
      columns={columns}
      dataSource={localData}
    />
  );
};

export default LocalDataGrid;
```
[![Edit LocalDataGrid - example](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/localdatagrid-example-vpcs2?fontsize=14&hidenavigation=1&theme=dark)

## ColumnModel
It represents a DataGrid column and its constructor requires a 
name identifier as well as an object of column options with the following properties:

**PROPERTIES**
| Name | Type | Description | Optional | Default value |
|------|------|-------------|----------|---------------|
| Name | string | Name of the Column | No | None |
| Aggregate | Function[] | Functions for aggregation of data | Yes | None |
| DataType | ColumnDataType | Column's data type | Yes | STRING |
| Filterable | Boolean | Flag to determine if column can be filtered | Yes | false |
| IsKey | Boolean | Determine if column is key | Yes | false |
| Label | string | Label to show  | Yes | *Name of the column* |
| Searchable | Boolean | Set if the column is searchable | Yes | true |
| SortDirection | ColumnSortDirection | Direction in which data is sorted | Yes | None |
| SortOrder | number | Order to sort the data | Yes | -1 |
| Sortable | Boolean | Flag to determine if data can be sorted | Yes | false |
| Visible | Boolean | Flag to hide/view the column on grid | Yes | true |

# Examples
### Example of Column configurations
```tsx
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
export default columns;
```


