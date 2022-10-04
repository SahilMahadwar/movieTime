import { ComponentMeta } from '@storybook/react';

import { MediaCard, MediaCardProps } from './MediaCard';

export const generated = (args: MediaCardProps) => {
  return <MediaCard {...args} />;
};

export default {
  title: 'Components/MediaCard',
  parameters: {
    layout: 'centered',
  },
} as ComponentMeta<typeof MediaCard>;
