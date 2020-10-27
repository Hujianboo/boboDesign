import React from "react";
import Button, { ButtonType, ButtonSize } from "./components/Button/button";
import Alert, { AlertType } from "./components/Alert/alert";
import Menu from "./components/Menu/menu";
import MenuItem from "./components/Menu/menuItem";
function App() {
  return (
    <div className="App">
      <Menu
        onSelect={(index) => {
          alert(index);
        }}
      >
        <MenuItem index={1}>MenuItem</MenuItem>
        <MenuItem index={2}>MenuItem</MenuItem>
        <MenuItem index={3} disabled>
          MenuItem
        </MenuItem>
      </Menu>
    </div>
  );
}

export default App;
