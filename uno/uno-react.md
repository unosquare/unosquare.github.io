---
layout: default
title: "Open Source Software Initiatives from Unosquare | uno-js"
description: "Check out uno-react, a Typescript library with common functions and hooks for React"
---

<div class="container content-home d-flex flex-row">
      <div class="col-10 p-0">
        <div class="d-flex flex-row space-between">
          <h2>uno-react
          </h2>
          <a href="https://www.npmjs.com/package/uno-react" class="first-icon">
            <img class="npm-icon" src="/assets/npm.svg" alt="uno-react npm" title="uno-react npm"/>
          </a>
          <a href="https://github.com/unosquare/uno-react">
            <img class="github-icon" src="/assets/github.png" alt="uno-react Github Repo" title="uno-react Github Repo"/>
          </a>
        </div>
        <p>Common functions, and hooks for React.</p>
        <div class="mb-4">
          <div id="useClickOutside">
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
          <div id="useEffectWithDebounce">
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
          <div id="useEffectWithLoading">
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
          <div id="useNow">
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
          <div id="usePersistedState">
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
          <div id="useResolutionSwitch">
            <h4 class="blue-title">useResolutionSwitch</h4>
            <p>
              This hook listen to the resize window event and keep the isResolution flag updated.
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
                  <td>Number</td>
                  <td>Size limit (px). defaultValue: 1000</td>
                  <td>Yes</td>
                </tr>
                <tr>
                  <td>Number</td>
                  <td>Debounder timeout, the variable will change after this debounder time (ms). defaultValue: 500</td>
                  <td>Yes</td>
                </tr>
              </tbody>
            </table>
            <h6>RETURN</h6>
            <p>
              boolean - true when window outerSize is smaller than the outerWith passed as a parameter.
            </p>
          </div>
          <div>
            <iframe
              src="https://codesandbox.io/embed/uno-reactuseresolutionswitch-demo-ex1fg?fontsize=14&hidenavigation=1&theme=dark&previewwindow=console&view=split"
              style="width:100%; height:300px; border:0; border-radius: 4px; overflow:hidden;"
              title="useResolutionSwitch" sandbox="allow-scripts allow-same-origin"></iframe>
          </div>
        </div>
        <div class="mb-4">
          <div id="useStateForField">
            <h4 class="blue-title">useStateForField</h4>
            <p>
              Similar to useStateForModel this hook helps us to keep the value of a variable
              that is related to an input, but in this case useStateForField works just with one value.
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
                  <td>Object</td>
                  <td>Initial value or initial model.</td>
                  <td>No</td>
                </tr>
              </tbody>
            </table>
            <h6>RETURN</h6>
            <p>
              Object - The current value, that keeps the information updated.
              Function - This function should be called on the onChange event.
              Function - This function helps us to update the value manually.
            </p>
          </div>
          <div>
            <iframe
              src="https://codesandbox.io/embed/uno-reactusestateforfield-demo-2xuq3?fontsize=14&hidenavigation=1&theme=dark&previewwindow=console&view=split"
              style="width:100%; height:300px; border:0; border-radius: 4px; overflow:hidden;"
              title="useStateForField" sandbox="allow-scripts allow-same-origin"></iframe>
          </div>
        </div>
        <div class="mb-4">
          <div id="useStateForModel">
            <h4 class="blue-title">useStateForModel</h4>
            <p>
              This hook allows us to keep updated the values of a model that are related to an input,
              handling the input's onChange calls. During the first render the model will have the initialValue.
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
                  <td>Object</td>
                  <td>Initial value or initial model.</td>
                  <td>No</td>
                </tr>
              </tbody>
            </table>
            <p>
              Note: The handleChange method will update the model by the target.name
              event property if it is found, otherwise it will be added to the model.
              Note: Calling the handleChange method with an object as a param instead of an event,
              the object will be merged with the current model.
            </p>
            <h6>RETURN</h6>
            <p>
              Object - The current value, that keeps the information updated.
              Function - This function should be called on the onChange event.
            </p>
          </div>
          <div>
            <iframe
              src="https://codesandbox.io/embed/uno-reactusestateformodel-demo-lmkuh?fontsize=14&hidenavigation=1&theme=dark&previewwindow=console&view=split"
              style="width:100%; height:300px; border:0; border-radius: 4px; overflow:hidden;"
              title="useStateForModel" sandbox="allow-scripts allow-same-origin"></iframe>
          </div>
        </div>
        <div class="mb-4">
          <div id="useStateForModel">
            <h4 class="blue-title">useStateForModel</h4>
            <p>
              This hook allows us to keep updated the values of a model that are related to an input,
              handling the input's onChange calls. During the first render the model will have the initialValue.
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
                  <td>Object</td>
                  <td>Initial value or initial model.</td>
                  <td>No</td>
                </tr>
              </tbody>
            </table>
            <p>
              Note: The handleChange method will update the model by the target.name
              event property if it is found, otherwise it will be added to the model.
              Note: Calling the handleChange method with an object as a param instead of an event,
              the object will be merged with the current model.
            </p>
            <h6>RETURN</h6>
            <p>
              Object - The current value, that keeps the information updated.
              Function - This function should be called on the onChange event.
            </p>
          </div>
          <div>
            <iframe
              src="https://codesandbox.io/embed/uno-reactusestateformodel-demo-lmkuh?fontsize=14&hidenavigation=1&theme=dark&previewwindow=console&view=split"
              style="width:100%; height:300px; border:0; border-radius: 4px; overflow:hidden;"
              title="useStateForModel" sandbox="allow-scripts allow-same-origin"></iframe>
          </div>
        </div>
        <div class="mb-4">
          <div id="useStateForModelWithLoading">
            <h4 class="blue-title">useStateForModelWithLoading</h4>
            <p>
              This hook allows us to keep updated the values of a model that are related to an input, 
              handling the input's onChange calls like useStateForModel does, but in additino this hook 
              allows us to load the data from an external resource.
              This hook is a mix between useStateForModel and useEffectWithLoading, you can use it just 
              as useStateForModel and handle the loading with the extra variable returned isLoading.
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
                  <td>the function that will get the data.</td>
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
              Boolean - A flag that indicates if the data has been fetched or not.
              Function - This function should be called on the onChange event.
            </p>
          </div>
          <div>
            <iframe
              src="https://codesandbox.io/embed/uno-reactusestateformodelwithloading-demo-6294s?fontsize=14&hidenavigation=1&theme=dark&previewwindow=console&view=split"
              style="width:100%; height:300px; border:0; border-radius: 4px; overflow:hidden;"
              title="useStateForModelWithLoading" sandbox="allow-scripts allow-same-origin"></iframe>
          </div>
        </div>
        <div class="mb-4">
          <div id="useToggle">
            <h4 class="blue-title">useToggle</h4>
            <p>
              This hook handles the switch on boolean values. The value will be 
              toggled each time the function toggle is called.
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
                  <td>Boolean</td>
                  <td>Default or initial value.</td>
                  <td>No</td>
                </tr>
              </tbody>
            </table>
            <h6>RETURN</h6>
            <p>
              Boolean - The current value.
              Function - The function that toggles the value.
            </p>
          </div>
          <div>
            <iframe
              src="https://codesandbox.io/embed/uno-reactusetoggle-demo-i39t7?fontsize=14&hidenavigation=1&theme=dark&previewwindow=console&view=split"
              style="width:100%; height:300px; border:0; border-radius: 4px; overflow:hidden;"
              title="useToggle" sandbox="allow-scripts allow-same-origin"></iframe>
          </div>
        </div>
        <div class="mb-4">
          <div id="ValidatorForm">
            <h4 class="blue-title">ValidatorForm</h4>
            <p>
              This component extends the original ValidatorForm rules. This component works for wrap TextValidator component(s) and for register any other custom rules, this rules can be used in the wrapped components.
              Rules:
              isNotAllBlanks: Validates that the input is not empty, white spaces are ignored.
              maxNaturalNumber: Validates that the input number si not greather than the given.
              validateEndDate: Validates than endDate is later than startDate.
              startDateGreaterThanEndDate: Validates that a date is bigger than other.
              isImage: Verify that the input correspond to a image name with image file extension.
              atLeastOneLowerAndUpperCase: Verify that the input has at least one letter in lower case and one in upper case.
              atLeastOneNumber: Verify that the input has at least one number.
              atLeastOneSpecialCharacter: Verify that the input has at least one special character (e.g. * # $ &).
              pincodeValidator: Verify the input contains only numeric values and has a length of 6 characters.
              password: Validated that the input has at least a length of 8 characteres and contains especial characters, lower case & upper case characters.
              isPasswordMatch: Verify that the input is equal to another value. (e.g. when validated password & password verfication fields).
            </p>
          </div>
          <div>
            <iframe
              src="https://codesandbox.io/embed/uno-reactusetoggle-demo-i39t7?fontsize=14&hidenavigation=1&theme=dark&previewwindow=console&view=split"
              style="width:100%; height:300px; border:0; border-radius: 4px; overflow:hidden;"
              title="useToggle" sandbox="allow-scripts allow-same-origin"></iframe>
          </div>
        </div>
      </div>
      <div class="col-2 toc">
        <ul>
          <li>
            <p class="navbar-brand pl-3">Table of Content</p>
          </li>
          <li>
            <a class="nav-link" href="#useClickOutside">useClickOutside</a>
          </li>
          <li>
            <a class="nav-link" href="#useEffectWithDebounce">useEffectWithDebounce</a>
          </li>
          <li>
            <a class="nav-link" href="#useEffectWithLoading">useEffectWithLoading</a>
          </li>
          <li>
            <a class="nav-link" href="#useNow">useNow</a>
          </li>
          <li>
            <a class="nav-link" href="#usePersistedState">usePersistedState</a>
          </li>
          <li>
            <a class="nav-link" href="#useResolutionSwitch">useResolutionSwitch</a>
          </li>
          <li>
            <a class="nav-link" href="#useStateForField">useStateForField</a>
          </li>
          <li>
            <a class="nav-link" href="#useStateForModel">useStateForModel</a>
          </li>
          <li>
            <a class="nav-link" href="#useStateForModelWithLoading">useStateForModelWithLoading</a>
          </li>
          <li>
            <a class="nav-link" href="#useToggle">useToggle</a>
          </li>
          <li>
            <a class="nav-link" href="#ValidatorForm">ValidatorForm</a>
          </li>
        </ul>
      </div>
