import Nav from '../nav';

import config from '../../config';

import './nav-previous-years.scss';

const { year } = config;
const start = 2009;

let data = [];
for (let i = start; i < year; i++) {
  data.push({
    title: i,
    url: `https://${i}.ffconf.org/`
  });
}

const NavPreviousYears = () => {
  return (
    <nav className="nav-previous-years">
      <div className="nav-previous-years__title">Previous years:</div>
      <Nav data={data} className="nav-previous-years" />
    </nav>
  );
};

export default NavPreviousYears;
