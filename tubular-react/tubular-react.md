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
| detailComponent | React.ReactElement<DetailComponent> | Element  | No | None |
| gridName | string | Name of the grid - *Note: two or more grids with same name may cause problems* | No | None |
| storage | DataGridStorage | Save data to localStorage | Yes | None |
| toolbarOptions | ToolbarOptions | Options to present on the grid  | Yes | None |

**EXAMPLE**
