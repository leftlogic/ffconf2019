import moment from 'moment';
import Link from 'next/link';

import Section from '../section';
import Divider from '../decorations/divider';

import config from '../../config';
import data from './data';

import './workshops.scss';

const [date1] = config.dates;
const [generalWorkshop] = data;
const { price } = generalWorkshop.ticket;
const { date } = generalWorkshop.details;

const dateWorkshops = moment(date).format('D MMMM');
const dateConference = moment(date1).format('D MMMM');

const WorkshopsDetails = ({ twitter, name }) => {
  return (
    <div className="workshops__details">
      <a
        className="workshops__speaker"
        target="_blank"
        rel="noopener"
        href={`https://twitter.com/${twitter}`}
      >
        {name}
      </a>
    </div>
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

const WorkshopsItem = ({ title, speaker, slug }) => {
  const { name, twitter, photo } = speaker;

  return (
    <section className="workshops__item">
      <header className="workshops__header">
        <div className="workshops__header-content">
          <h3 className="workshop-title" role="heading" aria-level="3">
            {title}
          </h3>

          <WorkshopsDetails twitter={twitter} name={name} />

          <div>
            <Link href={`/workshop?slug=${slug}`} as={`/workshop/${slug}`}>
              <a className="button">Details</a>
            </Link>
          </div>
        </div>

        <WorkshopsImage photo={photo} />
      </header>

      <Divider cssModifier="workshops" />
    </section>
  );
};

const Workshops = () => (
  <Section id="workshops" title="Workshops">
    <p className="workshops__intro">
      All workshops are run on {dateWorkshops} and include a conference pass for
      the {dateConference} for £{price}+VAT.
    </p>
    {data.map(workshop => <WorkshopsItem key={workshop.slug} {...workshop} />)}
  </Section>
);

export default Workshops;
