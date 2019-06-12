import fetch from 'isomorphic-unfetch';
import Session from '../components/Session';
import data from '../data/data';

const Page = ({ sessions }) => <><h1>Event data: {data.date}</h1>
{ sessions.map(_ => <Session key={_.slug} {..._}></Session>)}
</>

Page.getInitialProps = async () => {
  const res = await fetch('https://ffconf.org/api/event/2018');
  const sessions = await res.json();
  return { sessions }
}

export default Page;
