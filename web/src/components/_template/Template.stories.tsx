import { ComponentMeta } from '@storybook/react';
import React from 'react';
import { Template, TemplateProps } from './Template';

export const generated = (args: TemplateProps) => {
  return <Template {...args} />;
};

export default {
  title: 'Components/MediaCard',
  parameters: {
    layout: 'centered',
  },
} as ComponentMeta<typeof Template>;
