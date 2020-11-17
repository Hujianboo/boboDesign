import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import Button, { ButtonProps } from "./button";
export default {
  title: "Button",
  component: Button,
  argTypes: {
    onClick: { action: "clicked" },
    btnType: {
      control: {
        type: "select",
        options: ["primary", "danger", "normal", "link"],
      },
    },
    size: {
      description: "string",
      control: {
        type: "select",
        options: ["sm", "lg"],
      },
    },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args}></Button>;
Template.parameters = { storyDescription: "4 sizes are supported." };
export const NormalButton = Template.bind({});
NormalButton.args = {
  size: "sm",
  children: "normal",
  onClick: () => {
    console.log("click");
  },
};
export const DisableButton = Template.bind({});
DisableButton.args = {
  size: "lg",
  children: "disable",
  disabled: true,
};
export const DangerButton = Template.bind({});
DangerButton.args = {
  size: "lg",
  btnType: "danger",
  children: "danger",
};
export const LinkButton = Template.bind({});
LinkButton.args = {
  href: "https://www.baidu.com",
  btnType: "link",
  children: "baidu",
};
