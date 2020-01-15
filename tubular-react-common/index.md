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
          useGridRefresh contains a state hook conformed by a number that initaly is zero, 
          and returns the number and a function that adds one to the number each time that the the hook is executed
        </p>
        <h6>PARAMETERS</h6>
        <p>No parameters</p>
        <h6>RETURN</h6>
        <p>
          Number - Number of refreshings executed over the grid - Initial value: 0.
        </p>
        <p>
          Function - That adds another count whenever grid is refreshed.
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
          useMasterDetails contains a state hook conformed by a boolean, and returns 
          the boolean and a function to change the boolean to the opposite value.
        </p>
        <h6>PARAMETERS</h6>
        <p>
          No parameters
        </p>
        <h6>RETURN</h6>
        <p>
          Boolean - Flag to toggle use of master details.
        </p>
        <p>
          Function - Function to toggle the value of the flag.
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
          useTbTable hook returns a tubular table instance conformer by a tubular API that returns 
          a set of functions that you can execute over your source data and a tubular state with 
          all the tubular properties, this allows manipulating all the tubular features, 
          performing changes in our tubular instance.
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
              <td>Array with the column model description.</td>
              <td>No</td>
            </tr>
            <tr>
              <td>Object</td>
              <td>The source of data.</td>
              <td>No</td>
            </tr>
            <tr>
              <td>Object</td>
              <td>
                Options that you can set up if you want 
                a particular behavior on the grid.
                If you don’t send them, the hook creates 
                them with default values.
              </td>
              <td>Yes</td>
            </tr>
          </tbody>
        </table>
        <h6>RETURN</h6>
        <p>
          Object - A Tubular state with all the tubular properties.
          Function - A Tubular instance conformer that returns a set of functions to execute over your source data.
        </p>
      <div>
        <iframe
          src="https://codesandbox.io/embed/usetbtable-hook-example-tqtit?fontsize=14&hidenavigation=1&theme=dark"
          style="width:100%; height:300px; border:0; border-radius: 4px; overflow:hidden;"
          title="useTbTable-Hook-Example"
          sandbox="allow-scripts allow-same-origin"
        ></iframe>
      </div>
    </div>
    <div class="mb-4">
      <div id="useTubular">
        <h4 class="blue-title">useTubular</h4>
        <p>
          This hook allows manipulating all the Tubular features, performing changes in our Tubular instance.
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
              <td>Array with the column model description.</td>
              <td>No</td>
            </tr>
            <tr>
              <td>Object</td>
              <td>The source of data.</td>
              <td>No</td>
            </tr>
            <tr>
              <td>Object</td>
              <td>
                Options that you can set up if you want 
                a particular behavior on the grid.
                If you don’t send them, the hook creates 
                them with default values.
              </td>
              <td>Yes</td>
            </tr>
          </tbody>
        </table>
        <h6>RETURN</h6>
        <p>
          Object - A Tubular state with all the tubular properties.
          Function - A Tubular instance conformer that returns a set of functions to execute over your source data.
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
