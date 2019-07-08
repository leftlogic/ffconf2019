import classnames from 'classnames';

const Session = ({ date, slug, type, children }) => {
  const wrapperClasses = classnames({
    sessions__item: true,
    [`sessions__item--${type}`]: type,
    'js-session': true,
  });

  return (
    <li className={wrapperClasses} id={slug} data-date={date} data-slug={slug}>
      {children}
    </li>
  );
};

export default Session;
