import Markdown from '../markdown';
import Section from '../section';
import Thanks from '../thanks';

import data from 'raw-loader!./data.md';

const Diversity = () => {
  return (
    <Section id="diversity" title="Diversity">
      <Markdown>{data}</Markdown>
      {/* <Thanks /> */}
    </Section>
  );
};

export default Diversity;
