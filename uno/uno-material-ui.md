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
        </div>
<div>

```tsx
import React from "react";
import ReactDOM from "react-dom";
import { ButtonWithLoading } from "uno-material-ui";
import "./styles.css";
const App = () => {
  const [fetching, setFetching] = React.useState(false);
  const start = () => setFetching(true);
  if (fetching) {
    setTimeout(() => setFetching(false), 4000);
  }
  return (
    <div className="App">
      <h1>uno-material-ui</h1>
      <h2>ButtonWIthLoading</h2>
      <ButtonWithLoading isFetching={fetching} onClick={start}>
        Save
      </ButtonWithLoading>
    </div>
  );
};
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

</div>
<button class="nav-link link-blue" onclick="convert(this, 'uno-material-uibuttonwithloading-gkg1q');">Open CodeSanbox</button>
<br />
<br />
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
        </div>
<div>

```tsx
import Button from "@material-ui/core/Button";
import React from "react";
import ReactDOM from "react-dom";
import { ConfirmationDialog } from "uno-material-ui";
import "./styles.css";
const App = () => {
  const [open, setOpen] = React.useState(false);
  const onCancel = () => setOpen(false);
  const onOpen = () => setOpen(true);
  return (
    <div className="App">
      <h1>uno-material-ui</h1>
      <h2>ConfirmationDialog</h2>
      <Button onClick={onOpen}>Open Dialog</Button>
      <ConfirmationDialog
        onClose={onCancel}
        open={open}
        title={"Confirmation Dialog"}
        contentText={"Are you sure?"}
        onAgreeAction={onCancel}
      />
    </div>
  );
};
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

</div>
<button class="nav-link link-blue" onclick="convert(this, 'uno-material-uiconfirmationdialog-gwgre');">Open CodeSanbox</button>
<br />
<br />
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
        </div>
<div>

```tsx
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
    <div className="App">
      <h1>uno-material-ui</h1>
      <h2>FixedLinearProgress</h2>
      <FixedLinearProgress isLoading={fetching} />
      <Button onClick={onLoading}>Start loading!</Button>
    </div>
  );
};
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

</div>
<button class="nav-link link-blue" onclick="convert(this, 'uno-material-uifixedlinearprogress-zyylp');">Open CodeSanbox</button>
<br />
<br />
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
        </div>
<div>

```tsx
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import CancelIcon from "@material-ui/icons/Cancel";
import SaveIcon from "@material-ui/icons/Save";
import React from "react";
import ReactDOM from "react-dom";
import { FormModal } from "uno-material-ui";
import "./styles.css";
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
    <Grid
      alignItems="center"
      container={true}
      direction="row"
      justify="space-between"
    >
      <Grid item={true}>
        <Button color="secondary" onClick={onCancel} startIcon={<CancelIcon />}>
          Cancel
        </Button>
      </Grid>
      <Grid item={true}>
        <Button
          color="primary"
          startIcon={<SaveIcon />}
          type="submit"
          variant="contained"
        >
          Save
        </Button>
      </Grid>
    </Grid>
  );
  return (
    <div className="App">
      <h1>uno-material-ui</h1>
      <h2>FormModal</h2>
      <Button onClick={onOpen}>Open Dialog</Button>
      <FormModal
        actions={<Actions />}
        onClose={onCancel}
        onSubmit={handleSubmit}
        open={open}
        maxWidth="md"
        fullWidth={true}
        title="Form Modal"
      >
        <TextField
          fullWidth={true}
          label="Notes"
          multiline={true}
          variant="outlined"
          value={state.Comments}
          onChange={changeNotes}
          rows={4}
        />
      </FormModal>
    </div>
  );
};
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

</div>
<button class="nav-link link-blue" onclick="convert(this, 'uno-material-uiformmodal-ewusv');">Open CodeSanbox</button>
<br />
<br />
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
        </div>
<div>

