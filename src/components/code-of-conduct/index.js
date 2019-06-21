import Markdown from '../markdown';
import Section from '../section';

import data from 'raw-loader!./data.md';

const CodeOfConduct = () => {
  return (
    <Section id="code-of-conduct" title="Conference Code of Conduct">
      <Markdown>{data}</Markdown>
    </Section>
  );
};

export default CodeOfConduct;
