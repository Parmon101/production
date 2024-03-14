import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import "app/styles/index.scss";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { Loader } from "widgets/Loader/Loader";

export default {
  title: "widget/Loader",
  component: Loader,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