```tsx
import React from "react";
import ReactDOM from "react-dom";
import { FormSwitch } from "uno-material-ui";
import "./styles.css";
const App = () => {
  const [value, setValue] = React.useState(false);
  const onChange = () => {
    setValue(!value);
  };
  return (
    <div className="App">
      <h1>uno-material-ui</h1>
      <h2>FormSwitch</h2>
      <FormSwitch checked={value} label="Switchable" onChange={onChange} />
      <FormSwitch
        checked={true}
        disabled={true}
        label="Disabled"
        labelPlacement="bottom-start"
        onChange={onChange}
      />
    </div>
  );
};
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

</div>
<button class="nav-link link-blue" onclick="convert(this, 'uno-material-uiformswitch-796ng');">Open CodeSanbox</button>
<br />
<br />
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
        </div>
<div>

```tsx
import Button from "@material-ui/core/Button";
import React from "react";
import ReactDOM from "react-dom";
import { IndeterminatedLoading } from "uno-material-ui";
import "./styles.css";
const App = () => {
  const [fetching, setFetching] = React.useState(false);
  const startFetching = () => setFetching(true);
  if (fetching) {
    setTimeout(() => setFetching(false), 4000);
  }
  return (
    <div className="App">
      <h1>uno-material-ui</h1>
      <h2>IndeterminatedLoading</h2>
      <Button onClick={startFetching}> Start Fetching </Button>
      <IndeterminatedLoading isLoading={fetching} />
    </div>
  );
};
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

</div>
<button class="nav-link link-blue" onclick="convert(this, 'uno-material-uiindeterminatedloading-vubgx');">Open CodeSanbox</button>
<br />
<br />
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
        </div>
<div>

```tsx
import React from "react";
import "./styles.css";
import { LoadingIcon } from "uno-material-ui";
export default function App() {
  return (
    <div className="App">
      <h1>LoadingIcon</h1>
      <h2>You can represent a loading process on screen</h2>
      <LoadingIcon color="primary" />
      <LoadingIcon color="secondary" />
      <LoadingIcon color="default" />
    </div>
  );
}
```

</div>
<button class="nav-link link-blue" onclick="convert(this, 'uno-material-uiloadingicon-ugguf');">Open CodeSanbox</button>
<br />
<br />
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
        </div>
<div>

```tsx
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Build from "@material-ui/icons/Build";
import Dashboard from "@material-ui/icons/Dashboard";
import makeStyles from "@material-ui/styles/makeStyles";
import * as React from "react";
import { MenuList } from "uno-material-ui";
import "./styles.css";
const useStyles = makeStyles(() => ({
  icon: {
    color: "#00f",
    marginRight: "5px"
  }
}));
const App: React.FunctionComponent = () => {
  const classes = useStyles({});
  return (
    <div className="App">
      <h1>MenuList</h1>
      <h2>Create a custom list!</h2>
      <MenuList>
        <ListItem button={true}>
          <Dashboard className={classes.icon} />
          <ListItemText secondary="Dashboard" />
        </ListItem>
        <ListItem button={true}>
          <Build className={classes.icon} />
          <ListItemText secondary="Tools" />
        </ListItem>
      </MenuList>
    </div>
  );
};
export default App;
```

</div>
<button class="nav-link link-blue" onclick="convert(this, 'uno-material-uimenulist-uzuhe');">Open CodeSanbox</button>
<br />
<br />
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
        </div>
<div>

```tsx
import * as React from "react";
import "./styles.css";
import { NavBar } from "uno-material-ui";
export default function App() {
  return (
    <div className="App">
      <NavBar title={"NavBar"} />
      <br />
      <br />
      <br />
      <h2>Set a header navigation bar and customize at your will!</h2>
    </div>
  );
}
```

</div>
<button class="nav-link link-blue" onclick="convert(this, 'uno-material-uinavbar-nsk7f');">Open CodeSanbox</button>
<br />
<br />
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
        </div>
<div>

