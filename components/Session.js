import Origin from './Origin';

const Session = ({ title, description, speaker }) => <div className="session">
  <h2>{ title }</h2>
  <div className="talk">
    <h3>My talk</h3>
    <p>{ description }</p>
    <Origin speaker={speaker} />
  </div>
</div>

export default Session;
