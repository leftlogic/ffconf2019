import classnames from 'classnames';

import Session from './session';
import Markdown from '../markdown';

import config from '../../config';

const { ticketUrl, ticketPrice } = config;
const { phase, soldout } = config.config;

const SpeakerImage = ({ name, photo, slug = 'soon-0' }) => {
  const title = phase >= 3 ? name : 'Speakers revealed soon!';
  const url = phase >= 3 ? photo : `/static/images/speakers/mod/${slug}.gif`;

  return (
    <div
      className="speaker__image dynamic-image dynamic-image--square special-image-border cursor-help"
      style={{ '--bg-photo': `url(${url})` }}
      title={title}
    />
  );
};

const SpeakerBio = ({ bio }) => {
  if (phase >= 4) {
    return null;
  }

  if (!bio) {
    return null;
  }

  return (
    <p className="speaker__bio">
      <em>
        <strong>Speaker origin story:</strong> {bio || 'Coming soon…'}
      </em>
    </p>
  );
};

const SpeakerName = ({ name, twitter }) => {
  if (phase < 3 || !name) {
    return null;
  }

  return (
    <div className="speaker__name">
      {!twitter && <span>{name}</span>}
      {twitter && (
        <a
          href={`https://twitter.com/${twitter}`}
          className="speaker__twitter"
          target="_blank"
          rel="noopener"
        >
          {name}
        </a>
      )}
    </div>
  );
};

const TalkTime = ({ start, end }) => {
  if (phase !== 3) {
    return null;
  }

  return (
    <div className="talk__time">
      {start} &mdash; {end}
    </div>
  );
};

const TalkDescription = ({ description }) => {
  if (!description) {
    return null;
  }

  return <Markdown className="talk__description">{description}</Markdown>;
};

const TalkLink = ({ type, link }) => {
  if (!link) {
    return null;
  }

  const linkClasses = classnames({
    button: true,
    talk__link: true,
    [`talk__link--${type}`]: !!type,
  });

  return (
    <a href={link} className={linkClasses} target="_blank" rel="noopener">
      {type}
    </a>
  );
};

const TalkMaterial = ({ slides, audio, video }) => {
  if (phase !== 4 || (!slides && !audio && !video)) {
    return null;
  }

  return (
    <div className="talk__material">
      <TalkLink type="slides" link={slides} />
      <TalkLink type="audio" link={audio} />
      <TalkLink type="video" link={video} />
    </div>
  );
};

const Talk = ({ talk, start, end, date1, date2 }) => {
  const {
    slug,
    title = 'To be announced soon!',
    speaker,
    description,
    slides,
    audio,
    video,
  } = talk;
  const { name, photo, twitter, bio } = speaker || {};

  return (
    <Session date1={date1} date2={date2} slug={slug} type="talk">
      <SpeakerImage name={name} photo={photo} slug={slug} />
      <header className="talk__header">
        <h3 className="talk__title" role="heading" aria-level="3">
          {title}
        </h3>

        {phase >= 1 &&
          phase <= 3 &&
          !soldout.conference && (
            <p>
              <a
                href={ticketUrl}
                className="button talk__buy"
                target="_blank"
                rel="noopener"
              >
                Get your ticket now @ £{ticketPrice}+VAT
              </a>
            </p>
          )}

        <TalkTime start={start} end={end} />
        <SpeakerName name={name} twitter={twitter} />
      </header>
      <div className="talk__content">
        <TalkDescription description={description} />
        <SpeakerBio bio={bio} />
      </div>
      <TalkMaterial slides={slides} audio={audio} video={video} />
    </Session>
  );
};

export default Talk;
