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

const NavMainMore = () => (
  <div className="nav-main-more">
    <a
      href="#menu"
      id="nav-main-open"
      aria-expanded="false"
      className="nav-main__menu-button js-button-expand"
    >
      Menu
    </a>
    <Tickets namespace="nav-main__ticket-button" />
    <Videos className="nav-main__ticket-button" />
  </div>
);

const NavMain = () => {
  return (
    <>
      <nav className="nav-main" id="menu">
        <div className="nav-main__content">
          <Nav data={data} className="nav-main" />
        </div>
      </nav>
      <NavMainMore />
    </>
  );
};

export default NavMain;
