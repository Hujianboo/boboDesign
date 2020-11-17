import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import Alert, { AlertProps } from "./alert";

export default {
  title: "Alert",
  component: Alert,
} as Meta;
const Template: Story<AlertProps> = (args) => <Alert {...args}></Alert>;
export const NormalAlert = Template.bind({});
NormalAlert.args = {
  title: "normal alert",
  type: "success",
  description: "success",
  closable: true,
};
export const DangerAlert = Template.bind({});
DangerAlert.args = {
  title: "normal alert",
  type: "danger",
  description: "danger",
  closable: true,
};
export const WarningAlert = Template.bind({});
WarningAlert.args = {
  title: "normal alert",
  type: "warning",
  description: "warning",
  closable: true,
};
export const DefaultAlert = Template.bind({});
DefaultAlert.args = {
  title: "normal alert",
  type: "default",
  description: "default",
  closable: true,
};
