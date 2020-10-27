import React from "react";
import Button, { ButtonType, ButtonSize } from "./components/Button/button";
import Alert, { AlertType } from "./components/Alert/alert";
import Menu from "./components/Menu/Menu";
import MenuItem from "./components/Menu/menuItem";
function App() {
  return (
    <div className="App">
      <Menu>
        <MenuItem>MenuItem</MenuItem>
        <MenuItem>MenuItem</MenuItem>
        <MenuItem>MenuItem</MenuItem>
      </Menu>
    </div>
  );
}

export default App;
