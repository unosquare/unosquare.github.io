---
layout: default
title: "Tubular React Common functions and hooks | tubular-react-common"
description: "Check out uno-react, a Typescript library with common functions and hooks for React"
---

<div class="container content-home d-flex flex-row">
  <div class="col-10 p-0">
    <div class="d-flex flex-row space-between">
      <h2>tubular react common</h2>
      <a href="https://www.npmjs.com/package/tubular-react-common" class="first-icon">
        <img class="npm-icon" src="/assets/npm.svg" alt="uno-react npm" title="uno-react npm"/>
      </a>
      <a href="https://github.com/unosquare/tubular-react-common">
        <img class="github-icon" src="/assets/github.png" alt="uno-react Github Repo" title="uno-react Github Repo"/>
      </a>
    </div>
    <p>Tubular React Common functions and hooks.</p>
    <div class="mb-4">
      <div id="useGridRefresh">
        <h4 class="blue-title">useGridRefresh</h4>
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
      <div id="useMasterDetails">
        <h4 class="blue-title">useMasterDetails</h4>
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
      <div id="useTbList">
        <h4 class="blue-title">useTbList</h4>
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
      <div id="useTbTable">
        <h4 class="blue-title">useTbTable</h4>
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
      <div id="useTubular">
        <h4 class="blue-title">useTubular</h4>
        <p>
          This hook allows to create a Tubular grid.
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
              <td>Array</td>
              <td>Array of column models to render data on the grid.</td>
              <td>No</td>
            </tr>
            <tr>
              <td>Object</td>
              <td>Source of the data to be presented.</td>
              <td>No</td>
            </tr>
            <tr>
              <td>Object</td>
              <td>Options to be present on the grid.</td>
              <td>Yes</td>
            </tr>
          </tbody>
        </table>
        <h6>RETURN</h6>
        <p>
          Object - The current data to be rendered to the grid.
          Function - The function to sort or control the grid.
        </p>
      </div>
      <div>
        <iframe
          src="https://codesandbox.io/embed/usetubular-hook-example-otdbu?fontsize=14&hidenavigation=1&theme=dark"
          style="width:100%; height:300px; border:0; border-radius: 4px; overflow:hidden;"
          title="useTubular-Hook-Example"
          sandbox="allow-scripts allow-same-origin"
        ></iframe>
      </div>
    </div>
  </div>
  <div class="col-2 toc">
    <ul>
      <li>
        <p class="navbar-brand pl-3">Table of Content</p>
      </li>
      <li>
        <a class="nav-link" href="#useGridRefresh">useGridRefresh</a>
      </li>
      <li>
        <a class="nav-link" href="#useMasterDetails">useMasterDetails</a>
      </li>
      <li>
        <a class="nav-link" href="#useTbList">useTbList</a>
      </li>
      <li>
        <a class="nav-link" href="#useTbTable">useTbTable</a>
      </li>
      <li>
        <a class="nav-link" href="#useTubular">useTubular</a>
      </li>
    </ul>
  </div>
</div>
