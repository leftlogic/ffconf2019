import moment from 'moment';
import { Fragment } from 'react';

import Markdown from '../markdown';
import Section from '../section';
import Button from '../button';

import config from '../../config';
import data from './data';

import './workshop.scss';

const { onSaleDate } = config;
const { phase } = config.config;

const WorkshopSpeaker = ({ name, twitter }) => {
  if (!twitter) {
    return <div className="workshop__speaker tag">{name}</div>;
  }

  return (
    <a
      href={`https://twitter.com/${twitter}`}
      className="workshop__speaker tag"
      target="_blank"
      rel="noopener"
    >
      {name}
    </a>
  );
};

const WorkshopTopic = ({ title, description }) => {
  return (
    <li className="workshop__topic">
      <h4 className="workshop__topic-title" role="heading" aria-level="4">
        {title}
      </h4>
      {description}
    </li>
  );
};

const WorkshopDetails = ({ date, time }) => {
  const formattedDate = moment(date).format('D MMMM YYYY');

  return (
    <>
      <div className="workshop__date tag">{formattedDate}</div>
      <div className="workshop__time tag">{time}</div>
    </>
  );
};

const WorkshopImage = ({ photo }) => {
  return (
    <div
      className="workshop__image dynamic-image dynamic-image--square"
      style={{
        '--bg-photo': `url(/static/images/workshops/2x-${photo})`,
      }}
    />
  );
};

const WorkshopTopics = ({ topics = [] }) => {
  if (!topics.length) {
    return null;
  }

  return (
    <Fragment>
      <h2 className="workshop__topics-title">What you'll learn on the day</h2>
      <ul className="workshop__topics-list">
        {topics.map((topic, index) => (
          <WorkshopTopic key={`workshop-topics-${index}`} {...topic} />
        ))}
      </ul>
    </Fragment>
  );
};

const WorkshopDescription = ({ description, extendedDescription }) => {
  return (
    <Fragment>
      <h2 className="workshop__description-title">Detailed description</h2>
      <Markdown className="workshop__description">{description}</Markdown>
      <Markdown className="workshop__extended-description">
        {extendedDescription}
      </Markdown>
    </Fragment>
  );
};

const WorkshopBuy = ({ slug, url, children }) => {
  const soldout = config.config.soldout[slug];
  const formattedDate = moment(onSaleDate).format('D MMMM');

  if (phase > 3) {
    return null;
  }

  if (phase < 1) {
    return <Button className="workshop__buy">On sale {formattedDate}</Button>;
  }

  if (soldout) {
    return <Button className="workshop__buy">Sold Out</Button>;
  }

  return (
    <Button className="workshop__buy" href={url}>
      {children}
    </Button>
  );
};

const Workshop = ({ selectedSlug }) => {
  const item = data.reduce((acc, currentItem) => {
    if (currentItem.slug === selectedSlug) {
      acc = currentItem;
    }

    return acc;
  }, null);

  if (!item) {
    return null;
  }

  const {
    slug,
    title,
    speaker,
    details,
    ticket,
    topics,
    description,
    extendedDescription,
  } = item;
  const { name, twitter, photo } = speaker;
  const { date, time } = details;
  const { url } = ticket;

  return (
    <Section id="workshop">
      <section className="workshop">
        <header className="workshop__header">
          <div className="workshop__tag tag">Workshop</div>
          <WorkshopSpeaker twitter={twitter} name={name} />
          <h3 className="workshop__title" role="heading" aria-level="3">
            {title}
          </h3>

          <WorkshopDetails date={date} time={time} />

          <p className="workshop__intro">
            <em>All workshop tickets also include a Thursday ffconf pass.</em>
          </p>

          <WorkshopBuy slug={slug} url={url}>
            Buy tickets @ £{config.workshopPrice}+VAT
          </WorkshopBuy>
        </header>

        <div className="workshop__content">
          <WorkshopTopics topics={topics} />
          <WorkshopDescription
            description={description}
            extendedDescription={extendedDescription}
          />
          <WorkshopBuy slug={slug} url={url}>
            Get your ticket now @ £{config.workshopPrice}+VAT
          </WorkshopBuy>
        </div>

        <WorkshopImage photo={photo} />
      </section>
    </Section>
  );
};

export default Workshop;
