import Section from '../section';
import Thanks from '../thanks';

import Data from './data.md';

import './diversity.scss';

const Diversity = () => {
  return (
    <Section id="diversity" mdx={true}>
      <Data />
      <Thanks />
    </Section>
  );
};

export default Diversity;
