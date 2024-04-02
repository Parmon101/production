import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import "@/app/styles/index.scss";
import { NotificationList } from "./NotificationList";

export default {
  title: "shared/NotificationList",
  component: NotificationList,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof NotificationList>;

const Template: ComponentStory<typeof NotificationList> = (args) => (
  <NotificationList {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
