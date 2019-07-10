import './common.scss';

const WorkshopSpeaker = ({ name, twitter }) => {
  if (!twitter) {
    return <div className="workshop__speaker tag">{name}</div>;
  }

  return (
    <a
      href={`https://twitter.com/${twitter}`}
      className="workshop__speaker tag"
      target="_blank"
      rel="noopener"
    >
      {name}
    </a>
  );
};

const WorkshopTag = () => <div className="workshop__tag tag">Workshop</div>;

const WorkshopImage = ({ photo }) => {
  return (
    <div
      className="workshop__image dynamic-image dynamic-image--square"
      style={{
        '--bg-photo': `url(/static/images/workshops/2x-${photo})`,
      }}
    />
  );
};

const WorkshopHeader = ({ twitter, name, title, children }) => (
  <header className="workshop__header">
    <WorkshopTag />
    <WorkshopSpeaker twitter={twitter} name={name} />
    <h3 className="workshop__title" role="heading" aria-level="3">
      {title}
    </h3>
    {children}
  </header>
);

export { WorkshopImage, WorkshopHeader };
