import { storiesOf } from '@storybook/react';

import '../layout/layout.scss';
import Component from './index';

const stories = storiesOf('Nav', module);

stories.add('main', () => (
  <div className="wrapper">
    <div className="wrapper-content">
      <Component />

      <div style={{ height: '300vh' }}></div>
    </div>
  </div>
));
