import Nav from '../nav';

import config from '../../config';

import './nav-previous-years.scss';

const { year } = config;
const start = 2009;

let data = [{ title: 'The Archive', url: 'https://ffconf.org' }];
for (let i = start; i < year; i++) {
  data.push({
    title: i,
    url: `https://${i}.ffconf.org/`,
  });
}

const NavPreviousYears = () => {
  return (
    <nav className="nav-previous-years">
      <Nav data={data} className="nav-previous-years" />
    </nav>
  );
};

export default NavPreviousYears;
