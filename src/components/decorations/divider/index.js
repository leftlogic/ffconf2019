import classnames from 'classnames';

import './divider.scss';

const Divider = ({ className, cssModifier }) => {
  const wrapperClasses = classnames({
    divider: true,
    [`divider--${cssModifier}`]: cssModifier,
    [className]: className,
  });
  return <div className={wrapperClasses} aria-hidden="true" />;
};

export default Divider;
