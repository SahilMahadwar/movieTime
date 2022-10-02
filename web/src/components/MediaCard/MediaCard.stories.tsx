import { ComponentMeta } from '@storybook/react';
import React from 'react';
import { MediaCard, MediaCardProps } from './MediaCard';

export const generated = (args) => {
  return <MediaCard {...args} />;
};

export default {
  title: 'Components/MediaCard',
  parameters: {
    layout: 'centered',
  },
} as ComponentMeta<typeof MediaCard>;
