---
author: alejandro_ocampo
layout: post
title: "React Context implementation"
date: 2019-06-26
nocomments: false
area: "blog"
description: A walkthrough our learning process while implementing React Context. The problems we faced and the things we learned.
tags: React-Context React-Hooks Javascript
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
One of the things we noticed was the fact that every intent to show a new message in our snackbar was causing a re-render on every component. Please take a look at it and notice the Console logs, you will see all the components being rendered every time a message is shown:

<iframe src="https://codesandbox.io/embed/unosquare-best-practices-react-context-1-kqbux?fontsize=14&runonclick=1" title="Unosquare best practices - React context #1" allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

So, we learned that: **Creating the object on the `Provider value={}` will re-render any consumer even if the properties inside `value` are the same**. You can read more about this at: https://reactjs.org/docs/context.html#caveats

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

So, let's understand this simple function, we're just checking `getProviderValue.isAuthenticated` and showing a message indicating the result. Now, with these changes we will be avoiding the re-render of all the components (you can check the console logs) but let's get into the new issue.

Steps:
<ol style="list-style-type: square">
	<li>Open the app</li>
	<li>Make sure you haven't clicked on any **LOGIN** button</li>
	<li>Click on Component C -> **Check if user is authenticated on actions**</li>
	<li>Now, click on Component A -> **LOGIN** button</li>
	<li>So, now you should be able to see that the user is authenticated</li>
	<li>Click again on Component C -> **Check if user is authenticated on actions**</li>
</ol>

<iframe src="https://codesandbox.io/embed/unosquare-best-practices-react-context-2-0xy57?fontsize=14&runonclick=1" title="Unosquare best practices - React context #2" allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

What's happening? Consumers using `isAuthenticated` are seeing the proper value but actions on the Provider are seeing a different value.

Is this something wrong with our Context Provider? The answer is: **NO!** Take a look at the following isolated example:

Steps:
<ol style="list-style-type: square">
	<li>Open the app</li>
	<li>Click on the **Increment** button several times </li>
	<li>Click **Check value** button</li>
	<li>Surprise!!! You will always get a **0**</li>
</ol>

<iframe src="https://codesandbox.io/embed/react-hooks-playground-q3bfk?fontsize=14&runonclick=1" title="Out of sync state" allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

So this is not an issue with our Context Provider, this is a normal behavior with React Hooks. Functions inside the state are always getting the initial value for the hook. In fact, the documentation from React contains information about this. Check it at: https://reactjs.org/docs/hooks-faq.html#why-am-i-seeing-stale-props-or-state-inside-my-function

So, there's a workaround for this:

> If you intentionally want to read the latest state from some asynchronous callback, you could keep it in a ref, mutate it, and read from it.

At that moment I was thinking about another way to implement this. So, why not separating concerns a little bit more?

## Third attempt
Why not having a Context specifically to handle state and another one to provide logic/actions? That way we could also separate logic by domain on its own Context.

Let's give it a try. We will do the following:

<ol style="list-style-type: square">
	<li>Move actions to a **GlobalActionsContext**</li>
	<li>Add a function to update **GlobalContext** state</li>
	<li>Start consuming **GlobalActionsContext**</li>
</ol>

<iframe src="https://codesandbox.io/embed/unosquare-best-practices-react-context-3-cl9hk?fontsize=14&runonclick=1" title="Unosquare best practices - React context #3" allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

You can see that:

<ol style="list-style-type: square">
	<li>Showing messages on the snackbar is not re-rendering components</li>
	<li>Clicking **Check if user is authenticated on actions** button is working now properly</li>
	<li>We have a better separation of concerns</li>
</ol>