```tsx
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/styles/makeStyles";
import React from "react";
import ReactDOM from "react-dom";
import { SnackbarContainer, snackbarService } from "uno-material-ui";
import "./styles.css";
const useStyles = makeStyles({
  error: {
    color: "red"
  },
  flexContainer: {
    display: "flex",
    justifyContent: "space-between",
    paddingBottom: "40px"
  },
  info: {
    color: "blue"
  },
  success: {
    color: "green"
  },
  warning: {
    color: "orange"
  }
});
let count = 0;
const App = props => {
  const classes = useStyles(props);
  const info = { messageText: "Hey! Check this snackbar", messageType: "info" };
  const warning = { messageText: "Hey! Be careful", messageType: "warning" };
  const error = { messageText: "Hey! This is broken", messageType: "error" };
  const success = {
    messageText: "Hey! Everything is awesome",
    messageType: "success"
  };
  count++; //Increase the re-renders counter
  const onOpenInfo = () => {
    snackbarService.showSnackbar(info.messageText, info.messageType);
  };
  const onOpenWarning = () => {
    snackbarService.showSnackbar(warning.messageText, warning.messageType);
  };
  const onOpenError = () => {
    snackbarService.showSnackbar(error.messageText, error.messageType);
  };
  const onOpenSuccess = () => {
    snackbarService.showSnackbar(success.messageText);
  };
  return (
    <div className="App">
      <SnackbarContainer />
      <h1>uno-material-ui</h1>
      <h2>Snackbar</h2>
      <div># of re-renders: {count}</div>
      <div className={classes.flexContainer}>
        <Button className={classes.info} onClick={onOpenInfo}>
          Open Info Snackbar
        </Button>
        <Button className={classes.warning} onClick={onOpenWarning}>
          Open Warning Snackbar
        </Button>
        <Button className={classes.error} onClick={onOpenError}>
          Open Error Snackbar
        </Button>
        <Button className={classes.success} onClick={onOpenSuccess}>
          Open Success Snackbar
        </Button>
      </div>
    </div>
  );
};
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

</div>
<button class="nav-link link-blue" onclick="convert(this, 'uno-material-uisnackbar-lwylt');">Open CodeSanbox</button>
<br />
<br />
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
        </div>
<div>

```tsx
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/styles/makeStyles";
import * as React from "react";
import "./styles.css";
import { useStateForModel, ValidatorForm } from "uno-react";
import { TextValidator } from "uno-material-ui";
const useStyles = makeStyles({
  form: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  }
});
const App: React.FunctionComponent = (props: any) => {
  const classes = useStyles(props);
  const [data, handleChange] = useStateForModel({ name: "" });
  const sendData = () => handleChange({ name: "" });
  return (
    <div className="App">
      <h1>TextValidator</h1>
      <h2>Set your own rules to your forms!</h2>
      <ValidatorForm className={classes.form} onSubmit={sendData}>
        <TextValidator
          id="name"
          label="Name"
          name="name"
          onChange={handleChange}
          value={data.name}
          validators={["required"]}
          errorMessages={["This field is required"]}
        />
        <Button type="submit">Submit</Button>
      </ValidatorForm>
    </div>
  );
};
export default App;
```

</div>
<button class="nav-link link-blue" onclick="convert(this, 'uno-material-uitextvalidator-zh9xl');">Open CodeSanbox</button>
<br />
<br />
        <div class="mb-4">
          <div id="ThumbnailPhoto">
            <h4 class="blue-title">ThumbnailPhoto</h4>
            <p>An small avatar to display a photo with tooltip.</p>
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
        </div>
<div>

```tsx
import React from "react";
import "./styles.css";
import { ThumbnailPhoto } from "uno-material-ui";
export default function App() {
  return (
    <div className="App">
      <h1>ThumbnailPhoto</h1>
      <h2>Create your custom presentation cards!</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center"
        }}
      >
        <ThumbnailPhoto
          fullName="John Doe"
          imgSrc="https://avatars0.githubusercontent.com/u/1775792?s=400&v=4"
          placement="right"
        />
      </div>
    </div>
  );
}
```

</div>
<button class="nav-link link-blue" onclick="convert(this, 'uno-material-uithumbnailphoto-y8bbb');">Open CodeSanbox</button>
<br />
<br />
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
        </div>
<div>

```tsx
import React from "react";
import "./styles.css";
import { Title } from "uno-material-ui";
export default function App() {
  return (
    <div className="App">
      <h1>Title</h1>
      <h2>Put your own title to your page and tab!</h2>
      <Title
        prefix="Unosquare"
        suffix="uno-material-ui"
        value="This is a title"
      />
    </div>
  );
}
```

</div>
<button class="nav-link link-blue" onclick="convert(this, 'uno-material-uititle-gw7xq');">Open CodeSanbox</button>
<br />
<br />
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
</div>