import { storiesOf } from '@storybook/react';

import Component from './index';

import '../../css/fonts.scss';
import '../../css/index.scss';
import '../layout/layout.scss';

const stories = storiesOf('Quotes', module);

stories.add('default', () => (
  <div className="wrapper">
    <Component />
  </div>
));
