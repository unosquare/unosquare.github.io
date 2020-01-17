## Tubular React
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

#### DataGrid
The grid will connect to a remote datasource or have a local datasource depending on what's
passed in the dataSource property.

**PROPERTIES**
| Name | Type | Description | Optional | Default value |
|------|------|-------------|----------|---------------|
| columns | ColumnModel[] | Array that defines the type of columns to be rendered on the grid | No | None |
| dataSource | <ul><li>Object[]</li><li>string</li><li>Request</li><li>TubularHttpClientAbstract</li></ul> | Source of the data for the grid | No | None |
| deps | any[] | Array of dependencies for grid | No | None |
| detailComponent | React.ReactElement<DetailComponent> | Element used to render Grid details | No | None |
| gridName | string | Name of the grid - *Note: two or more grids with same name may cause problems* | No | None |
| storage | DataGridStorage | Save data to localStorage | Yes | None |
| toolbarOptions | ToolbarOptions | Options to present on the grid | Yes | None |
| mobileBreakpointWidth | number | Minimum width to change style to mobile version | Yes | None |
| rowComponent | React.FunctionComponent<TbRowProps> | Custom row component | Yes | None |
| rowMobileComponent | React.FunctionComponent<TbRowProps> | Custom row component for mobile version | Yes | None |
| footerComponent | React.FunctionComponent<any> | Custom component for Grid footer | Yes | None |
| onError | Function | Function to handle errors | Yes | None |
| onRowClick | Function | Function to handle when a row is clicked | Yes | None |

**EXAMPLE**

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

#### ColumnModel
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

**EXAMPLE**

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
