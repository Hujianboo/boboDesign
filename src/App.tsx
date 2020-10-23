import React from "react";
import Button, { ButtonType, ButtonSize } from "./components/Button/button";
import Alert, { AlertType } from "./components/Alert/alert";

function App() {
  return (
    <div className="App">
      <Alert
        title="alert"
        description="description"
        type={AlertType.Success}
        closable
        onClose={() => {
          // alert("close");
        }}
      ></Alert>
    </div>
  );
}

export default App;
