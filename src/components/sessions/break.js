import Session from './session';

import config from '../../config';

const { phase } = config.config;

const Break = ({ title, start, end, date1, date2, slug }) => {
  if (phase !== 3) {
    return null;
  }

  return (
    <Session date1={date1} date2={date2} slug={slug} type="break">
      <header className="break__header">
        <h3 className="break__title" role="heading" aria-level="3">
          {title}
        </h3>
        <div className="break__time">
          {start} &mdash; {end}
        </div>
      </header>
    </Session>
  );
};

export default Break;
