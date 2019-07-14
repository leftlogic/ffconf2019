import classnames from 'classnames';

import Section from '../section';
import Button from '../button';

import config from '../../config';
import data from './data';

import './sponsors.scss';

const { sponsorUrl, sponsorAvailable } = config;

const SponsorsAvailable = () => {
  if (!sponsorAvailable) {
    return null;
  }

  return (
    <section className="sponsors-category sponsors-category--available">
      <p className="sponsor__intro">
        To become a sponsor please contact Remy & Julie at{' '}
        <a href="mailto:events@leftlogic.com">events@leftlogic.com</a>
      </p>
      <Button
        className="sponsor__link sponsor__link--available"
        href={sponsorUrl}>
        Request sponsorship pack
      </Button>
    </section>
  );
};

const Sponsor = ({ name, url, img, slug }) => {
  const wrapperClasses = classnames({
    sponsor: true,
    [`sponsor--${slug}`]: !!slug,
  });

  return (
    <figure className={wrapperClasses}>
      <a
        className="sponsor__link sponsor__link--image"
        href={url}
        target="_blank"
        rel="noopener"
        title={name}>
        <img
          className="sponsor__image"
          src={`/static/images/sponsors/${img}`}
          alt={name}
        />
      </a>
    </figure>
  );
};

const SponsorsCategory = ({ slug, title, list }) => {
  if (!list.length) {
    return null;
  }

  const wrapperClasses = classnames({
    'sponsors-category': true,
    [`sponsors-category--${slug}`]: !!slug,
  });

  return (
    <section className={wrapperClasses}>
      <h3 className="sponsors-category__title" role="heading" aria-level="3">
        {title} sponsors
      </h3>
      <div className="sponsors-category__list">
        {list.map(sponsor => (
          <Sponsor key={sponsor.name} slug={slug} {...sponsor} />
        ))}
      </div>
    </section>
  );
};

const Sponsors = () => {
  return (
    <Section id="sponsors">
      <h2
        className="sponsors__title section__title"
        role="heading"
        aria-level="2">
        Our sponsors
      </h2>
      <SponsorsAvailable />

      {data.map(cat => (
        <SponsorsCategory key={cat.slug} {...cat} />
      ))}
    </Section>
  );
};

export default Sponsors;
