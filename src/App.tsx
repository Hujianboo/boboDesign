import React from "react";
import Button, { ButtonType, ButtonSize } from "./components/Button/button";
import Alert, { AlertType } from "./components/Alert/alert";
import Menu from "./components/Menu/menu";
import MenuItem from "./components/Menu/menuItem";
import SubMenu from "./components/Menu/subMenu";
import Tabs from "./components/Tabs/tabs";
import TabItem from "./components/Tabs/tabItem";
function App() {
  return (
    <div className="App">
      <Menu
        onSelect={(index) => {
          alert(index);
        }}
        // mode={"vertical"}
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
      <Tabs defaultIndex="0" type="card">
        <TabItem label="sdf">sdf</TabItem>
        <TabItem label="sd" disable>
          sd
        </TabItem>
        <TabItem label="sddf">sdsf</TabItem>
      </Tabs>
      <Tabs defaultIndex="0" type="line">
        <TabItem label="sdf">sdf</TabItem>
        <TabItem label="sd" disable>
          sd
        </TabItem>
        <TabItem label="sddf">sdsf</TabItem>
        <TabItem label={<button>button</button>}>sdsf</TabItem>
      </Tabs>
    </div>
  );
}

export default App;
