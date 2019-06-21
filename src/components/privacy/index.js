import Markdown from '../markdown';
import Section from '../section';

import data from 'raw-loader!./data.md';

const Privacy = () => {
  return (
    <Section id="privacy" title="Privacy Policy">
      <Markdown>{data}</Markdown>
    </Section>
  );
};

export default Privacy;
