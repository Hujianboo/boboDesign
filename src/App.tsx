import React, { useState } from "react";
import Button, { ButtonType, ButtonSize } from "./components/Button/button";
import Alert, { AlertType } from "./components/Alert/alert";
import Menu from "./components/Menu/menu";
import MenuItem from "./components/Menu/menuItem";
import SubMenu from "./components/Menu/subMenu";
import Tabs from "./components/Tabs/tabs";
import TabItem from "./components/Tabs/tabItem";
import Icon from "./components/Icon/icon";
import Transition from "./components/Transition/transition";
function App() {
  const [show, setShow] = useState(false);
  const nodeRef = React.useRef(null);
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
        <TabItem label="first">first</TabItem>
        <TabItem label="disable" disable>
          disable
        </TabItem>
        <TabItem label="third">third</TabItem>
      </Tabs>
      <Tabs defaultIndex="0" type="line">
        <TabItem label="first">first</TabItem>
        <TabItem label="disable" disable>
          disable
        </TabItem>
        <TabItem label="third">third</TabItem>
        <TabItem label={<button>button</button>}>button</TabItem>
      </Tabs>
      <Button
        onClick={() => {
          setShow(!show);
        }}
      >
        toggle
      </Button>
      <Transition in={show} timeout={300} animation="zoom-in-top" wrapper>
        <div>
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
        </div>
      </Transition>
      <Transition in={show} timeout={300} animation="zoom-in-top" wrapper>
        <Button>A Large Button </Button>
      </Transition>
    </div>
  );
}

export default App;
