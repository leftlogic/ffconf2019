import Nav from '../nav';
import Tickets from '../tickets';
import './nav-main.scss';

const data = [
  { title: 'sessions', url: '/#sessions' },
  { title: 'workshops', url: '/#workshops' },
  { title: 'locations', url: '/#locations' },
  { title: 'scholarships', url: '/scholarships#scholarship' },
  { title: 'sponsors', url: '/#sponsors' },
];

const NavMain = () => {
  return (
    <nav className="nav-main">
      <button
        id="nav-main-open"
        aria-expanded="false"
        className="nav-main__link nav-main__link--button js-button-expand"
      >
        Open Menu
      </button>
      <div className="nav-main__content">
        <Nav data={data} className="nav-main" />
        <div>
          <Tickets namespace="nav-main-buy" />
        </div>
      </div>
    </nav>
  );
};

export default NavMain;
