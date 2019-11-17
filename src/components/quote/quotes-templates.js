import data from './data';

const QuotesTemplates = () => (
  <script
    dangerouslySetInnerHTML={{
      __html: `window.quotesData = ${JSON.stringify(data)};`,
    }}
  />
);

export default QuotesTemplates;
