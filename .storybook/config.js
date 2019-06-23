import { configure, addDecorator, addParameters } from '@storybook/react';
import { create } from '@storybook/theming';
import { withA11y } from '@storybook/addon-a11y';

import { name, version } from '../package';

// include the base css
import '../src/css/index.scss';

const req = require.context('../src/components', true, /\.stories\.js$/);
const storybookContext = require.context('./', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
  storybookContext.keys().forEach(filename => storybookContext(filename));
}

addParameters({
  options: {
    theme: create({
      base: 'light',
      brandTitle: `${name} v${version}`,
    }),
  },
});

addDecorator(withA11y);

configure(loadStories, module);
