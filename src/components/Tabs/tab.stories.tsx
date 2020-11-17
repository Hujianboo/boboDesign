import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import Tabs, { tabsProps } from "./tabs";
import TabItem from "./tabItem";
export default {
  title: "Tabs",
  component: Tabs,
} as Meta;
const Template: Story<tabsProps> = (args) => {
  return (
    <Tabs {...args}>
      <TabItem label="first">first</TabItem>
      <TabItem label="disable" disable>
        disable
      </TabItem>
      <TabItem label="third">third</TabItem>
    </Tabs>
  );
};
export const NormalTabs = Template.bind({});
NormalTabs.args = {
  type: "card",
};
