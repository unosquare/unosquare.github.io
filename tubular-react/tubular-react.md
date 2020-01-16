---
layout: default
title: "Tubular-React is a Material-UI table with local or remote data-source. | tubular-react"
description: "Check out uno-react, a Typescript library with common functions and hooks for React"
---

<div class="container content-home d-flex flex-row">
      <div class="col-10 p-0">
        <div class="d-flex flex-row space-between">
          <h2>tubular-react</h2>
          <a href="https://www.npmjs.com/package/tubular-react" class="first-icon">
            <img class="npm-icon" src="/assets/npm.svg" alt="tubular-react npm" title="tubular-react npm"/>
          </a>
          <a href="https://github.com/unosquare/tubular-react">
            <img class="github-icon" src="/assets/github.png" alt="tubular-react Github Repo" title="tubular-react Github Repo"/>
          </a>
        </div>
        <p>Tubular-React is a Material-UI table with local or remote data-source.</p>
      </div>
      <div class="mb-4">
        <div id="RemoteDataGrid-footerComponent">
          <h4 class="blue-title">Remote Data Grid</h4>
          <p>
            Data grid that fetches its data from a URL or 
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
      </div>
```tsx
{% raw %}
import * as React from "react";
import ReactDOM from "react-dom";
import { useEffectWithDebounce, useStateForField } from "uno-react";
import "./styles.css";
function App() {
  const [searchText, handleChange, setSearchText] = useStateForField("");
  const debounceTime = 2000; // 2 Seconds
  const searchUsers = () => console.log(`searching: ${searchText}`);
  useEffectWithDebounce(searchUsers, debounceTime, [searchText]);
  return (
    <div className="App">
      <h1>Uno-React</h1>
      <h2>useEffectWithDebounce</h2>
      <h3>Constantly check for changes!</h3>
      <>
        <h1>Input: </h1>
        <input value={searchText} onChange={handleChange} />
        <p> Open the console </p>
      </>
    </div>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
{% endraw %}
```
<button class="nav-link link-blue" onclick="convert(this, 'uno-reactuseeffectwithdebounce-demo-08ugt');">Open CodeSanbox</button>
      <div class="mb-4">
        <div id="RemoteDataGrid-footerComponent">
          <h4 class="blue-title">Remote Data Grid</h4>
          <p>
            Data grid that fetches its data from a URL or 
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
      </div>
```tsx
{% raw %}
import * as React from "react";
import ReactDOM from "react-dom";
import { useEffectWithDebounce, useStateForField } from "uno-react";
import "./styles.css";
function App() {
  const [searchText, handleChange, setSearchText] = useStateForField("");
  const debounceTime = 2000; // 2 Seconds
  const searchUsers = () => console.log(`searching: ${searchText}`);
  useEffectWithDebounce(searchUsers, debounceTime, [searchText]);
  return (
    <div className="App">
      <h1>Uno-React</h1>
      <h2>useEffectWithDebounce</h2>
      <h3>Constantly check for changes!</h3>
      <>
        <h1>Input: </h1>
        <input value={searchText} onChange={handleChange} />
        <p> Open the console </p>
      </>
    </div>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
{% endraw %}
```
<button class="nav-link link-blue" onclick="convert(this, 'uno-reactuseeffectwithdebounce-demo-08ugt');">Open CodeSanbox</button>
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
</div>
```
