---
author: alejandro_ocampo
layout: post
title: "React Context implementation"
date: 2019-06-26
nocomments: false
area: "blog"
description: A walkthrough our learning process while implementing React Context. The problems we faced and the things we learned.
tags: React-Context React-Hooks
---

# React Context Implementation
We have implemented [React Context](https://reactjs.org/docs/context.html) in a way that allows us to share accross the tree: global state and global logic. Along with that, we also wanted a way [Global snackbar](https://material-ui.com/components/snackbars/) to show any feedback from the app.

During this implementation we have learned several things about react.

## First attempt

Our first approach was creating a simple GlobalContextProvider, exposing some information about the user:
- IsAuthenticated
- Username

And some common actions like:
- login
- logout
- setSnackbarMessage

So, our Context Provider would look like:

```tsx
{% raw %}
const GlobalContextProvider: React.FunctionComponent<any> = ({
	children
}) => {
	const [getMessage, setMessage] = React.useState({
        messageText: "",
		messageType: "success"
	});

	const setSnackbarMessage = (text: string, type = "success") =>
		setMessage({
			messageText: text,
			messageType: type
		});

	const [getIsAuthenticated, setIsAuthenticated] = React.useState(false);
	const [getUsername, setUsername] = React.useState("");

	const actions = {
		login: () => {
			console.log("GlobalContextProvider.login");
			setIsAuthenticated(true);
			setUsername("superadmin");

			setSnackbarMessage("User is authenticated");
		},
		logout: () => {
			console.log("GlobalContextProvider.logout");
			setIsAuthenticated(false);
			setUsername("anon");

			setSnackbarMessage("User has been kicked out");
		},
		setSnackbarMessage
	};

	return (
		<GlobalContext.Provider
			value={{
				actions: actions,
				isAuthenticated: getIsAuthenticated,
				username: getUsername
			}}>
			{children}
			<GlobalSnackbar seconds={3000} message={getMessage} mobile={false} />
		</GlobalContext.Provider>
	);
};
{% endraw %}
```

### Things we learned
One of the things we noticed was the fact that every intent to show a new message in our snackbar was causing a re-render on every component. Please take a look at it: https://codesandbox.io/s/unosquare-best-practices-react-context-1-kqbux

<iframe src="https://codesandbox.io/embed/unosquare-best-practices-react-context-1-kqbux?fontsize=14" title="Unosquare best practices - React context #1" allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

So, we learned that: **Creating the object on the `Provider value={}` will re-render any consumer even if the properties inside `value` are the same**

Meaning that we needed to find a way to pass the same `value` if it hasn't changed. That way, consumers won't be updated because there are no changes.

## Second attempt
This can be done by putting that value on a hook.

```tsx
{% raw %}
// Instead of doing this
const [getIsAuthenticated, setIsAuthenticated] = React.useState(false);
const [getUsername, setUsername] = React.useState("");

// We need this
const [getProviderValue, setProviderValue] = React.useState({
  isAuthenticated: false,
  username: '',
  actions: {
    // We will put any actions here
    setSnackbarMessage, // I'm forwarding the setter for our snackbar
  } // We will have another problem here (we will review it later)
});
{% endraw %}
```

And on the provider:

```tsx
{% raw %}
// Instead of doing this
<GlobalContext.Provider
  value={{
    actions: actions,
    isAuthenticated: getIsAuthenticated,
    username: getUsername
  }}>
  {children}
  <GlobalSnackbar seconds={3000} message={getMessage} mobile={false} />
</GlobalContext.Provider>

// We need this
<GlobalContext.Provider
  value={getProviderValue}>
  {children}
  <GlobalSnackbar seconds={3000} message={getMessage} mobile={false} />
</GlobalContext.Provider>
{% endraw %}
```

As you can see, we're not passing `getMessage` value to the provider, because that's not relevant to anybody except our GlobalSnackbar.

So, think about this: If any `Consumer` sends a message to the Snackbar, that is going to execute the render on the Provider, but **even though there was a change on the `getMessage` state, the value for the provider has not changed**, which means that no consumer needs to be updated. **We're re-rendering responsibly**.


But now let's see another issue. This is a tricky one. In order to see it, we will add a new action as follows:

```tsx
isValidSession: () => {
  console.log("GlobalContextProvider.isValidSession");

  if (getProviderValue.isAuthenticated) {
    setSnackbarMessage("User is authenticated");
  } else {
    setSnackbarMessage("User is NOT authenticated");

    // Check how getProviderValue won't be changed for
    console.log(
      "Why is not authenticated? getProviderValue: ",
      getProviderValue
    );
  }
}
```

So, let's understand this simple function, we're just checking `getProviderValue.isAuthenticated` and showing a message indicating the result. Try it at: https://codesandbox.io/s/unosquare-best-practices-react-context-2-0xy57

<iframe src="https://codesandbox.io/embed/unosquare-best-practices-react-context-2-0xy57?fontsize=14" title="Unosquare best practices - React context #2" allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

Steps:
<ol style="list-style-type: square">
	<li>Open the app</li>
	<li>Make sure you haven't clicked on any **LOGIN** button</li>
	<li>Click on Component C -> **Check if user is authenticated on actions**</li>
	<li>Now, click on Component A -> **LOGIN** button</li>
	<li>So, now you should be able to see that the user is authenticated</li>
	<li>Click again on Component C -> **Check if user is authenticated on actions**</li>
</ol>
What's happening? Consumers using `isAuthenticated` are seeing the proper value but actions on the Provider are seeing a different value.

## Third attempt