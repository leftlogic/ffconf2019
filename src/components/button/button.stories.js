import { storiesOf } from '@storybook/react';

import Button from './index';

const stories = storiesOf('Button', module);

stories.add('default', () => (
  <div style={{ margin: '20px', padding: '20px', background: '#fff' }}>
    <Button href="#" className="test1 test2">
      Full details
    </Button>
    <hr />
    <Button href="https://google.com" outline={true}>
      Full details
    </Button>
  </div>
));
