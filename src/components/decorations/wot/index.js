import { Fragment } from 'react';

import ascii from 'raw-loader!./ascii.txt';
import script from 'raw-loader!./script.js';

const Wot = () => {
  return (
    <Fragment>
      <div
        className="i-hate-i-have-to-do-this-to-show-funny-html-comments"
        dangerouslySetInnerHTML={{ __html: `<!-- ${ascii} -->` }}
      />
      <script dangerouslySetInnerHTML={{ __html: script }} />
    </Fragment>
  );
};

export default Wot;
