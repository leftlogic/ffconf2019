import classnames from 'classnames';

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
      <h3 className="sponsors-category__title" role="heading" aria-level="3">
        Become a sponsor
      </h3>
      <a
        className="sponsor__link sponsor__link--available button"
        href={sponsorUrl}
        target="_blank"
        rel="noopener"
      >
        See our sponsorship pack &amp; get in touch today
      </a>
    </section>
  );
};

const Sponsor = ({ name, url, img, slug, total }) => {
  const wrapperClasses = classnames({
    sponsor: true,
    [`sponsor--${slug}`]: !!slug
  });

  return (
    <figure className={wrapperClasses} style={{ '--total': total }}>
      <a
        className="sponsor__link sponsor__link--image"
        href={url}
        target="_blank"
        rel="noopener"
        title={name}
      >
        <img
          className="sponsor__image"
          src={`/static/images/sponsors/${img}`}
          alt={name}
        />
      </a>
    </figure>
  );
};

const SponsorsCategory = ({ slug, title, list, total }) => {
  if (!list.length) {
    return null;
  }

  const wrapperClasses = classnames({
    'sponsors-category': true,
    [`sponsors-category--${slug}`]: !!slug
  });

  return (
    <section className={wrapperClasses}>
      <h3 className="sponsors-category__title" role="heading" aria-level="3">
        {title} sponsors
      </h3>
      <div className="sponsors-category__list">
        {list.map(sponsor => (
          <Sponsor key={sponsor.name} slug={slug} total={total} {...sponsor} />
        ))}
      </div>
    </section>
  );
};

const Sponsors = () => {
  return (
    <div className="sponsors" id="sponsors">
      {data.map(cat => <SponsorsCategory key={cat.slug} {...cat} />)}

      <SponsorsAvailable />
    </div>
  );
};

export default Sponsors;
