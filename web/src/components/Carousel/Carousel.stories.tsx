import { ComponentMeta } from '@storybook/react';

import { Carousel, CarouselProps } from './Carousel';

export const generated = (args: CarouselProps) => {
  return (
    <div className="max-w-[1212px]">
      <Carousel {...args} />
    </div>
  );
};

export default {
  title: 'Components/Carousel',
  parameters: {
    layout: 'centered',
  },
} as ComponentMeta<typeof Carousel>;
