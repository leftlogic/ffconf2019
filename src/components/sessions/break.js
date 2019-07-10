import Session from './session';

import config from '../../config';

const { phase } = config.config;

const Break = ({ title, start, end, date, slug }) => {
  if (phase !== 3) {
    return null;
  }

  return (
    <Session date={date} slug={slug} type="break">
      <header className="break__header">
        <div className="break__time tag">
          {start} &mdash; {end}
        </div>
        <h3 className="break__title" role="heading" aria-level="3">
          {title}
        </h3>
      </header>
    </Session>
  );
};

export default Break;
