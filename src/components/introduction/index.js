import classnames from 'classnames';
import Section from '../section';

import './introduction.scss';

const Introduction = ({ schedule }) => {
  const imgClasses = classnames({
    'introduction-image': true,
    'dynamic-image': true,
    'dynamic-image--square': true,
  });
  let count = 0;
  return (
    <Section id="intro">
      <div className="introduction__item">
        <div
          className={imgClasses}
          style={{
            '--bg-photo': `url(/static/images/venue.png)`,
            width: '386px',
          }}
          title="Our venue"
        />
        <header className="introduction__header">
          <h3 className="introduction__title" role="heading" aria-level="3">
            The Future Friends Conference
          </h3>
        </header>
        <div className="introduction__info">
          <p>
            ffconf is held at the historic Duke of Yorks picturehouse in
            Brighton, UK. The event is in it's 11th year, and is lovingly
            curated and run by Remy &amp; Julie Sharp.
          </p>

          <p>
            The event aims to inspire, inform and educate people who work on the
            web who want to make the web a better place. You'll see talks on
            community, performance, tools, debugging, business, IoT, Just
            JavaScript and more.
          </p>
          <p>
            Also see our{' '}
            <strong>
              <a href="https://ffconf.org">complete archive</a>
            </strong>{' '}
            of videos, audio and slides.
          </p>

          <h4>Sessions you'll see</h4>

          <table className="introduction__sessions">
            <thead>
              <tr>
                <th>Title</th>
                <th>Topics</th>
              </tr>
            </thead>
            <tbody>
              {schedule
                .filter(_ => !!_.title)
                .map(_ => {
                  count++; // just…just don't fucking ask…

                  return (
                    <tr key={_.slug}>
                      <td>
                        <a href={`#${_.slug}`}>{_.title}</a>
                      </td>
                      <td>{_.tags.map(_ => `#${_}`).join(', ')}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>

          {count < 8 ? <p>With more talks being announced soon.</p> : null}

          <p>
            <small>
              Are our speaker photos hard to make out? That's on purpose, we
              don't announce our speakers right away, but if you would rather
              know you can{' '}
              <a href="mailto:events@leftlogic.com?subject=Please…who are the speakers?">
                email me and we'll tell you
              </a>
            </small>
          </p>
        </div>
      </div>
    </Section>
  );
};

export default Introduction;
