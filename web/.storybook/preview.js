import '@fontsource/inter/variable.css';
import '@fontsource/playfair-display/variable.css';
import '../src/styles/globals.css';

import * as NextImage from 'next/image';

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  // layout: 'centered',
  previewTabs: {
    'storybook/docs/panel': { index: -1 },
  },
};
