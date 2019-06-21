import Markdown from '../markdown';
import Section from '../section';

import data from 'raw-loader!./data.md';

const Scholarship = () => {
  return (
    <Section id="scholarship" title="Diversity Scholarships">
      <Markdown>{data}</Markdown>
    </Section>
  );
};

export default Scholarship;
