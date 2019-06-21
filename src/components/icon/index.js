import classnames from 'classnames';

import './icon.scss';

import badge from 'raw-loader!./assets/badge.svg';
import language from 'raw-loader!./assets/language.svg';
import donut from 'raw-loader!./assets/donut.svg';
import party from 'raw-loader!./assets/party.svg';
import quotes from 'raw-loader!./assets/quotes.svg';

const data = { badge, language, donut, party, quotes };

const Icon = ({ icon, className }) => {
  const svgClasses = classnames({
    icon: true,
    [`icon--${icon}`]: !!icon,
    [className]: !!className
  });

  return (
    <div
      aria-hidden="true"
      className={svgClasses}
      dangerouslySetInnerHTML={{ __html: `${data[icon]}` }}
    />
  );
};

export default Icon;
