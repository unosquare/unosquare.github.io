---
layout: page
title: "Open Source Software Initiatives from Unosquare | uno-material-ui"
description: "Check out uno-material-ui, a Typescript library with components and extensions for Material UI (React)."
---
<div class="container content-home d-flex flex-row">
  <div class="col-lg-10 col-xl-10 col-sm-12 col-md-12 p-0">
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
        <h6>PROPERTIES</h6>
        <table class="table table-striped w-100 mt-2">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Type</th>
              <th scope="col">Description</th>
              <th scope="col">Optional</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>isFetching</td>
              <td>Boolean</td>
              <td>Flag to determine if loading icon will hide/show</td>
              <td>No</td>
            </tr>
            <tr>
              <td>onClick</td>
              <td>Function</td>
              <td>Function executed when clicking on the button</td>
              <td>No</td>
            </tr>
          </tbody>
        </table>
      </div>
      <code>
        <pre class="pre-block">
          import { ButtonWithLoading } from "uno-material-ui";
          const App = () => {
            const [fetching, setFetching] = React.useState(false);
            const start = () => setFetching(true);
            if (fetching) {
              setTimeout(() => setFetching(false), 4000);
            }
            return (
              < div className="App">
                < h1>uno-material-ui< /h1>
                < h2>ButtonWIthLoading< /h2>
                < ButtonWithLoading isFetching={fetching} onClick={start}>
                  Save
                < /ButtonWithLoading>
              < /div>
            );
          };
        </pre>
      </code>
      <a class="nav-link link-blue button" style="width:max-content!important" onclick="convert(this, 'uno-material-uibuttonwithloading-gkg1q', 'editor,browser');">Open CodeSandbox</a>
    </div>
    <hr class="separator"/>
    <div class="mb-4">
      <div id="ConfirmationDialog">
        <h4 class="blue-title">ConfirmationDialog</h4>
        <p>
          A customizable dialog to confirm important actions like to delete an item.
        </p>
        <h6>PROPERTIES</h6>
        <table class="table table-striped w-100 mt-2">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Type</th>
              <th scope="col">Description</th>
              <th scope="col">Optional</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>onAgreeAction</td>
              <td>Function</td>
              <td>Action executed when agree button is pressed</td>
              <td>No</td>
            </tr>
            <tr>
              <td>contentText</td>
              <td>String</td>
              <td>Text rendered inside of modal</td>
              <td>No</td>
            </tr>
            <tr>
              <td>onClose</td>
              <td>Function</td>
              <td>Function executed when closing modal</td>
              <td>No</td>
            </tr>
            <tr>
              <td>open</td>
              <td>Boolean</td>
              <td>Flag to determine if modal is open</td>
              <td>No</td>
            </tr>
            <tr>
              <td>title</td>
              <td>String</td>
              <td>Title of the modal</td>
              <td>No</td>
            </tr>
          </tbody>
        </table>
      </div>
      <code>
        <pre class="pre-block">
          import { ConfirmationDialog } from "uno-material-ui";
          const App = () => {
            const [open, setOpen] = React.useState(false);
            const onCancel = () => setOpen(false);
            const onOpen = () => setOpen(true);
            return (
              < div className="App">
                < h1>uno-material-ui< /h1>
                < h2>ConfirmationDialog< /h2>
                < Button onClick={onOpen}>Open Dialog< /Button>
                < ConfirmationDialog
                  onClose={onCancel}
                  open={open}
                  title={"Confirmation Dialog"}
                  contentText={"Are you sure?"}
                  onAgreeAction={onCancel}
                />
              < /div>
            );
          };
        </pre>
      </code>
      <a class="nav-link link-blue button" style="width:max-content!important" onclick="convert(this, 'uno-material-uiconfirmationdialog-gwgre', 'editor,browser');">Open CodeSandbox</a>
    </div>
    <hr class="separator"/>
    <div class="mb-4">
      <div id="ErrorBoundary">
        <h4 class="blue-title">ErrorBoundary</h4>
        <p>
          This container catch any error in the children, displaying it, avoiding that the whole app crashes.
        </p>
        <h6>PROPERTIES</h6>
        <table class="table table-striped w-100 mt-2">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Type</th>
              <th scope="col">Description</th>
              <th scope="col">Optional</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>error</td>
              <td>String</td>
              <td>Error to render on boundary</td>
              <td>No</td>
            </tr>
            <tr>
              <td>errorInfo</td>
              <td>String</td>
              <td>Info of error to trigger boundary</td>
              <td>No</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <hr class="separator"/>
    <div class="mb-4">
      <div id="FixedLinearProgress">
        <h4 class="blue-title">FixedLinearProgress</h4>
        <p>
          A linear progress component.
        </p>
        <h6>PROPERTIES</h6>
        <table class="table table-striped w-100 mt-2">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Type</th>
              <th scope="col">Description</th>
              <th scope="col">Optional</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>isLoading</td>
              <td>Boolean</td>
              <td>Value to determine if component is rendering</td>
              <td>No</td>
            </tr>
          </tbody>
        </table>
      </div>
      <code>
        <pre class="pre-block">
          import Button from "@material-ui/core/Button";
          import React from "react";
          import ReactDOM from "react-dom";
          import { FixedLinearProgress } from "uno-material-ui";
          import "./styles.css";
          const App = () => {
            const [fetching, setFetching] = React.useState(false);
            const onLoading = () => setFetching(true);
            if (fetching) {
              setTimeout(() => setFetching(false), 4000);
            }
            return (
              < div className="App">
                < h1>uno-material-ui< /h1>
                < h2>FixedLinearProgress< /h2>
                < FixedLinearProgress isLoading={fetching} />
                < Button onClick={onLoading}>Start loading!< /Button>
              < /div>
            );
          };
        </pre>
      </code>
      <a class="nav-link link-blue button" style="width:max-content!important" onclick="convert(this, 'uno-material-uifixedlinearprogress-zyylp', 'editor,browser');">Open CodeSandbox</a>
    </div>
    <hr class="separator"/>
    <div class="mb-4">
      <div id="FormModal">
        <h4 class="blue-title">FormModal</h4>
        <p>
          A wrapper for your modals with a form logic, just add input fields.
        </p>
        <h6>PROPERTIES</h6>
        <table class="table table-striped w-100 mt-2">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Type</th>
              <th scope="col">Description</th>
              <th scope="col">Optional</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>action</td>
              <td>Component</td>
              <td>Component containing the actions of the modal</td>
              <td>No</td>
            </tr>
            <tr>
              <td>onClose</td>
              <td>Function</td>
              <td>Function executed when modal is closed</td>
              <td>No</td>
            </tr>
            <tr>
              <td>onSubmit</td>
              <td>Function</td>
              <td>Function executed when submit action is called</td>
              <td>No</td>
            </tr>
            <tr>
              <td>open</td>
              <td>Boolean</td>
              <td>Flag to determine if modal will render</td>
              <td>No</td>
            </tr>
            <tr>
              <td>title</td>
              <td>String</td>
              <td>Title of the modal</td>
              <td>No</td>
            </tr>
          </tbody>
        </table>
      </div>
      <code>
        <pre class="pre-block">
          import { FormModal } from "uno-material-ui";
          const initialState = { Comments: "" };
          const App = () => {
            const [open, setOpen] = React.useState(false);
            const [state, setState] = React.useState(initialState);
            const onCancel = () => setOpen(false);
            const onOpen = () => setOpen(true);
            const changeNotes = (event: any) =>
              setState({
                ...state,
                Comments: event.target.value
              });
            const handleSubmit = () => {
              alert("Hi, this is the comment:" + state.Comments);
              onCancel();
            };
            const Actions: React.FunctionComponent = () => (
                  < Button onClick={onCancel}> Cancel < /Button>
                  < Button type="submit"> Save < /Button>
            );
            return (
              < div>
                < h1>uno-material-ui< /h1>
                < h2>FormModal< /h2>
                < Button onClick={onOpen}>Open Dialog< /Button>
                < FormModal
                  actions={< Actions />}
                  onClose={onCancel}
                  onSubmit={handleSubmit}
                  open={open}
                  maxWidth="md"
                  fullWidth={true}
                  title="Form Modal"
                >
                  < TextField
                    fullWidth={true}
                    label="Notes"
                    multiline={true}
                    variant="outlined"
                    value={state.Comments}
                    onChange={changeNotes}
                    rows={4}
                  />
                < /FormModal>
              < /div>
            );
          };
        </pre>
      </code>
      <a class="nav-link link-blue button" style="width:max-content!important" onclick="convert(this, 'uno-material-uiformmodal-ewusv', 'editor,browser');">Open CodeSandbox</a>
    </div>
    <hr class="separator"/>
    <div class="mb-4">
      <div id="FormSwitch">
        <h4 class="blue-title">FormSwitch</h4>
        <p>
          An useful switch component with label, perfect for forms.
        </p>
        <h6>PROPERTIES</h6>
        <table class="table table-striped w-100 mt-2">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Type</th>
              <th scope="col">Description</th>
              <th scope="col">Optional</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>checked</td>
              <td>Boolean</td>
              <td>Value to determine if switch is on or off</td>
              <td>No</td>
            </tr>
            <tr>
              <td>label</td>
              <td>String</td>
              <td>Label that shows user the value being changed</td>
              <td>No</td>
            </tr>
            <tr>
              <td>onChange</td>
              <td>Function</td>
              <td>Function to toggle value or/off</td>
              <td>No</td>
            </tr>
          </tbody>
        </table>
      </div>
      <code>
        <pre class="pre-block">
          import { FormSwitch } from "uno-material-ui";
          const App = () => {
            const [value, setValue] = React.useState(false);
            const onChange = () => {
              setValue(!value);
            };
            return (
              < div className="App">
                < h1>uno-material-ui< /h1>
                < h2>FormSwitch< /h2>
                < FormSwitch checked={value} label="Switchable" onChange={onChange} />
                < FormSwitch
                  checked={true}
                  disabled={true}
                  label="Disabled"
                  labelPlacement="bottom-start"
                  onChange={onChange}
                />
              < /div>
            );
          };
        </pre>
      </code>
      <a class="nav-link link-blue button" style="width:max-content!important" onclick="convert(this, 'uno-material-uiformswitch-796ng', 'editor,browser');">Open CodeSandbox</a>
    </div>
    <hr class="separator"/>
    <div class="mb-4">
      <div id="IndeterminatedLoading">
        <h4 class="blue-title">IndeterminatedLoading</h4>
        <p>
          A screen-wide modal that blocks the entire UI to prevent interruption during loading or fetching.
        </p>
        <h6>PROPERTIES</h6>
        <table class="table table-striped w-100 mt-2">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Type</th>
              <th scope="col">Description</th>
              <th scope="col">Optional</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>isLoading</td>
              <td>Boolean</td>
              <td>Value that controls the rendering of the component. Once false, the component will hide</td>
              <td>No</td>
            </tr>
          </tbody>
        </table>
      </div>
      <code>
        <pre class="pre-block">
          import { IndeterminatedLoading } from "uno-material-ui";
          const App = () => {
            const [fetching, setFetching] = React.useState(false);
            const startFetching = () => setFetching(true);
            if (fetching) {
              setTimeout(() => setFetching(false), 4000);
            }
            return (
              < div className="App">
                < h1>uno-material-ui< /h1>
                < h2>IndeterminatedLoading< /h2>
                < Button onClick={startFetching}> Start Fetching < /Button>
                < IndeterminatedLoading isLoading={fetching} />
              < /div>
            );
          };
        </pre>
      </code>
      <a class="nav-link link-blue button" style="width:max-content!important" onclick="convert(this, 'uno-material-uiindeterminatedloading-vubgx', 'editor,browser');">Open CodeSandbox</a>
    </div>
    <hr class="separator"/>
    <div class="mb-4">
      <div id="LoadingIcon">
        <h4 class="blue-title">LoadingIcon</h4>
        <p>
          A center-aligned circular loading animation.
        </p>
        <h6>PROPERTIES</h6>
        <table class="table table-striped w-100 mt-2">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Type</th>
              <th scope="col">Description</th>
              <th scope="col">Optional</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>color</td>
              <td>string</td>
              <td>Determines which MUI color to use for the component</td>
              <td>No</td>
            </tr>
          </tbody>
        </table>
      </div>
      <code>
        <pre class="pre-block">
          import { LoadingIcon } from "uno-material-ui";
          export default function App() {
            return (
              < div className="App">
                < h1>LoadingIcon< /h1>
                < h2>You can represent a loading process on screen< /h2>
                < LoadingIcon color="primary" />
                < LoadingIcon color="secondary" />
                < LoadingIcon color="default" />
              < /div>
            );
          }
        </pre>
      </code>
      <a class="nav-link link-blue button" style="width:max-content!important" onclick="convert(this, 'uno-material-uiloadingicon-ugguf', 'editor,browser');">Open CodeSandbox</a>
    </div>
    <hr class="separator"/>
    <div class="mb-4">
      <div id="MenuList">
        <h4 class="blue-title">MenuList</h4>
        <p>
          A left-side permanent drawer to display navigation options,
          it leaves an space to add a Navbar.
        </p>
      </div>
      <code>
        <pre class="pre-block">
          import { MenuList } from "uno-material-ui";
          const App: React.FunctionComponent = () => {
            return (
              < div className="App">
                < h1>MenuList< /h1>
                < h2>Create a custom list!< /h2>
                < MenuList>
                  < ListItem button={true}>
                    < ListItemText secondary="Dashboard" />
                  < /ListItem>
                  < ListItem button={true}>
                    < ListItemText secondary="Tools" />
                  < /ListItem>
                < /MenuList>
              < /div>
            );
          };
        </pre>
      </code>
      <a class="nav-link link-blue button" style="width:max-content!important" onclick="convert(this, 'uno-material-uimenulist-uzuhe', 'editor,browser');">Open CodeSandbox</a>
    </div>
    <hr class="separator"/>
    <div class="mb-4">
      <div id="NavBar">
        <h4 class="blue-title">NavBar</h4>
        <p>
          A navbar. Uses primary color of your theme. You can add a title or logo, and buttons.
        </p>
        <h6>PROPERTIES</h6>
        <table class="table table-striped w-100 mt-2">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Type</th>
              <th scope="col">Description</th>
              <th scope="col">Optional</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>title</td>
              <td>String</td>
              <td>Title inside navigation bar</td>
              <td>No</td>
            </tr>
          </tbody>
        </table>
      </div>
      <code>
        <pre class="pre-block">
          import { NavBar } from "uno-material-ui";
          export default function App() {
            return (
              < div className="App">
                < NavBar title={"NavBar"} />
                < h2>Set a header navigation bar and customize at your will!< /h2>
              < /div>
            );
          }
        </pre>
      </code>
      <a class="nav-link link-blue button" style="width:max-content!important" onclick="convert(this, 'uno-material-uinavbar-nsk7f', 'editor,browser');">Open CodeSandbox</a>
    </div>
    <hr class="separator"/>
    <div class="mb-4">
      <div id="TextValidator">
        <h4 class="blue-title">SnackbarContainer</h4>
        <p>
          A global snackbar component implemented using Observer pattern, reducing the load on re-renders. It has to be immediately after your ThemeProvider tag
          because the snackbar type colors are based on the theme. Just add the container and consume the service at any children on your app.
        </p>
      </div>
      <code>
        <pre class="pre-block">
          import { SnackbarContainer, snackbarService } from "uno-material-ui";
          let count = 0;
          const App = props => {
            const success = {
              messageText: "Hey! Everything is awesome",
              messageType: "success"
            };
            const onOpenSuccess = () => {
              snackbarService.showSnackbar(success.messageText);
            };
            return (
              < div className="App">
                < SnackbarContainer />
                < h1>uno-material-ui< /h1>
                < h2>Snackbar< /h2>
                < div># of re-renders: {count}< /div>
                < div className={classes.flexContainer}>
                  < Button className={classes.info} onClick={onOpenInfo}>
                    Open Info Snackbar
                  < /Button>
                < /div>
              < /div>
            );
          };
        </pre>
      </code>
      <a class="nav-link link-blue button" style="width:max-content!important" onclick="convert(this, 'uno-material-uisnackbar-lwylt', 'editor,browser');">Open CodeSandbox</a>
    </div>
    <hr class="separator"/>
    <div class="mb-4">
      <div id="TextValidator">
        <h4 class="blue-title">TextValidator</h4>
        <p>
          An input with validations.
        </p>
        <h6>PROPERTIES</h6>
        <table class="table table-striped w-100 mt-2">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Type</th>
              <th scope="col">Description</th>
              <th scope="col">Optional</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>label</td>
              <td>String</td>
              <td>Label appearing beside the control</td>
              <td>No</td>
            </tr>
            <tr>
              <td>onChange</td>
              <td>Function</td>
              <td>Function that changes the value of the control</td>
              <td>No</td>
            </tr>
            <tr>
              <td>validators</td>
              <td>Array</td>
              <td>Array of validator rules applied to the control's value</td>
              <td>No</td>
            </tr>
            <tr>
              <td>errorMessages</td>
              <td>Array</td>
              <td>Array of messages shown when validators are not met</td>
              <td>No</td>
            </tr>
            <tr>
              <td>value</td>
              <td>String</td>
              <td>Value contained on the control</td>
              <td>No</td>
            </tr>
          </tbody>
        </table>
      </div>
      <code>
        <pre class="pre-block">
          import { TextValidator } from "uno-material-ui";
          const App: React.FunctionComponent = (props: any) => {
            const [data, handleChange] = useStateForModel({ name: "" });
            const sendData = () => handleChange({ name: "" });
            return (
              < div className="App">
                < h1>TextValidator< /h1>
                < h2>Set your own rules to your forms!< /h2>
                < ValidatorForm className={classes.form} onSubmit={sendData}>
                  < TextValidator
                    id="name"
                    label="Name"
                    name="name"
                    onChange={handleChange}
                    value={data.name}
                    validators={["required"]}
                    errorMessages={["This field is required"]}
                  />
                  < Button type="submit">Submit< /Button>
                < /ValidatorForm>
              < /div>
            );
          };
        </pre>
      </code>
      <a class="nav-link link-blue button" style="width:max-content!important" onclick="convert(this, 'uno-material-uitextvalidator-zh9xl', 'editor,browser');">Open CodeSandbox</a>
    </div>
    <hr class="separator"/>
    <div class="mb-4">
      <div id="ThumbnailPhoto">
        <h4 class="blue-title">ThumbnailPhoto</h4>
        <p>An small avatar to display a photo with tooltip.</p>
        <h6>PROPERTIES</h6>
        <table class="table table-striped w-100 mt-2">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Type</th>
              <th scope="col">Description</th>
              <th scope="col">Optional</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>fullName</td>
              <td>String</td>
              <td>Full name of the contact</td>
              <td>No</td>
            </tr>
            <tr>
              <td>imgSrc</td>
              <td>String</td>
              <td>Source to the image to show</td>
              <td>No</td>
            </tr>
            <tr>
              <td>placement</td>
              <td>String</td>
              <td>Placement of the tooltip</td>
              <td>No</td>
            </tr>
          </tbody>
        </table>
      </div>
      <code>
        <pre class="pre-block">
          import { ThumbnailPhoto } from "uno-material-ui";
          export default function App() {
            return (
              < div className="App">
                < h1>ThumbnailPhoto< /h1>
                < h2>Create your custom presentation cards!< /h2>
                < div>
                  < ThumbnailPhoto
                    fullName="John Doe"
                    imgSrc="https://avatars0.githubusercontent.com/u/1775792?s=400&v=4"
                    placement="right"
                  />
                < /div>
              < /div>
            );
          }
        </pre>
      </code>
      <a class="nav-link link-blue button" style="width:max-content!important" onclick="convert(this, 'uno-material-uithumbnailphoto-y8bbb', 'editor,browser');">Open CodeSandbox</a>
    </div>
    <hr class="separator"/>
    <div class="mb-4">
      <div id="Title">
        <h4 class="blue-title">Title</h4>
        <p>
          A title, it also changes the document title,
          so it is displayed on the tab of your web browser.
        </p>
        <h6>PROPERTIES</h6>
        <table class="table table-striped w-100 mt-2">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Type</th>
              <th scope="col">Description</th>
              <th scope="col">Optional</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>value</td>
              <td>String</td>
              <td>String to be used as title.</td>
              <td>No</td>
            </tr>
            <tr>
              <td>prefix</td>
              <td>String</td>
              <td>String used as a suffix for the value.</td>
              <td>No</td>
            </tr>
            <tr>
              <td>suffix</td>
              <td>String</td>
              <td>String used as a prefix for the value.</td>
              <td>No</td>
            </tr>
          </tbody>
        </table>
      </div>
      <code>
        <pre class="pre-block">
          import { Title } from "uno-material-ui";
          export default function App() {
            return (
              < div className="App">
                < h1>Title< /h1>
                < h2>Put your own title to your page and tab!< /h2>
                < Title
                  prefix="Unosquare"
                  suffix="uno-material-ui"
                  value="This is a title"
                />
              < /div>
            );
          }
        </pre>
      </code>
      <a class="nav-link link-blue button" style="width:max-content!important" onclick="convert(this, 'uno-material-uititle-gw7xq', 'editor,browser');">Open CodeSandbox</a>
    </div>
  </div>
  <div class="col-2 toc d-none d-lg-block">
    <ul>
      <li><p class="navbar-brand pl-3">Table of Content</p></li>
      <li><a class="nav-link" href="#ButtonWithLoading">ButtonWithLoading</a></li>
      <li><a class="nav-link" href="#ConfirmationDialog">ConfirmationDialog</a></li>
      <li><a class="nav-link" href="#ErrorBoundary">ErrorBoundary</a></li>
      <li><a class="nav-link" href="#FixedLinearProgress">FixedLinearProgress</a></li>
      <li><a class="nav-link" href="#FormModal">FormModal</a></li>
      <li><a class="nav-link" href="#FormSwitch">FormSwitch</a></li>
      <li><a class="nav-link" href="#IndeterminatedLoading">IndeterminatedLoading</a></li>
      <li><a class="nav-link" href="#LoadingIcon">LoadingIcon</a></li>
      <li><a class="nav-link" href="#MenuList">MenuList</a></li>
      <li><a class="nav-link" href="#NavBar">NavBar</a></li>
      <li><a class="nav-link" href="#SnackbarContainer">SnackbarContainer</a></li>
      <li><a class="nav-link" href="#TextValidator">TextValidator</a></li>
      <li><a class="nav-link" href="#ThumbnailPhoto">ThumbnailPhoto</a></li>
      <li><a class="nav-link" href="#Title">Title</a></li>
    </ul>
  </div>
</div>