import classnames from 'classnames';
import Section from '../section';

import '../sessions/sessions.scss';

const Introduction = ({ schedule }) => {
  const imgClasses = classnames({
    'speaker-image': true,
    'dynamic-image': true,
    'dynamic-image--square': true,
  });
  return (
    <Section id="intro" className="section">
      <div className="sessions__item--talk">
        <div
          className={imgClasses}
          style={{ '--bg-photo': `url(/static/images/venue.png)` }}
          title="Our venue"
        />
        <p>Hell world</p>
      </div>
    </Section>
  );
};

export default Introduction;
