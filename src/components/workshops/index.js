// import moment from 'moment';

import Section from '../section';
import Button from '../button';
import { WorkshopImage, WorkshopHeader } from './common';

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

const WorkshopsItem = ({ title, description, speaker, slug }) => {
  const { name, twitter, photo } = speaker;

  return (
    <section className="workshops__item workshop-wrapper">
      <WorkshopHeader twitter={twitter} name={name} title={title} />

      <div className="workshops__info">
        <p className="workshops__description">{description}</p>

        <Button
          href={`/workshop?slug=${slug}`}
          as={`/workshop/${slug}/#workshop`}
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
      <WorkshopImage photo={photo} />
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
