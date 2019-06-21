import moment from 'moment';
import { Fragment } from 'react';

import Markdown from '../markdown';
import Section from '../section';

import config from '../../config';
import data from './data';

import './workshop.scss';

const { onSaleDate } = config;
const { phase } = config.config;

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

const WorkshopDetails = ({ twitter, name, date, time }) => {
  const formattedDate = moment(date).format('D MMMM YYYY');

  return (
    <div className="workshop__details">
      <a
        className="workshop__speaker"
        target="_blank"
        rel="noopener"
        href={`https://twitter.com/${twitter}`}
      >
        {name}
      </a>
      <div className="workshop__date">{formattedDate}</div>
      <div className="workshop__time">{time}</div>
    </div>
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
    return (
      <div className="workshop__buy-wrapper">
        <span className="button">On sale {formattedDate}</span>
      </div>
    );
  }

  if (soldout) {
    return (
      <div className="workshop__buy-wrapper">
        <span className="button">Sold Out</span>
      </div>
    );
  }

  return (
    <div className="workshop__buy-wrapper">
      <a href={url} target="_blank" rel="noopener" className="button">
        {children}
      </a>
    </div>
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
    <Section id="workshop" title="workshop">
      <header className="workshop__header">
        <div className="workshop__header-content">
          <h3 className="workshop__title" role="heading" aria-level="3">
            {title}
          </h3>

          <WorkshopDetails
            twitter={twitter}
            name={name}
            date={date}
            time={time}
          />

          <p style={{ marginTop: 0, fontSize: '1.8rem' }}>
            <em>All workshop tickets also include a Thursday ffconf pass.</em>
          </p>

          <WorkshopBuy slug={slug} url={url}>
            Buy tickets @ £{config.workshopPrice}+VAT
          </WorkshopBuy>
        </div>

        <WorkshopImage photo={photo} />
      </header>

      <div className="workshop__content">
        <WorkshopTopics topics={topics} />
        <WorkshopDescription
          description={description}
          extendedDescription={extendedDescription}
        />
      </div>

      <WorkshopBuy slug={slug} url={url}>
        Get your ticket now @ £{config.workshopPrice}+VAT
      </WorkshopBuy>
    </Section>
  );
};

export default Workshop;
