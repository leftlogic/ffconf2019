import Link from 'next/link';
import moment from 'moment';

import Tickets from '../tickets';
import Divider from '../decorations/divider';

import config from '../../config';

import './header.scss';

const { dates, year, videos } = config;
const [date1, date2] = dates;
const momentDate1 = moment(date1);
const momentDate2 = moment(date2);
const when = `${momentDate1.format('Do')} & ${momentDate2.format('Do MMMM')}`;
const { phase } = config.config;

const Logo = () => {
  return (
    <div className="logo">
      <Link href="/">
        <a className="logo__link" aria-label="f f conf">
          <img
            className="logo__image"
            src="/static/images/logo-small.png"
            alt={`ffconf ${year}`}
            srcSet="/static/images/logo-small.png 160w, /static/images/logo-big.png 300w"
            sizes="(min-width: 1024px) 300px, 100px"
          />
        </a>
      </Link>
    </div>
  );
};

const Intro = () => {
  return (
    <div className="intro">
      <p className="intro__text intro__title">#ffconf</p>
      <p className="intro__text">Repeated Twice</p>
      <p className="intro__text">{when}</p>
      <p className="intro__text">
        Duke of York’s Picturehouse, Brighton,&nbsp;UK
      </p>
      <p style={{ marginTop: '10px' }} className="intro__text">
        Tickets @ £{config.ticketPrice}+VAT
      </p>
    </div>
  );
};

const VideoButton = () => {
  if (phase < 4) {
    return null;
  }

  if (videos) {
    return (
      <a href={videos} target="_blank" rel="noopener" className="">
        Watch Now
      </a>
    );
  }

  return <span className="">Watch Soon</span>;
};

const Header = () => {
  return (
    <header className="header" role="banner">
      <div className="header__top">
        <Logo />
        <Intro />
        <Tickets
          namespace="button-buy"
          className={`dynamic-image dynamic-image--square phase-${phase}`}
        />
        <VideoButton />
      </div>
      <Divider cssModifier="header" />
    </header>
  );
};

export default Header;
