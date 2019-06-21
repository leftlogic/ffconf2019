import { Fragment } from 'react';
import classnames from 'classnames';

import './stars.scss';

const Stars = ({ cssModifier }) => {
  const leftClasses = classnames({
    stars: true,
    'stars--left': true,
    [`stars-${cssModifier}`]: cssModifier,
    [`stars-${cssModifier}--left`]: cssModifier
  });

  const rightClasses = classnames({
    stars: true,
    'stars--right': true,
    [`stars-${cssModifier}`]: cssModifier,
    [`stars-${cssModifier}--right`]: cssModifier
  });

  return (
    <Fragment>
      <div className={leftClasses} />
      <div className={rightClasses} />
    </Fragment>
  );
};

export default Stars;
