import classnames from 'classnames';

import './section.scss';

const Section = ({ id, title, children, mdx }) => {
  const sectionClasses = classnames({
    section: true,
    [`section--${id}`]: !!id,
    'section--mdx': !!mdx,
  });

  return (
    <section
      id={id}
      className={sectionClasses}
      role="region"
      aria-labelledby={id}
    >
      {title && (
        <h2 className="section__title" role="heading" aria-level="2">
          {title}
        </h2>
      )}
      <div className="section__wrapper">{children}</div>
    </section>
  );
};

export default Section;
