---
author: Alejandro Ocampo (@kadosh)
layout: post
title: "A tale of two sons 2 - Class component, the smart guy"
date: 2020-02-07
description: This is a story about the evolution of React Functional Component starting from the beginning. You'll enjoy learning React core concepts in friendly way.
tags: Reactjs Javascript
---
On these episodes, I will try to guide you through a story that will help you understand React Class/Function Components. If you're an experienced React developer this might not be that interesting for you, but I hope you find this enjoyable.

I recommend you to [read part 1 first](https://unosquare.github.io/2020/02/07/a-tale-of-two-sons-1-the-origins.html)

# Class component learns to change
Since changing props or variables was not a valid way for her mother when reacting to changes, he created an entire strategy.

Class component understood that his mother had to have a way to track any changes that will require a render process. He designed a lifecycle to work with his mother and invented a thing called: **state**. He would use state as an internal holder and he would go through an entire process to get a change by himself so that his mother could be happy. And she was!!!

He invented three moments: Mount, Update, Unmount.

At the **Mount** moment he would take care of the initial properties and setting anything on the state.
At the **Update** moment he would review any changes coming from himself or from his parent.
At the **Unmount** moment he would clean anything after doing any work.

Then, he developed some methods to deal with that:

![Code snippet](/assets/arhh-snippet-6.png)

That was his plan regarding the render process. And then he presented his plan regarding the way to work with changes. Since using some random variables internally or modifying props was not an option, he agreed with his mother on using a special variable that could be subject of changes.

![Code snippet](/assets/arhh-snippet-5.png)

Her mother was so happy about this because she was able to keep track of any change he was doing. It was just a matter of watching that ```state``` variable.

# The power of changing
When Class Component learned that ability, he was opened for an entire new set of possibilities. Once he had the ability to modify his only state and thanks to the methods he created, he was also able to do some side effects.

## componentDidMount
This method would be used to execute any side effects that might also produce a change on the ```state```. This would be a perfect place to **make any subscription/request to a remote source**. This would also be a perfect time to **work with the DOM** produced during the render process.

## componentWillUnmount
This method would be used to cleanup anything that was left pending. Class component could **cancel any subscription he previously made**.

## componentDidUpdate
For those cases where somebody would want to react to a change in state. Class component could make some **conditional calls** when there's **a specific change in state**.

