import React from "react";
import Button, { ButtonType, ButtonSize } from "./components/Button/button";
import Alert, { AlertType } from "./components/Alert/alert";

function App() {
  return (
    <div className="App">
      <Alert
        title="alert"
        description="Success"
        type={AlertType.Success}
        closable
        onClose={() => {
          // alert("close");
        }}
      />
      <Alert
        title="alert"
        description="Danger"
        type={AlertType.Danger}
        closable
        onClose={() => {
          // alert("close");
        }}
      />
      <Alert
        title="alert"
        description="Default"
        type={AlertType.Default}
        closable
        onClose={() => {
          // alert("close");
        }}
      />
      <Alert
        title="alert"
        description="Warning"
        type={AlertType.Warning}
        closable
        onClose={() => {
          // alert("close");
        }}
      />
    </div>
  );
}

export default App;
