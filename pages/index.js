/*eslint no-unused-vars: ["error", { "varsIgnorePattern": "Hack" }]*/
import fetch from 'isomorphic-unfetch';

import Hack from '../src/components/hack';
import Sessions from '../src/components/sessions';
import Workshops from '../src/components/workshops';
import Locations from '../src/components/locations';
import Diversity from '../src/components/diversity';
import Quote from '../src/components/quote';
import Welcome from '../src/components/welcome';

import config from '../src/config';

const { year } = config;

const PageIndex = ({ schedule }) => {
  return (
    <>
      <Welcome />
      <Sessions schedule={schedule} />
      <Quote />
      <Workshops />
      <Quote />
      <Locations />
      <Quote />
      <Diversity />
    </>
  );
};

PageIndex.getInitialProps = async () => {
  const res = await fetch(`https://ffconf.org/api/event/${year - 1}`);
  const data = await res.json();
  return { schedule: data };
};

export default PageIndex;
