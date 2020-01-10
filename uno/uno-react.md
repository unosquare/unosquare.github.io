---
layout: default
title: "Common functions, and hooks for React."
description: "Check out uno-js, a Typescript library for array and string manipulation."
---

<div class="container content-home d-flex flex-row">
      <div class="col-10 p-0">
        <div class="d-flex flex-row space-between">
          <h2>uno-react
          </h2>
          <a href="https://www.npmjs.com/package/uno-js" class="first-icon">
            <img class="npm-icon" src="/assets/npm.svg" alt="uno-js npm" title="uno-js npm"/>
          </a>
          <a href="https://github.com/unosquare/uno-js">
            <img class="github-icon" src="/assets/github.png" alt="uno-js Github Repo" title="uno-js Github Repo"/>
          </a>
        </div>
        <p>Common functions, and hooks for React.</p>
        <div class="mb-4">
          <div id="colorGenerator">
            <h4 class="blue-title">useClickOutside</h4>
            <p>
              This hook allows to call a given function when a click event occurs outside the component.
            </p>
            <h6>PARAMETERS</h6>
            <table class="table table-striped w-100 mt-2">
              <thead>
                <tr>
                  <th scope="col">Type</th>
                  <th scope="col">Description</th>
                  <th scope="col">Optional</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>React.FunctionComponent</td>
                  <td>The component to be wrapped</td>
                  <td>No</td>
                </tr>
                <tr>
                  <td>Function</td>
                  <td>The function that will be called when the click event occurs outside the component</td>
                  <td>No</td>
                </tr>
              </tbody>
            </table>
            <h6>RETURN</h6>
            <p>
              None
            </p>
          </div>
          <div>
            <iframe
              src="https://codesandbox.io/embed/uno-reactuseclickoutside-demo-flf7c?fontsize=14&hidenavigation=1&theme=dark&previewwindow=console&view=split"
              style="width:100%; height:300px; border:0; border-radius: 4px; overflow:hidden;"
              title="useClickOutside" sandbox="allow-scripts allow-same-origin"></iframe>
          </div>
        </div>
        <div class="mb-4">
          <div id="debounce">
            <h4 class="blue-title">useEffectWithDebounce</h4>
            <p>
              This hooks run an effect with a debounce. Each time any input change, it will be registered;
              when happens the debounce time whitout changes, the effect will be run. (This function does not return anything).
            </p>
            <h6>PARAMETERS</h6>
            <table class="table table-striped w-100 mt-2">
              <thead>
                <tr>
                  <th scope="col">Type</th>
                  <th scope="col">Description</th>
                  <th scope="col">Optional</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Function</td>
                  <td>The function that will be run.</td>
                  <td>No</td>
                </tr>
                <tr>
                  <td>Number</td>
                  <td>Time that have to happend to run the effect.</td>
                  <td>No</td>
                </tr>
                <tr>
                  <td>Array</td>
                  <td>An array of variables that the effect depends on.</td>
                  <td>No</td>
                </tr>
              </tbody>
            </table>
            <h6>RETURN</h6>
            <p>
              Function, it will be executed once the lapse finishes without interruptions.
            </p>
          </div>
          <div>
            <iframe
              src="https://codesandbox.io/embed/uno-reactuseeffectwithdebounce-demo-08ugt?fontsize=14&hidenavigation=1&theme=dark&previewwindow=console&view=split"
              style="width:100%; height:300px; border:0; border-radius: 4px; overflow:hidden;" title="useEffectWithDebounce"
              sandbox="allow-scripts allow-same-origin"></iframe>
          </div>
        </div>
        <div class="mb-4">
          <div id="humanize">
            <h4 class="blue-title">useEffectWithLoading</h4>
            <p>
              This hook handles the process of getting a external resource like a fetch or reading a file,
              and prevent updating the react state if the component is unmounted before the resource is loaded.
            </p>
            <h6>PARAMETERS</h6>
            <table class="table table-striped w-100 mt-2">
              <thead>
                <tr>
                  <th scope="col">Type</th>
                  <th scope="col">Description</th>
                  <th scope="col">Optional</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Function</td>
                  <td>The function that will get the data.</td>
                  <td>No</td>
                </tr>
                <tr>
                  <td>Object</td>
                  <td>Initial value or initial model.</td>
                  <td>No</td>
                </tr>
                <tr>
                  <td>Array</td>
                  <td>An array of variables that the effect depends on.</td>
                  <td>No</td>
                </tr>
              </tbody>
            </table>
            <h6>RETURN</h6>
            <p>
              Object - The value that is returned by the effect function when the data has been loaded, otherwise the initialValue.
            </p>
            <p>
              Boolean - A flag that indicates if the data has been fetched or not.
            </p>
          </div>
          <div>
            <iframe
              src="https://codesandbox.io/embed/uno-reactuseeffectwithloading-demo-t9p6v?fontsize=14&hidenavigation=1&theme=dark&previewwindow=console&view=split"
              style="width:100%; height:300px; border:0; border-radius: 4px; overflow:hidden;" title="useEffectWithLoading"
              sandbox="allow-scripts allow-same-origin"></iframe>
          </div>
        </div>
        <div class="mb-4">
          <div id="objectDifference">
            <h4 class="blue-title">useNow</h4>
            <p>
              This hook keep the current Date object updated.
              The value will be updated each second.
            </p>
            <h6>RETURN</h6>
            <p>
              Date - The current date.
            </p>
          </div>
          <div>
            <iframe
              src="https://codesandbox.io/embed/uno-reactusenow-demo-hbe1t?fontsize=14&hidenavigation=1&theme=dark&previewwindow=console&view=split"
              style="width:100%; height:300px; border:0; border-radius: 4px; overflow:hidden;"
              title="useNow" sandbox="allow-scripts allow-same-origin"></iframe>
          </div>
        </div>
        <div class="mb-4">
          <div id="removeDuplicated">
            <h4 class="blue-title">usePersistedState</h4>
            <p>
              This hook allows us to set and get values from the localStorage.
            </p>
            <h6>PARAMETERS</h6>
            <table class="table table-striped w-100 mt-2">
              <thead>
                <tr>
                  <th scope="col">Type</th>
                  <th scope="col">Description</th>
                  <th scope="col">Optional</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>String</td>
                  <td>The default value. This value will be added to the localStorage and returned if the key is not found.</td>
                  <td>No</td>
                </tr>
                <tr>
                  <td>String</td>
                  <td>The key/id to save the value on the localStorage.</td>
                  <td>No</td>
                </tr>
              </tbody>
            </table>
            <h6>RETURN</h6>
            <p>
              String - The current value saved in localStorage.
              Function - The function to set the value. Note: This function expects an Object as a parameter.
            </p>
          </div>
          <div>
            <iframe
              src="https://codesandbox.io/embed/uno-reactusepersistedstate-demo-ome0b?fontsize=14&hidenavigation=1&theme=dark&previewwindow=console&view=split"
              style="width:100%; height:300px; border:0; border-radius: 4px; overflow:hidden;"
              title="usePersistedState" sandbox="allow-scripts allow-same-origin"></iframe>
          </div>
        </div>
        <div class="mb-4">
          <div id="toTitleCase">
            <h4 class="blue-title">toTitleCase</h4>
            <p>
              Returns the given string in Title Case
            </p>
            <h6>PARAMETERS</h6>
            <table class="table table-striped w-100 mt-2">
              <thead>
                <tr>
                  <th scope="col">Type</th>
                  <th scope="col">Description</th>
                  <th scope="col">Optional</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>String</td>
                  <td>String to be converted on Title Case.</td>
                  <td>No</td>
                </tr>
              </tbody>
            </table>
            <h6>RETURN</h6>
            <p>
              A Title Case string.
            </p>
          </div>
          <div>
            <iframe
              src="https://codesandbox.io/embed/uno-jstotitlecase-208pm?fontsize=14&hidenavigation=1&theme=dark&previewwindow=console&view=split"
              style="width:100%; height:300px; border:0; border-radius: 4px; overflow:hidden;"
              title="uno-js/toTitleCase" sandbox="allow-scripts allow-same-origin"></iframe>
          </div>
        </div>
      </div>
      <div class="col-2 toc">
        <ul>
          <li>
            <p class="navbar-brand pl-3">Table of Content</p>
          </li>
          <li>
            <a class="nav-link" href="#colorGenerator">colorGenerator</a>
          </li>
          <li>
            <a class="nav-link" href="#debounce">debounce</a>
          </li>
          <li>
            <a class="nav-link" href="#humanize">humanize</a>
          </li>
          <li>
            <a class="nav-link" href="#objectDifference">objectDifference</a>
          </li>
          <li>
            <a class="nav-link" href="#removeDuplicated">removeDuplicated</a>
          </li>
          <li>
            <a class="nav-link" href="#toTitleCase">toTitleCase</a>
          </li>
        </ul>
      </div>