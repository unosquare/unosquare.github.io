---
layout: page
title: "Open Source Software Initiatives from Unosquare | uno-react"
description: "Check out uno-react, a Typescript library with common functions and hooks for React"
---
<div class="container content-home d-flex flex-row">
  <div class="col-lg-10 col-xl-10 col-sm-12 col-md-12 p-0">
    <div class="d-flex flex-row space-between">
      <h2>uno-react</h2>
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
      <code>
        <pre>
          import { useClickOutside } from "uno-react";
          function App() {
            const [color, setColor] = React.useState("green");
            const onClick = () => setColor("green");
            const toBeEnhanced = () => (
              < div
                className='DemoDiv'
                style={{
                  backgroundColor: color,
                  color: "#fff",
                  height: "100%",
                  padding: "5px"
                }}
                onClick={onClick}
              >
                Click me to reset!
              < /div>
            );
            const functionToApply = () => setColor("red");
            const Enhanced = useClickOutside(toBeEnhanced, functionToApply);
            return (
              < div className="App">
                < h1>Uno-React< /h1>
                < h2>useClickOutside< /h2>
                < h3>Click outside component to see magic!< /h3>
                < div
                  style={{
                    height: "100px",
                    width: "100px",
                    display: "block",
                    margin: "auto"
                  }}
                >
                  < Enhanced />
                < /div>
              < /div>
            );
          }
        </pre>
      </code>
      <div class="calltoaction calltoaction-md d-flex justify-content-end m-0">
        <a class="nav-link link-blue button" onclick="convert(this, 'uno-reactuseclickoutside-demo-flf7c');">Open CodeSandbox</a>
      </div>
    </div>
    <div class="mb-4">
      <div id="useEffectWithDebounce">
        <h4 class="blue-title">useEffectWithDebounce</h4>
        <p>
          This hooks run an effect with a debounce. Each time any input change, it will be registered.
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
      <code>
        <pre>
          import { useEffectWithDebounce, useStateForField } from "uno-react";
          function App() {
            const [searchText, handleChange, setSearchText] = useStateForField("");
            const debounceTime = 2000;
            const searchUsers = () => console.log(`searching: ${searchText}`);
            useEffectWithDebounce(searchUsers, debounceTime, [searchText]);
            return (
              < div className="App">
                < h1>Uno-React< /h1>
                < h2>useEffectWithDebounce< /h2>
                < h3>Constantly check for changes!< /h3>
                <>
                  < h1>Input: < /h1>
                  < input value={searchText} onChange={handleChange} />
                  < p> Open the console < /p>
                </>
              < /div>
            );
          }
        </pre>
      </code>
      <div class="calltoaction calltoaction-md d-flex justify-content-end m-0">
        <a class="nav-link link-blue button" onclick="convert(this, 'uno-reactuseeffectwithdebounce-demo-08ugt');">Open CodeSandbox</a>
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
      <code>
        <pre>
          import { useEffectWithLoading } from "uno-react";
          function getMyData(input) {
            return new Promise<{}>(resolve => {
              setTimeout(() => resolve(input), 5000);
            });
          }
          function App() {
            const myId = "Hey! I'm your data! :D";
            const myDefault = "";
            const inputs = [];
            const [myData, isLoading] = useEffectWithLoading(
              () => getMyData(myId),
              myDefault,
              inputs
            );
            return (
              < div className="App">
                < h1>Uno-React< /h1>
                < h2>useEffectWithLoading< /h2>
                < h3>Wait for your info to load!< /h3>
                < div>
                  {isLoading ? (
                    < div>Loading ...< /div>
                  ) : (
                    < form>
                      < label>
                        < h1>Data loaded< /h1>
                        {myData}
                      < /label>
                    < /form>
                  )}
                < /div>
              < /div>
            );
          }
        </pre>
      </code>
      <div class="calltoaction calltoaction-md d-flex justify-content-end m-0">
        <a class="nav-link link-blue button" onclick="convert(this, 'uno-reactuseeffectwithloading-demo-t9p6v');">Open CodeSandbox</a>
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
      <code>
        <pre>
          import { useNow } from "uno-react";
          function App() {
            const [now] = useNow();
            return (
              < div className="App">
                < h1>Uno-React< /h1>
                < h2>useNow< /h2>
                < h3>Watch the seconds fly by!< /h3>
                < div>Seconds: {now.getSeconds()}< /div>
              < /div>
            );
          }
        </pre>
      </code>
      <div class="calltoaction calltoaction-md d-flex justify-content-end m-0">
        <a class="nav-link link-blue button" onclick="convert(this, 'uno-reactusenow-demo-hbe1t');">Open CodeSandbox</a>
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
      <code>
        <pre>
          import { usePersistedState } from "uno-react";
          function App() {
            const key = "exampleToken";
            const defaultValue = "unosquareToken";
            const [token, setToken] = usePersistedState(defaultValue, key);
            const changeValue = () => setToken("1928238475");
            return (
              < div className="App">
                < h1>Uno-React< /h1>
                < h2>usePersistedState< /h2>
                < h3>Change value and watch the console!< /h3>
                < div>
                  < h1>{token}< /h1>
                  < button onClick={changeValue}>Change value< /button>
                < /div>
                < br />
                < div>{`This value is now in your Local Storage: ${localStorage.getItem(
                  key
                )}`}< /div>
              < /div>
            );
          }
        </pre>
      </code>
      <div class="calltoaction calltoaction-md d-flex justify-content-end m-0">
        <a class="nav-link link-blue button" onclick="convert(this, 'uno-reactusepersistedstate-demo-ome0b');">Open CodeSandbox</a>
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
      <code>
        <pre>
          import { useResolutionSwitch } from "uno-react";
          function App() {
            const outerWidth = 1000;
            const timeout = 1000;
            const [size] = useResolutionSwitch(outerWidth, timeout);
            return (
              < div className="App">
                < h1>Uno-React< /h1>
                < h2>useResolutionSwitch< /h2>
                < h3>Resize the window and watch the magic!< /h3>
                < h1>{size ? "mobile" : "desktop"}< /h1>
              < /div>
            );
          }
        </pre>
      </code>
      <div class="calltoaction calltoaction-md d-flex justify-content-end m-0">
        <a class="nav-link link-blue button" onclick="convert(this, 'uno-reactuseresolutionswitch-demo-ex1fg');">Open CodeSandbox</a>
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
      <code>
        <pre>
          import { useStateForField } from "uno-react";
          function App() {
            const [myValue, handleChange, setMyValue] = useStateForField("");
            const reset = () => setMyValue("");
            return (
              < div className="App">
                < h1>Uno-React< /h1>
                < h2>useStateForField< /h2>
                < h3>Enter a new input to see magic!< /h3>
                < div>
                  < h1>{myValue}< /h1>
                  < input value={myValue} onChange={handleChange} />
                  < button onClick={reset}>Reset value< /button>
                < /div>
              < /div>
            );
          }
        </pre>
      </code>
      <div class="calltoaction calltoaction-md d-flex justify-content-end m-0">
        <a class="nav-link link-blue button" onclick="convert(this, 'uno-reactusestateforfield-demo-2xuq3');">Open CodeSandbox</a>
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
      <code>
        <pre>
          import { useStateForModel } from "uno-react";
          function App() {
            const [model, handleChange] = useStateForModel({
              id: 1,
              name: "John",
              lastName: "Doe"
            });
            const changeName = () => handleChange({ name: "John" });
            return (
              < div className="App">
                < h1>Uno-React< /h1>
                < h2>useStateForModel< /h2>
                < h3>Write your name and watch what happens!< /h3>
                < div>
                  < h1>
                    {model.id} - {model.name} - {model.lastName}
                  < /h1>
                  < input name="name" onChange={handleChange} value={model.name} />
                  < input name="lastName" onChange={handleChange} value={model.lastName} />
                  < button onClick={changeName}>Reset Name< /button>
                < /div>
              < /div>
            );
          }
        </pre>
      </code>
      <div class="calltoaction calltoaction-md d-flex justify-content-end m-0">
       <a class="nav-link link-blue button" onclick="convert(this, 'uno-reactusestateformodel-demo-lmkuh');">Open CodeSandbox</a>
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
      <code>
        <pre>
          import { useEffectWithDebounce, useStateForField } from "uno-react";
          function App() {
            const [searchText, handleChange, setSearchText] = useStateForField("");
            const debounceTime = 2000; // 2 Seconds
            const searchUsers = () => console.log(`searching: ${searchText}`);
            useEffectWithDebounce(searchUsers, debounceTime, [searchText]);
            return (
              < div className="App">
                < h1>Uno-React< /h1>
                < h2>useEffectWithDebounce< /h2>
                < h3>Constantly check for changes!< /h3>
                <>
                  < h1>Input: < /h1>
                  < input value={searchText} onChange={handleChange} />
                  < p> Open the console < /p>
                </>
              < /div>
            );
          }
        </pre>
      </code>
      <div class="calltoaction calltoaction-md d-flex justify-content-end m-0">
        <a class="nav-link link-blue button" onclick="convert(this, 'uno-reactusestateformodelwithloading-demo-6294s');">Open CodeSandbox</a>
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
      <code>
        <pre>
          import { useToggle } from "uno-react";
          function App() {
            const defaultValue = false;
            const [myValue, toggle] = useToggle(defaultValue);
            return (
              < div className="App">
                < h1>Uno-React< /h1>
                < h2>useToggle< /h2>
                < h3>Switch on and off!< /h3>
                < div>
                  < h1 style={{ color: myValue ? "#00f" : "#f00" }}>
                    {myValue ? "On" : "Off"}
                  < /h1>
                  < button onClick={toggle}>Toggle< /button>
                < /div>
              < /div>
            );
          }
        </pre>
      </code>
      <div class="calltoaction calltoaction-md d-flex justify-content-end m-0">
        <a class="nav-link link-blue button" onclick="convert(this, 'uno-reactusetoggle-demo-i39t7');">Open CodeSandbox</a>
      </div>
    </div>
    <div class="mb-4">
      <div id="ValidatorForm">
        <h4 class="blue-title">ValidatorForm</h4>
        <p>
          This component extends the original ValidatorForm rules. This component works for wrap TextValidator component(s) and for register any other custom rulthis rules can     be used in the wrapped components.
        </p>
        <b>Rules:</b>
        <ul>
          <li>isNotAllBlanks: Validates that the input is not empty, white spaces are ignored.</li>
          <li>maxNaturalNumber: Validates that the input number si not greather than the given.</li>
          <li>validateEndDate: Validates than endDate is later than startDate.</li>
          <li>startDateGreaterThanEndDate: Validates that a date is bigger than other.</li>
          <li>isImage: Verify that the input correspond to a image name with image file extension.</li>
          <li>atLeastOneLowerAndUpperCase: Verify that the input has at least one letter in lower case and one in upper case.</li>
          <li>atLeastOneNumber: Verify that the input has at least one number.</li>
          <li>atLeastOneSpecialCharacter: Verify that the input has at least one special character (e.g. * # $ &).</li>
          <li>pincodeValidator: Verify the input contains only numeric values and has a length of 6 characters.</li>
          <li>password: Validated that the input has at least a length of 8 characteres and contains especial characters, lower case & upper case characters.</li>
          <li>isPasswordMatch: Verify that the input is equal to another value. (e.g. when validated password & password verfication fields).</li>
        </ul>
      </div>
      <code>
        <pre>
          import { useStateForModel, ValidatorForm } from "uno-react";
          function App() {
            const [fields, handleChange] = useStateForModel({
              isNotAllBlanks: ""
            });
            const onSubmit = () => console.log("has submitted");
            return (
              < div className="App">
                < h1>Uno-React< /h1>
                < h2>ValidatorForm< /h2>
                < h3>Make sure you're filling everything right!< /h3>
                < ValidatorForm
                  onSubmit={onSubmit}
                  autoComplete="off"
                  instantValidate={true}
                >
                  < TextValidator
                    id="isNotAllBlanks"
                    name="isNotAllBlanks"
                    value={fields.isNotAllBlanks}
                    onChange={handleChange}
                    validators={["required", "isNotAllBlanks:5"]}
                    errorMessages={[
                      "This field is required",
                      "The minimum length is 5 characters, blank spaces are ignored"
                    ]}
                  />
                < /ValidatorForm>
              < /div>
            );
          }
        </pre>
      </code>
      <div class="calltoaction calltoaction-md d-flex justify-content-end m-0">
        <a class="nav-link link-blue button" onclick="convert(this, 'uno-reacttextvalidator-demo-9l3sl');">Open CodeSandbox</a>
      </div>
    </div>
  </div>
  <div class="col-2 toc d-none d-lg-block">
    <ul>
      <li><p class="navbar-brand pl-3">Table of Content</p></li>
      <li><a class="nav-link" href="#useClickOutside">useClickOutside</a></li>
      <li><a class="nav-link" href="#useEffectWithDebounce">useEffectWithDebounce</a></li>
      <li><a class="nav-link" href="#useEffectWithLoading">useEffectWithLoading</a></li>
      <li><a class="nav-link" href="#useNow">useNow</a></li>
      <li><a class="nav-link" href="#usePersistedState">usePersistedState</a></li>
      <li><a class="nav-link" href="#useResolutionSwitch">useResolutionSwitch</a></li>
      <li><a class="nav-link" href="#useStateForField">useStateForField</a></li>
      <li><a class="nav-link" href="#useStateForModel">useStateForModel</a></li>
      <li><a class="nav-link" href="#useStateForModelWithLoading">useStateForModelWithLoading</a></li>
      <li><a class="nav-link" href="#useToggle">useToggle</a></li>
      <li><a class="nav-link" href="#ValidatorForm">ValidatorForm</a></li>
    </ul>
  </div>
</div>
