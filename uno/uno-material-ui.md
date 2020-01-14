---
layout: default
title: "Open Source Software Initiatives from Unosquare | uno-material-ui"
description: "Check out uno-material-ui, a Typescript library with components and extensions for Material UI (React)."
---

<div class="container content-home d-flex flex-row">
      <div class="col-10 p-0">
        <div class="d-flex flex-row space-between">
          <h2>uno-material-ui</h2>
          <a href="https://www.npmjs.com/package/uno-material-ui" class="first-icon">
            <img class="npm-icon" src="/assets/npm.svg" alt="uno-material-ui npm" title="uno-material-ui npm"/>
          </a>
          <a href="https://github.com/unosquare/uno-material-ui">
            <img class="github-icon" src="/assets/github.png" alt="uno-material-ui Github Repo" title="uno-material-ui Github Repo"/>
          </a>
        </div>
        <p>Components and extensions for Material UI library (https://material-ui.com) for all your funcionality that your React app requires.</p>
        <div class="mb-4">
          <div id="ButtonWithLoading">
            <h4 class="blue-title">ButtonWithLoading</h4>
            <p>
              A button that adds an animated loading icon when the action is resolving.
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
                  <td>Starting array with RGB values, e.g. [255, 255, 255]</td>
                  <td>No</td>
                </tr>
                <tr>
                  <td>Array</td>
                  <td>Ending array with RGB values, e.g. [255, 255, 255]</td>
                  <td>No</td>
                </tr>
                <tr>
                  <td>Number</td>
                  <td>The factor which will multiply the values.</td>
                  <td>No</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <iframe
              src="https://codesandbox.io/embed/uno-material-uibuttonwithloading-gkg1q?fontsize=14&hidenavigation=1&theme=dark"
              style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
              title="uno-material-ui/ButtonWithLoading"
              sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
            ></iframe>
          </div>
        </div>
        <div class="mb-4">
          <div id="ConfirmationDialog">
            <h4 class="blue-title">ConfirmationDialog</h4>
            <p>
              A customizable dialog to confirm important actions like to delete an item.
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
                  <td>Function to be executed after the lapse finishes.</td>
                  <td>No</td>
                </tr>
                <tr>
                  <td>Number</td>
                  <td>Milliseconds until the function will execute.</td>
                  <td>No</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <iframe
              src="https://codesandbox.io/embed/uno-material-uiconfirmationdialog-gwgre?fontsize=14&hidenavigation=1&theme=dark"
              style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
              title="uno-material-ui/ConfirmationDialog"
              sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
            ></iframe>
          </div>
        </div>
        <div class="mb-4">
          <div id="ErrorBoundary">
            <h4 class="blue-title">ErrorBoundary</h4>
            <p>
              This container catch any error in the children, displaying it, avoiding that the whole app crashes.
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
                  <td>String to humanize</td>
                  <td>No</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="mb-4">
          <div id="FixedLinearProgress">
            <h4 class="blue-title">FixedLinearProgress</h4>
            <p>
              A linear progress component.
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
                  <td>First object to be compared.</td>
                  <td>No</td>
                </tr>
                <tr>
                  <td>Object</td>
                  <td>Second object to be compared.</td>
                  <td>No</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <iframe
              src="https://codesandbox.io/embed/uno-material-uifixedlinearprogress-zyylp?fontsize=14&hidenavigation=1&theme=dark&previewwindow=console&view=split"
              style="width:100%; height:300px; border:0; border-radius: 4px; overflow:hidden;"
              title="uno-material-ui/FixedLinearProgress" sandbox="allow-scripts allow-same-origin"></iframe>
          </div>
        </div>
        <div class="mb-4">
          <div id="FormModal">
            <h4 class="blue-title">FormModal</h4>
            <p>
              A wrapper for your modals with a form logic, just add input fields.
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
                  <td>Array of objects to be evaluated.</td>
                  <td>No</td>
                </tr>
                <tr>
                  <td>String</td>
                  <td>Prop to be evaluated.</td>
                  <td>No</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <iframe
              src="https://codesandbox.io/embed/uno-material-uiformmodal-ewusv?fontsize=14&hidenavigation=1&theme=dark&previewwindow=console&view=split"
              style="width:100%; height:300px; border:0; border-radius: 4px; overflow:hidden;"
              title="uno-material-ui/FormModal" sandbox="allow-scripts allow-same-origin"></iframe>
          </div>
        </div>
        <div class="mb-4">
          <div id="FormSwitch">
            <h4 class="blue-title">FormSwitch</h4>
            <p>
              An useful switch component with label, perfect for forms.
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
          </div>
          <div>
            <iframe
              src="https://codesandbox.io/embed/uno-material-uiformswitch-796ng?fontsize=14&hidenavigation=1&theme=dark&previewwindow=console&view=split"
              style="width:100%; height:300px; border:0; border-radius: 4px; overflow:hidden;"
              title="uno-material-ui/FormSwitch" sandbox="allow-scripts allow-same-origin"></iframe>
          </div>
        </div>
        <div class="mb-4">
          <div id="IndeterminatedLoading">
            <h4 class="blue-title">IndeterminatedLoading</h4>
            <p>
              A screen-wide modal that blocks the entire UI to prevent interruption during loading or fetching.
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
          </div>
          <div>
            <iframe
              src="https://codesandbox.io/embed/uno-material-uiindeterminatedloading-vubgx?fontsize=14&hidenavigation=1&theme=dark&previewwindow=console&view=split"
              style="width:100%; height:300px; border:0; border-radius: 4px; overflow:hidden;"
              title="uno-material-ui/IndeterminatedLoading" sandbox="allow-scripts allow-same-origin"></iframe>
          </div>
        </div>
        <div class="mb-4">
          <div id="LoadingIcon">
            <h4 class="blue-title">LoadingIcon</h4>
            <p>
              A center-aligned circular loading animation.
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
          </div>
          <div>
            <iframe
              src="https://codesandbox.io/embed/uno-material-uiloadingicon-ugguf?fontsize=14&hidenavigation=1&theme=dark"
              style="width:100%; height:300px; border:0; border-radius: 4px; overflow:hidden;"
              title="uno-material-ui/LoadingIcon"
              sandbox="allow-scripts allow-same-origin"
            ></iframe>
          </div>
        </div>
        <div class="mb-4">
          <div id="MenuList">
            <h4 class="blue-title">MenuList</h4>
            <p>
              A left-side permanent drawer to display navigation options,
              it leaves an space to add a Navbar.
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
          </div>
          <div>
            <iframe
              src="https://codesandbox.io/embed/uno-material-uimenulist-uzuhe?fontsize=14&hidenavigation=1&theme=dark"
              style="width:100%; height:300px; border:0; border-radius: 4px; overflow:hidden;"
              title="uno-material-ui/MenuList"
              sandbox="allow-scripts allow-same-origin"
            ></iframe>
          </div>
        </div>
        <div class="mb-4">
          <div id="NavBar">
            <h4 class="blue-title">NavBar</h4>
            <p>
              A navbar. Uses primary color of your theme. You can add a title or logo, and buttons.
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
          </div>
          <div>
            <iframe
              src="https://codesandbox.io/embed/uno-material-uinavbar-nsk7f?fontsize=14&hidenavigation=1&theme=dark"
              style="width:100%; height:300px; border:0; border-radius: 4px; overflow:hidden;"
              title="uno-material-ui/NavBar"
              sandbox="allow-scripts allow-same-origin"
            ></iframe>
          </div>
        </div>
        <div class="mb-4">
          <div id="TextValidator">
            <h4 class="blue-title">SnackbarContainer</h4>
            <p>
              A global snackbar component implemented using Observer pattern, reducing the load on re-renders. It has to be immediately after your ThemeProvider tag
              because the snackbar type colors are based on the theme. Just add the container and consume the service at any children on your app.
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
          </div>
          <div>
            <iframe
              src="https://codesandbox.io/embed/uno-material-uisnackbar-lwylt?fontsize=14&hidenavigation=1&theme=dark&previewwindow=console&view=split"
              style="width:100%; height:300px; border:0; border-radius: 4px; overflow:hidden;"
              title="uno-material-ui/SnackbarContainer" sandbox="allow-scripts allow-same-origin"></iframe>
          </div>
        </div>
        <div class="mb-4">
          <div id="TextValidator">
            <h4 class="blue-title">TextValidator</h4>
            <p>
              An input with validations.
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
          </div>
          <div>
            <iframe
              src="https://codesandbox.io/embed/uno-material-uitextvalidator-zh9xl?fontsize=14&hidenavigation=1&theme=dark"
              style="width:100%; height:300px; border:0; border-radius: 4px; overflow:hidden;"
              title="uno-material-ui/TextValidator"
              sandbox="allow-scripts allow-same-origin"
            ></iframe>
          </div>
        </div>
        <div class="mb-4">
          <div id="ThumbnailPhoto">
            <h4 class="blue-title">ThumbnailPhoto</h4>
            <p>
              An small avatar to display a photo with tooltip.
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
          </div>
          <div>
            <iframe
              src="https://codesandbox.io/embed/uno-material-uithumbnailphoto-y8bbb?fontsize=14&hidenavigation=1&theme=dark"
              style="width:100%; height:300px; border:0; border-radius: 4px; overflow:hidden;"
              title="uno-material-ui/ThumbnailPhoto"
              sandbox="allow-scripts allow-same-origin"
            ></iframe>
          </div>
        </div>
        <div class="mb-4">
          <div id="Title">
            <h4 class="blue-title">Title</h4>
            <p>
              A title, it also changes the document title,
              so it is displayed on the tab of your web browser.
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
          </div>
          <div>
            <iframe
              src="https://codesandbox.io/embed/uno-material-uititle-gw7xq?fontsize=14&hidenavigation=1&theme=dark"
              style="width:100%; height:300px; border:0; border-radius: 4px; overflow:hidden;"
              title="uno-material-ui/Title"
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
            <a class="nav-link" href="#ButtonWithLoading">ButtonWithLoading</a>
          </li>
          <li>
            <a class="nav-link" href="#ConfirmationDialog">ConfirmationDialog</a>
          </li>
          <li>
            <a class="nav-link" href="#ErrorBoundary">ErrorBoundary</a>
          </li>
          <li>
            <a class="nav-link" href="#FixedLinearProgress">FixedLinearProgress</a>
          </li>
          <li>
            <a class="nav-link" href="#FormModal">FormModal</a>
          </li>
          <li>
            <a class="nav-link" href="#FormSwitch">FormSwitch</a>
          </li>
          <li>
            <a class="nav-link" href="#IndeterminatedLoading">IndeterminatedLoading</a>
          </li>
          <li>
            <a class="nav-link" href="#LoadingIcon">LoadingIcon</a>
          </li>
          <li>
            <a class="nav-link" href="#MenuList">MenuList</a>
          </li>
          <li>
            <a class="nav-link" href="#NavBar">NavBar</a>
          </li>
          <li>
            <a class="nav-link" href="#SnackbarContainer">SnackbarContainer</a>
          </li>
          <li>
            <a class="nav-link" href="#TextValidator">TextValidator</a>
          </li>
          <li>
            <a class="nav-link" href="#ThumbnailPhoto">ThumbnailPhoto</a>
          </li>
          <li>
            <a class="nav-link" href="#Title">Title</a>
          </li>
        </ul>
      </div>