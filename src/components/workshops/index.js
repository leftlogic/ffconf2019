// import moment from 'moment';

import Section from '../section';
import Button from '../button';

import config from '../../config';
import data from './data';

import './workshops.scss';

const { ticketUrl } = config;
const { phase, soldout } = config.config;

// const [date] = config.dates;
// const [generalWorkshop] = data;
// const { price } = generalWorkshop.ticket;

// const dateWorkshops = moment(generalWorkshop.details.date).format('D MMMM');
// const dateConference = moment(date).format('D MMMM');

const WorkshopsSpeaker = ({ name, twitter }) => {
  if (!twitter) {
    return <div className="workshops__speaker">{name}</div>;
  }

  return (
    <a
      href={`https://twitter.com/${twitter}`}
      className="workshops__speaker"
      target="_blank"
      rel="noopener"
    >
      {name}
    </a>
  );
};

const WorkshopsImage = ({ photo }) => {
  return (
    <div
      className="workshops__image dynamic-image dynamic-image--square"
      style={{
        '--bg-photo': `url(/static/images/workshops/2x-${photo})`,
      }}
    />
  );
};

const WorkshopsItem = ({ title, description, speaker, slug }) => {
  const { name, twitter, photo } = speaker;

  return (
    <section className="workshops__item">
      <header className="workshops__header">
        <div className="workshops__tag">Workshop</div>
        <WorkshopsSpeaker twitter={twitter} name={name} />
        <h3 className="workshops__title" role="heading" aria-level="3">
          {title}
        </h3>
      </header>
      <div className="workshops__info">
        <p className="workshops__description">{description}</p>

        <Button
          href={`/workshop?slug=${slug}`}
          as={`/workshop/${slug}`}
          className="workshops__link"
        >
          Full details
        </Button>

        {phase >= 1 && phase <= 3 && !soldout[slug] && (
          <Button outline={true} className="workshops__buy" href={ticketUrl}>
            Buy tickets
          </Button>
        )}

        <p className="workshops__intro">
          Workshop tickets include a ffconf pass ticket for the conference on
          Friday.
        </p>
      </div>
      <WorkshopsImage photo={photo} />
    </section>
  );
};

const Workshops = () => (
  <Section id="workshops">
    {data.map(workshop => (
      <WorkshopsItem key={workshop.slug} {...workshop} />
    ))}
  </Section>
);

export default Workshops;
