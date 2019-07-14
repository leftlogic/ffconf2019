import Link from 'next/link';

import NavFull from '../nav-full';
import NavPreviousYears from '../nav-previous-years';

import './footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <p>
          Curated and created with much love, tears and sweat by{' '}
          <a href="https://twitter.com/rem" target="_blank" rel="noopener">
            Remy
          </a>{' '}
          &{' '}
          <a
            href="https://twitter.com/Julieanne"
            target="_blank"
            rel="noopener"
          >
            Julie
          </a>{' '}
          of{' '}
          <a href="https://leftlogic.com/" target="_blank" rel="noopener">
            Left&nbsp;Logic
          </a>
          , a small Brighton (UK) based development company, specialising in
          Node based applications and bleeding edge front end technology.
        </p>

        <p>
          By attending any of our events (workshops & conference & fringe
          events) you are agreeing to our{' '}
          <Link href="/code-of-conduct">
            <a>code of conduct</a>
          </Link>
          .
        </p>
      </div>

      <NavFull />

      <NavPreviousYears />
    </footer>
  );
};

export default Footer;
