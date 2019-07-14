import classnames from 'classnames';
import Section from '../section';

import './introduction.scss';

const Introduction = () => {
  const imgClasses = classnames({
    'introduction-image': true,
    'dynamic-image': true,
    'dynamic-image--square': true,
  });
  return (
    <Section id="intro">
      <div className="introduction__item">
        <div
          className={imgClasses}
          style={{ '--bg-photo': `url(/static/images/venue.png)` }}
          title="Our venue"
        />
        <header className="introduction__header">
          <h3 className="introduction__title" role="heading" aria-level="3">
            Title
          </h3>
        </header>
        <div className="introduction__info">Hello world</div>
      </div>
    </Section>
  );
};

export default Introduction;
