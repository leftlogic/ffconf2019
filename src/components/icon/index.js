import classnames from 'classnames';

import './icon.scss';

// import quotes from 'raw-loader!./assets/quotes.svg';

// const data = { quotes };

const Icon = ({ icon, className }) => {
  const svgClasses = classnames({
    icon: true,
    [`icon--${icon}`]: !!icon,
    [className]: !!className,
  });

  return (
    // <div
    //   aria-hidden="true"
    //   className={svgClasses}
    //   dangerouslySetInnerHTML={{ __html: `${data[icon]}` }}
    // />
    <div aria-hidden="true" className={svgClasses}>
      <img src={`/images/style/${icon}.svg`} />
    </div>
  );
};

export default Icon;
