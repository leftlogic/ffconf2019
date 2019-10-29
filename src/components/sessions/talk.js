import classnames from 'classnames';

import Session from './session';
import Markdown from '../markdown';
import Button from '../button';

import config from '../../config';

const { ticketUrl, ticketPrice } = config;
const { phase, soldout } = config.config;

const SpeakerImage = ({ name, slug = 'soon-0' }) => {
  const title = phase >= 3 ? name : 'Speakers revealed soon!';
  const url = `/static/images/speakers/${slug}.png`;
  const imgClasses = classnames({
    'speaker-image': true,
    'dynamic-image': true,
    'dynamic-image--square': true,
    'cursor-help': phase < 3,
  });

  return (
    <div
      className={imgClasses}
      style={{ '--bg-photo': `url(${url})` }}
      title={title}
    />
  );
};

const SpeakerBio = ({ bio }) => {
  if (!bio) {
    return null;
  }

  return (
    <div className="speaker-bio">
      <h4 className="speaker-bio__title" role="heading" aria-level="4">
        My origin
      </h4>
      <p className="speaker-bio__text">{bio || 'Coming soon…'}</p>
    </div>
  );
};

const SpeakerName = ({ name, twitter }) => {
  if (phase < 3 || !name) {
    return null;
  }

  if (!twitter) {
    return <div className="speaker__name tag">{name}</div>;
  }

  return (
    <>
      <div className="speaker__name tag">{name}</div>
      <a
        href={`https://twitter.com/${twitter}`}
        className="speaker__twitter tag"
        target="_blank"
        rel="noopener"
      >
        @{twitter}
      </a>
    </>
  );
};

const TalkTime = ({ start, end }) => {
  if (phase !== 3) {
    return null;
  }

  return (
    <div className="talk__time tag">
      {start} &mdash; {end}
    </div>
  );
};

const TalkContent = ({ content }) => {
  if (!content) {
    return null;
  }

  return (
    <div className="talk-content">
      <h4 className="talk-content__title" role="heading" aria-level="4">
        My talk
      </h4>
      <Markdown className="talk-content__text">{content}</Markdown>
    </div>
  );
};

const TalkLink = ({ type, link }) => {
  if (!link) {
    return null;
  }

  const linkClasses = classnames({
    tag: true,
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

const Talk = ({ talk, start, end, date }) => {
  const {
    slug,
    title = 'To be announced soon!',
    speaker,
    description = 'This talk is yet to be finalised. We have an [open CFP](https://ffconf.org/articles/cfp/) which you can apply to, perhaps this is your time?',
    slides,
    audio,
    video,
  } = talk;
  const { name, photo, twitter, bio } = speaker || {};

  return (
    <Session date={date} slug={slug} type="talk">
      <SpeakerImage name={name} photo={photo} slug={slug} />
      <header className="talk__header">
        <TalkTime start={start} end={end} />
        <SpeakerName name={name} twitter={twitter} />
        <h3 className="talk__title" role="heading" aria-level="3">
          {title}
        </h3>

        {phase >= 1 && phase <= 3 && !soldout.conference && (
          <Button className="talk__buy" href={ticketUrl}>
            Get your ticket now @ £{ticketPrice}+VAT
          </Button>
        )}
      </header>
      <div className="talk__info">
        <TalkContent content={description} />
        <SpeakerBio bio={bio} />
      </div>
      <TalkMaterial slides={slides} audio={audio} video={video} />
    </Session>
  );
};

export default Talk;
