import React from "react";
import Button, { ButtonType, ButtonSize } from "./components/Button/button";
import Alert, { AlertType } from "./components/Alert/alert";
import Menu from "./components/Menu/menu";
import MenuItem from "./components/Menu/menuItem";
import SubMenu from "./components/Menu/subMenu";
function App() {
  return (
    <div className="App">
      <Menu
        onSelect={(index) => {
          alert(index);
        }}
        mode={"vertical"}
      >
        <MenuItem>menuitem</MenuItem>
        <MenuItem>menuitem</MenuItem>
        <MenuItem>menuitem</MenuItem>
        <SubMenu title="dropdown">
          <MenuItem>menuitemdfdfdfdfdfedf</MenuItem>
          <MenuItem>menuitemdfdfdfdfdf</MenuItem>
        </SubMenu>
        <MenuItem>menuitem</MenuItem>
      </Menu>
    </div>
  );
}

export default App;
