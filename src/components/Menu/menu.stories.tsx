import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import Menu, { MenuProps } from "./menu";
import MenuItem from "./menuItem";
import SubMenu from "./subMenu";
export default {
  title: "Menu",
  component: Menu,
} as Meta;
const Template: Story<MenuProps> = (args) => {
  return (
    <Menu {...args}>
      <MenuItem>active</MenuItem>
      <MenuItem disabled>disabled</MenuItem>
      <MenuItem>menuitem</MenuItem>
    </Menu>
  );
};
const TemplateSub: Story<MenuProps> = (args) => {
  return (
    <Menu {...args}>
      <MenuItem>active</MenuItem>
      <SubMenu title="submenu">
        <MenuItem>submenu1</MenuItem>
        <MenuItem>submenu1</MenuItem>
      </SubMenu>
      <MenuItem>menuitem</MenuItem>
    </Menu>
  );
};
export const NormalMenu = Template.bind({});
NormalMenu.args = {
  mode: "horizontal",
};

export const VerticalMenu = Template.bind({});
VerticalMenu.args = {
  mode: "vertical",
};
export const NormalSubMenu = TemplateSub.bind({});
NormalSubMenu.args = {
  mode: "horizontal",
};
