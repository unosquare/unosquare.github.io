---
author: Alejandro Ocampo (@kadosh)
layout: post
title: "Replacing HOCs with hooks in tubular"
date: 2019-06-26
nocomments: false
area: "blog"
description: Once react introduced hooks new possibilites were opened at tubular-react. This is the story on how we moved our Data Sources from HOCs into a powerful hook.
tags: React-Hooks Javascript Tubular-React
---

# tubular-react original implementation
## Introduction
If you don't know what tubular-react is, it is a Data Grid component that uses Material UI to display tabular data. And, our original implementation consisted of the following main components:

- Data Grid component (Main component)
- Data Source (Which was provided in the form of a HOC and we call it `SpecificDataSource`)
- Somebody responsible for state and interactions on the Data Grid (`BaseDataSource`)
- Other feature components like: Paginators, Toolbars, etc.

But for now let's focus on the first three components: `DataGrid`, `SpecificDataSource` and `BaseDataSource`.

Our `DataGrid` component required a `SpecificDataSource` that was intended to do one thing: `getAllRecords`, that is a function that deals with the details on how to retrieve the data, either from an array or from a remote data source. And all the logic to deal with state and interactions with the grid lived inside `BaseDataSource`. Right from here you can see a design issue: why our state and interactions (API) for the `DataGrid` live not on the `DataGrid` but in the `BaseDataSource`? Because reasons...

Anyway, a simple data grid with our original approach looked like:

```tsx
const LocalDataGrid = withRemoteDataSource(
  () => {
    return  
     <DataGrid />
  },
  columns,
  "https://tubular.azurewebsites.net/api/orders/paged"
);
}
```
You can notice some interesting things:
- Columns are passed to the `DataSource`
- `DataGrid` will execute some internal magic to access those Columns and the rest of the state and API methods as well.
- Implementation looks weird, I just need a DataGrid, why that complexity?

So, that was the point when I started thinking, why can't I have something like this?:
```tsx
<DataGrid 
  columns={columns} 
  dataSource='https://tubular.azurewebsites.net/api/orders/paged'
/>
```

Ain't that better? I mean, if tubular already provides functionality to work either with a local data source or with a remote one, why should the implementation contain details about it? 

So, that was my initial step on this trip.

## Refactoring
The idea was good, but what about reality? By that time, our `DataGrid` render method looked like this:
```tsx
return (
  <DataGridProvider
    toolbarOptions={toolbarOptions}
    gridName={gridName}
    storage={storage}
  >
    <Paper className={classes.root}>
      <GridToolbar>
        {children}
      </GridToolbar>
      <div className={classes.progress}>
        {state.isLoading && <LinearProgress />}
      </div>
      <DataGridTable
        bodyRenderer={bodyRenderer}
        footerRenderer={footerRenderer}
        onRowClick={onRowClick}
      />
    </Paper>
  </DataGridProvider>
);
```

These were just bad news to my new approach. Tubular-react had its state spread across multiple locations. Some state was living on the `DataSourceContextProvider` context and some other on the `DataGridProvider`. Why? Because reasons...

So, time to refactor came... Let's think about this component from scratch, I need: 
- A simple `DataGrid` component
- A common state for the entire grid
- An API (grid behavior) to be shared with paginator, filtering and the rest of the grid features

## Power of hooks
`DataSourceContextProvider` and `DataGridProvider` were holding state and actions. I could simply merged those into a single one. Then I wondered: can I put this inside hooks? What if I could simply do `useDataGrid()` and just with that I could have the state of my grid and the API to interact with it?

I'm not against the use of Context (as long as it is used properly), but I'm not a big fan of creating components to simply share some logic or data. So, that was the exact point when `useDataGrid()` came to life. 

## useDataGrid(columns, config, dataSource)
I simply did this:

- Moved the entire state and behavior from `DataSourceContextProvider` and `DataGridProvider` into my `useDataGrid` hook (read about [custom hooks](https://reactjs.org/docs/hooks-custom.html)).
- Returned an object containing both state and api.

## Something really nice with hooks
One of the things I did while moving that logic and state into my custom hook was refactoring the way the grid is refreshed. Previously, every method that require a refresh on the grid had to manually call `retrieveData` internal function. For example, the `sortColumn` method had to do changes in state and then call `retrieveData` to effectively reflect the changes on the grid. That was applied to every method requiring a refresh on the grid.

But what if I told you [useEffect](https://reactjs.org/docs/hooks-effect.html) can do that for you?

This is great, instead of calling the method to update the grid in a lot of places, I ended up with something like this:
```tsx
React.useEffect(() => {
    api.processRequest();
}, [getColumns, getPage, getSearchText, getItemsPerPage]);
```

Any state that requires a refresh on the grid is simply added as a dependency on the useEffect and whenever one of those changes, the grid will automatically refreshed. You can read more about that at https://reactjs.org/docs/hooks-effect.html#tip-optimizing-performance-by-skipping-effects.

## Final implementation
In the end, I was able to successfully implement `useDataGrid` hook as a replacement for the two providers tubular-react used to have. A simple data grid with local data source now look like this:
```tsx
<DataGrid
  columns={columns}
  dataSource={localData}
  gridName='LocalDataGrid'
/>
```

Where `dataSource` prop is simply an array of data. And if your data is coming from a remote source, then you just need to do something like:
```tsx
<DataGrid
  columns={columns}
  dataSource='https://somewhere-with-tubular-backend'
  gridName='LocalDataGrid'
/>
```

That's it, no more HOCs, just a simple `DataGrid` component with some props.
