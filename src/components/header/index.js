import Link from 'next/link';
import moment from 'moment';

import config from '../../config';

import './header.scss';

const { dates, year } = config;
const [date] = dates;
const momentDate = moment(date);
const when = `${momentDate.format('dddd D MMM YYYY')}`;

const Logo = () => {
  return (
    <div className="logo">
      <Link href="/">
        <a className="logo__link" aria-label="f f conf">
          <img
            width="232"
            className="logo__image"
            src="/images/logo-small.png"
            alt={`ffconf ${year}`}
            srcSet="/images/logo-small.png 160w, /images/logo-big.png 300w"
            sizes="(min-width: 1024px) 300px, 100px"
          />
        </a>
      </Link>
    </div>
  );
};

const Header = () => {
  return (
    <header className="header" role="banner">
      <div className="header__date">{when}</div>
      <div className="header__location">
        <span className="header__location-place">
          Duke of York’s Picturehouse,
        </span>{' '}
        <span className="header__location-city">Brighton,&nbsp;UK</span>
      </div>
      <Logo />
      <div className="header__intro">
        A full day of 8 carefully curated sessions for an audience that cares
        about the future of the web, and, who want their ideas challenged.
      </div>
    </header>
  );
};

export default Header;
