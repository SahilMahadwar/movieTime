import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Component } from './component';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Ui/Component',
  component: Component,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Component>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: 'Component',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Component',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Component',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Component',
};
