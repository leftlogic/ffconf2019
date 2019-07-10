import Nav from '../nav';
import Tickets from '../tickets';
import Videos from '../videos';

import './nav-main.scss';

const data = [
  { title: 'sessions', url: '/#sessions' },
  { title: 'workshops', url: '/#workshops' },
  { title: 'locations', url: '/#locations' },
  { title: 'scholarship', url: '/scholarship#scholarship' },
  { title: 'sponsors', url: '/#sponsors' },
];

const NavMain = () => {
  return (
    <nav className="nav-main">
      <div className="nav-main__content">
        <button
          id="nav-main-open"
          aria-expanded="false"
          className="nav-main__link--button js-button-expand"
        >
          Menu
        </button>
        <Tickets namespace="nav-main__button" />
        <Videos className="nav-main__button" />
        <Nav data={data} className="nav-main" />
      </div>
    </nav>
  );
};

export default NavMain;
