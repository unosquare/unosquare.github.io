---
author: Alejandro Ocampo (@kadosh)
layout: post
title: Global React Snackbar that renders responsibly
date: 2019-10-25
description: No matter what kind of React application you are working on you will need a way to provide app feedback to the user. This entry will introduce our cool GlobalSnackbar to you.
tags: Observer-Pattern Typescript uno-material-ui React material-ui
---

# A Global Snackbar for your React project
![Global-Snackbar](https://user-images.githubusercontent.com/25437790/59793181-87f3d180-929b-11e9-81b7-e57492b903ae.gif)
On this episode, I want to show you one of the reusable and useful React components we have used across multiple projects at Unosquare.

We have published a library called _uno-material-ui_, which you can find at: https://github.com/unosquare/uno-material-ui. As you may noticed, this is assuming you are working with **Material-UI**. If you don't know it, please take a look at it: https://material-ui.com/

And you can immediately start using it in your project with the traditional:
> npm i uno-material-ui

But I really want to focus on one of those components: the **GlobalSnackbar**.

## What does it do?
Well, it is as simple as a normal Snackbar, it shows a message to the user.
## How to use it?
In order to use it in your project, you will need to do three things:

1) Include the ```<SnackbarContainer />``` right after your [Theme Provider](https://material-ui.com/customization/theming/#theme-provider). Something like this:

```tsx
...
import { SnackbarContainer } from 'uno-material-ui';

...
<ThemeProvider theme={outerTheme}>
  ...
   <SnackbarContainer />
   ...
</ThemeProvider>
```
That ```<SnackbarContainer />``` will hold the Snackbar messages for your application. 

2) Now that we have the container in place, then you need a way to send messages to it. You will need our ```snackbarService```. That is the guy in charge of sending your messages to the **GlobalSnackbar**. Simply import it wherever you need it. Just do something like this:
```ts
import { snackbarService } from 'uno-material-ui';
```
3) Then, let's call the ```snackbarService.showSnackbar(messageText, messageType)``` on your component. Something like this:

```tsx
...
import { snackbarService } from 'uno-material-ui';

export const SimpleComponent = (props: any) => {
    const showInfoMessage = () => {
      snackbarService.showSnackbar('Hey! Check this snackbar', 'info');
    };
    const showErrorMessage = () => {
      snackbarService.showSnackbar('Hey! This is broken', 'error');
    };

    return (
        <>
            <Button onClick={showInfoMessage}>Show info message</Button>
            <Button onClick={showErrorMessage}>Show error message</Button>
        </>
    );
};
```

## Pretty easy, right?
If you have a project where you're using React and Material-UI you can give it a try. You don't need to worry about how to implement this in your application anymore. We have done it and we hope you like it and find it handy.

## Why it was made that way?
You might be curious about three main things:
1. Why not using **React Context**?
2. What in the world is the ```snackbarService```? What kind of Angular stuff is this?
3. How is this actually working?

Believe me, it is simpler than you might think. It is just a simple implementation of the **Observer Pattern** along with some attention to **render responsibly** and a **Singleton**.

Feel free to take a look at the code on the repository. I will do my best to come back and share the reasons we did it this way.

Thanks for reading and if you have enjoyed this please encourage us to keep posting with your feedback.