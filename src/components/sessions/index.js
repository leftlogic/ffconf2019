import classnames from 'classnames';

import Section from '../section';
import Break from './break';
import Talk from './talk';

import { formatSessions } from '../../utils';

import data from './data';
import config from '../../config';

const { phase } = config.config;

import './sessions.scss';

const WhichSession = ({ isBreak, ...session }) => {
  const Which = isBreak ? Break : Talk;

  return <Which {...session} />;
};

const Sessions = ({ schedule }) => {
  const sessions = formatSessions({ data, api: schedule });

  const wrapperClasses = classnames({
    sessions: true,
    'sessions--schedule': phase === 3,
  });

  return (
    <Section id="sessions" title="Sessions">
      <ol className={wrapperClasses}>
        {sessions.map((session, index) => (
          <WhichSession key={`session-${index}`} {...session} />
        ))}
      </ol>
    </Section>
  );
};

export default Sessions;
