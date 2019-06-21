import Section from '../section';
import Divider from '../decorations/divider';

import data from './data';

import './locations.scss';

const { map, locations } = data;

const Map = () => {
  return (
    <a href={map} target="_blank" rel="noopener" className="locations__map">
      <img src="/static/images/map.png" className="locations__map-image" />
    </a>
  );
};

const Location = ({ location }) => {
  const { url, name, detail, extra } = location;

  return (
    <div className="location">
      <a
        className="name url org fn location__link"
        href={url}
        target="_blank"
        rel="noopener"
      >
        {name}
      </a>
      <div className="location__description">
        <p className="location__detail">{detail}</p>
        {extra && <p className="location__extra">{extra}</p>}
      </div>
    </div>
  );
};

const LocationsCategory = ({ type, location }) => {
  return (
    <li className="locations__category">
      <h3 className="locations-category__title" role="heading" aria-level="3">
        {type}
      </h3>
      <ul className="locations-category__list">
        {location.map(location => (
          <li key={location.name} className="vcard locations-category__item">
            <Location location={location} />
          </li>
        ))}
      </ul>
      <Divider cssModifier="locations" />
    </li>
  );
};

const Locations = () => (
  <Section id="locations" title="Locations">
    {/* <Map /> */}
    <ul className="locations">
      {locations.map(item => <LocationsCategory key={item.type} {...item} />)}
    </ul>
  </Section>
);

export default Locations;
