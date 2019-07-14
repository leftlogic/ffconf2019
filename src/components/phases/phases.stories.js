import { storiesOf } from '@storybook/react';

import Phases, { __RewireAPI__ as Rewire } from './phases';

const stories = storiesOf('Phases', module);

const Wrapper = ({ phase }) => {
  Rewire.__set__('phase', phase);
  return <Phases />;
};

stories.add('0', () => <Wrapper phase={0} />);
stories.add('0.5', () => <Wrapper phase={0.5} />);
stories.add('1', () => <Wrapper phase={1} />);
stories.add('2', () => <Wrapper phase={2} />);
stories.add('3', () => <Wrapper phase={3} />);
stories.add('4', () => <Wrapper phase={4} />);
stories.add('undefined', () => <Wrapper />);
