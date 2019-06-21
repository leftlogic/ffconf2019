import Markdown from '../markdown';

import data from 'raw-loader!./data.md';

const Thanks = () => {
  return <Markdown>{data}</Markdown>;
};

export default Thanks;
