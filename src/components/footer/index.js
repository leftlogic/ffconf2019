import Link from 'next/link';
import moment from 'moment';

import NavFull from '../nav-full';
import NavPreviousYears from '../nav-previous-years';

import config from '../../config';

import './footer.scss';

const { dates, year } = config;
const [date1, date2] = dates;
const momentDate1 = moment(date1);
const momentDate2 = moment(date2);
const when = `${momentDate1.format('D')} & ${momentDate2.format('D-MMM')}`;

const Footer = () => {
  return (
    <footer className="footer">
      <h4 className="footer__title">ffconf {year}</h4>

      <NavFull />

      <hr className="footer__divider" />

      <p className="blurb footer__content">
        <Link href="/">
          <a>#ffconf</a>
        </Link>{' '}
        is run twice on both {when}, in Brighton, UK. Organised by Left Logic, a
        small Brighton (UK) based development company, specialising in Node
        based applications and bleeding edge front end technology.
      </p>

      <p className="codeofconduct footer__content">
        By attending any of our events (workshops & conference & fringe events)
        you are agreeing to our{' '}
        <Link href="/code-of-conduct">
          <a>code of conduct</a>
        </Link>.
      </p>

      <p className="curators footer__content">
        Curated and created with much love, tears and sweat by{' '}
        <a href="https://twitter.com/rem" target="_blank" rel="noopener">
          Remy
        </a>{' '}
        &{' '}
        <a href="https://twitter.com/Julieanne" target="_blank" rel="noopener">
          Julie
        </a>{' '}
        of{' '}
        <a href="http://leftlogic.com" target="_blank" rel="noopener">
          Left&nbsp;Logic
        </a>
      </p>

      <NavPreviousYears />
    </footer>
  );
};

export default Footer;
