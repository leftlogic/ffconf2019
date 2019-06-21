import Nav from '../nav';
import { sponsorUrl } from '../../config';
import config from '../../config';
import './nav-full.scss';

const data = [
  { title: 'tickets', url: config.ticketUrl },
  { title: 'sessions', url: '/#sessions' },
  { title: 'workshops', url: '/#workshops' },
  // { title: 'locations', url: '/#locations' },
  { title: 'scholarships', url: '/scholarships#scholarship' },
  {
    title: 'sponsorship',
    url: sponsorUrl,
  },
  { title: 'diversity initiative', url: '/#diversity' },
  { title: 'code of conduct', url: '/code-of-conduct' },
  { title: 'terms', url: '/terms' },
  { title: 'privacy', url: '/privacy' },
];

const NavFull = () => {
  return (
    <nav className="nav-full">
      <Nav data={data} className="nav-full" />
    </nav>
  );
};

export default NavFull;
