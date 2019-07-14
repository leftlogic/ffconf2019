import { storiesOf } from '@storybook/react';

import Header from './index';

import '../../css/fonts.scss';
import '../../css/index.scss';
import '../layout/layout.scss';
import './header.scss';
const stories = storiesOf('Header', module);

stories.add('default', () => (
  <div className="wrapper">
    <Header></Header>
  </div>
));
