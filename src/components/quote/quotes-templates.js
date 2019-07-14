import { Fragment } from 'react';

import Icon from '../icon';

import data from './data';

const QuotesTemplatesSingle = ({ text, author, url }) => {
  return (
    <template className="quote-template js-quote-template" type="text/template">
      <div className="quote__content">
        <Icon icon="quote" className="quote__icon" />
        <p className="quote__text">{text}</p>
        <footer className="quote__footer">
          <cite className="quote__author">
            <a
              href={url}
              target="_blank"
              rel="noopener"
              className="quote__link"
            >
              {author}
            </a>
          </cite>
        </footer>
      </div>
    </template>
  );
};

const QuotesTemplates = () => {
  return (
    <Fragment>
      {data.map((quote, index) => (
        <QuotesTemplatesSingle key={`quote-${index}`} {...quote} />
      ))}
    </Fragment>
  );
};

export default QuotesTemplates;
