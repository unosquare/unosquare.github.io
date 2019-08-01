---
author: "Ana Atayde"
layout: post
title: "Tubular .NET"
date: 2019-08-01
nocomments: false
area: "blog"
description: Tubular .NET, a server-side class library to populate Tubular grids.
tags: Back-End Tubular C# .NET
---

# Tubular .NET  
​
**Tubular .NET** is a server-side class library, that contains models and procedures which will transform our data in a **Grid Data Response**  _model_. These procedures will be in charge of performing filtering, sorting, searching as well as build aggregations on the data. 
​
As we have seen tubular is a **definition,** due to the server and the client aren't attached to any framework or programming language. In this case, we will lead you through the server made in .NET.
​
The **Tubular** library exposes a method extension that takes a **Grid Data Request** and the first transformation on our data (the data select) and create a **Grid Data Response.** 
​
Imagine that you have an Orders Entity Framework DBSet which have the following columns:
​
* OrderID
* CustomerName
* ShippedDate
* ShipperCity
* Amount 
​
The next code snippet will return an objects payload with all the properties of the **Order** entity.
``` csharp
​
[HttpPost] // -> Remember all the grid requests will be made on the POST request method
[Route("paged")]
public  IActionResult GetOrders(GridDataRequest  request)
{
	// Generates a GridDataResponse using the GridDataRequest an IQueriable source like a DataSet in Entity Framework
​
	return  Ok(request.CreateGridDataResponse(DbContext.Orders.AsQueryable()));
​
}
​
```
​
This code snippet will return an objects payload with only three properties of the **Order** entity. 
​
``` csharp
​
[HttpPost] // -> Remember all the grid requests will be made on the POST request method
​
[Route("paged")]
​
public  IActionResult GetOrders(GridDataRequest  request)
​
{
​
	// Generates a GridDataResponse using the GridDataRequest an IQueriable source like a DataSet in Entity Framework
​
	return  Ok(request.CreateGridDataResponse(DbContext.Orders
				.Select(x => new
				{
					x.OrderID,
					x.CustomerName,
					x.ShipperCity
				})
				.AsQueryable()));
​
}
​
```
​
​
The _CreateGridDataResponse_ method searches over the request and performs the following actions:
​
1. First of all, it will be looking for the applied filters and **filter** the data (it is our second transformation).
​
2. After the filter, the resulting data is **sorted** according to the request (the third transformation). 
​
3. In the end, the **Aggregation** actions are built (The fourth and last transformation). 
​
Our **Data Grid Response** will look like:
​
**_All the properties_**
​
``` JSON
{
	"Counter": 0,
	"Payload": [
		[
			1,
			"Oxxo",
			"2016-11-05T19:00:00",
			"Guadalajara, JAL, Mexico",
			95
		],
		[
			2,
			"Super La Playa",
			"2016-11-02T19:00:00",
			"Los Angeles, CA, USA",
			5
		],
		[
			3,
			"Unosquare LLC",
			"2016-11-04T19:00:00",
			"Guadalajara, JAL, Mexico",
			36
		],
		[
			4,
			"Microsoft",
			"2016-11-11T19:00:00",
			"Leon, GTO, Mexico",
			111
		],
		[
			5,
			"Unosquare LLC",
			"2016-11-07T19:00:00",
			"Guadalajara, JAL, Mexico",
			42
		],
		[
			6,
			"Microsoft",
			"2016-11-08T19:00:00",
			"Leon, GTO, Mexico",
			6
		],
		[
			7,
			"Advanced Technology Systems",
			"2016-11-08T19:00:00",
			"Guadalajara, JAL, Mexico",
			97
		],
		[
			8,
			"Super La Playa",
			"2016-11-06T19:00:00",
			"Portland, OR, USA",
			1
		],
		[
			9,
			"Microsoft",
			"2016-11-09T19:00:00",
			"Portland, OR, USA",
			68
		],
		[
			10,
			"Microsoft",
			"2016-11-09T19:00:00",
			"Guadalajara, JAL, Mexico",
			16
		]
		],
	"TotalRecordCount": 500,
	"FilteredRecordCount": 500,
	"TotalPages": 50,
	"CurrentPage": 1,
	"AggregationPayload": {
	"Amount": 28007
	}
}
​
```
​
**_Only three properties_**
​
``` JSON
{
	"Counter": 0,
	"Payload": [
		[
			1,
			"Oxxo",
			"Guadalajara, JAL, Mexico"
		],
		[
			2,
			"Super La Playa",
			"Los Angeles, CA, USA"
		],
		[
			3,
			"Unosquare LLC",
			"Guadalajara, JAL, Mexico"
		],
		[
			4,
			"Microsoft",
			"Leon, GTO, Mexico"
		],
		[
			5,
			"Unosquare LLC",
			"Guadalajara, JAL, Mexico"
		],
		[
			6,
			"Microsoft",
			"Leon, GTO, Mexico"
		],
		[
			7,
			"Advanced Technology Systems",
			"Guadalajara, JAL, Mexico"
		],
		[
			8,
			"Super La Playa",
			"Portland, OR, USA"
		],
		[
			9,
			"Microsoft",
			"Portland, OR, USA"
		],
		[
			10,
			"Microsoft",
			"Guadalajara, JAL, Mexico"
		]
	],
	"TotalRecordCount": 500,
	"FilteredRecordCount": 500,
	"TotalPages": 50,
	"CurrentPage": 1,
	"AggregationPayload": {
	"CustomerName": 500
	}
}
​``` 