import { configure, addDecorator, addParameters } from '@storybook/react';
import { create } from '@storybook/theming';
import { withA11y } from '@storybook/addon-a11y';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import './mockNextRouter';

import { name, version } from '../package';

// include the base css
import '../src/css/index.scss';

const req = require.context('../src/components', true, /\.stories\.js$/);
const storybookContext = require.context('./', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
  storybookContext.keys().forEach(filename => storybookContext(filename));
}

const newViewports = {
  desktop1440: {
    name: 'Desktop @ 1440',
    styles: {
      width: '1440px',
      height: '798px',
    },
  },
};

addParameters({
  viewport: {
    viewports: {
      ...INITIAL_VIEWPORTS,
      ...newViewports,
    },
  },
  options: {
    theme: create({
      base: 'light',
      brandTitle: `${name} v${version}`,
    }),
  },
});

addDecorator(withA11y);

configure(loadStories, module);
