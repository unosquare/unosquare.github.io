---
layout: default
title: "Open Source Software Initiatives from Unosquare | uno-js"
description: "Check out uno-js, a Typescript library for array and string manipulation."
---

<div class="container content-home">
  <h2>uno-js</h2>
  <p>String and array manipulation, easy-to-use fetch controller and more, written in Typescript</p>
</div>
<div class="container content-home pt-0">
  <div class="mb-4 col-10 p-0 d-flex flex-column">
    <div id="colorGenerator">
      <h4 class="blue-title">colorGenerator</h4>
      <p>
        Given a starting RGB value and an ending RGB value, it returns a range of colors generated by its factor.
      </p>
      <strong>Parameters</strong>
      <p>
        array: Starting array with RGB values. <br/>
        array: Ending array with RGB values. <br/>
        int: The factor which will multiply the values.
      </p>
      <strong>Return</strong>
      <p>
        Array with generated string RGB values in the following format: "rgba(r,g,b,a)"
      </p>
    </div>
    <div>
      <iframe
        src="https://codesandbox.io/embed/uno-jscolorgenerator-ke1rl?fontsize=14&hidenavigation=1&theme=dark&previewwindow=console&view=split"
        style="width:100%; height:300px; border:0; border-radius: 4px; overflow:hidden;"
        title="uno-js/colorGenerator"
        sandbox="allow-scripts allow-same-origin"
      ></iframe>
    </div>
  </div>
  <div class="col-12">
  <ul>
    <a class="navbar-brand" href="#">Table of Content</a>
    <li>
      <a class="nav-link" href="#colorGenerator">colorGenerator</a>
   </li>
</ul>
</div>
</div>
<div class="gray-section">
<div class="container content-home">
  <div class="mb-4 col-10 p-0 d-flex flex-column">
    <div>
      <h4 class="blue-title">humanize</h4>
      <p>
        It returns a humanized string.
      </p>
      <strong>Parameters</strong>
      <p>
        string: String to be humanized
      </p>
      <strong>Return</strong>
      <p>
        A humanized string
      </p>
    </div>
    <div>
      <iframe
        src="https://codesandbox.io/embed/uno-jshumanize-dp40n?fontsize=14&hidenavigation=1&theme=dark&previewwindow=console&view=split"
        style="width:100%; height:300px; border:0; border-radius: 4px; overflow:hidden;"
        title="uno-js/humanize"
        sandbox="allow-scripts allow-same-origin"
      ></iframe>
    </div>
  </div>
</div>
</div>
<div class="container content-home">
  <div class="mb-4 col-10 p-0 d-flex flex-column">
    <div>
      <h4 class="blue-title">objectDifference</h4>
      <p>
        Get the difference between 2 objects and return an object with the previous and new values of each difference.
      </p>
      <strong>Parameters</strong>
      <p>
        object: First object to compare. <br/>
        object: Second object to compare.
      </p>
      <strong>Return</strong>
      <p>
        Returns an object where each prop is an object with the difference, formated as {[prop]: {prev: "Old value", new: "New value", type: [prop]}}
      </p>
    </div>
    <div>
      <iframe
        src="https://codesandbox.io/embed/uno-jsobjectdifference-q4okk?fontsize=14&hidenavigation=1&theme=dark&previewwindow=console&view=split"
        style="width:100%; height:300px; border:0; border-radius: 4px; overflow:hidden;"
        title="uno-js/objectDifference"
        sandbox="allow-scripts allow-same-origin"
      ></iframe>
    </div>
  </div>
</div>
<div class="gray-section">
<div class="container content-home">
  <div class="mb-4 col-10 p-0 d-flex flex-column">
    <div>
      <h4 class="blue-title">removeDuplicated</h4>
      <p>
        Remove the duplicated entries in an object array by prop.
      </p>
      <strong>Parameters</strong>
      <p>
        array: Array of objects to be evaluated.<br/>
        string: Prop to be evaluated.
      </p>
      <strong>Return</strong>
      <p>
        An array with unique objects. 
      </p>
    </div>
    <div>
      <iframe
        src="https://codesandbox.io/embed/uno-jsremoveduplicated-6pmtz?fontsize=14&hidenavigation=1&theme=dark&previewwindow=console&view=split"
        style="width:100%; height:300px; border:0; border-radius: 4px; overflow:hidden;"
        title="uno-js/removeDuplicated"
        sandbox="allow-scripts allow-same-origin"
      ></iframe>
    </div>
  </div>
</div>
</div>
<div class="container content-home">
  <div class="mb-4 col-10 p-0 d-flex flex-column">
    <div>
      <h4 class="blue-title">toTitleCase</h4>
      <p>
        Returns the given string in Title Case
      </p>
      <strong>Parameters</strong>
      <p>
        string: String to be converted on Title Case
      </p>
      <strong>Return</strong>
      <p>
        A Title Case string.
      </p>
    </div>
    <div>
      <iframe
        src="https://codesandbox.io/embed/uno-jstotitlecase-208pm?fontsize=14&hidenavigation=1&theme=dark&previewwindow=console&view=split"
        style="width:100%; height:300px; border:0; border-radius: 4px; overflow:hidden;"
        title="uno-js/toTitleCase"
        sandbox="allow-scripts allow-same-origin"
      ></iframe>
    </div>
  </div>
</div>