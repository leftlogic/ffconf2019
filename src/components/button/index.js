import PropTypes from 'prop-types';
import classnames from 'classnames';

import './button.scss';

const pattern = /^((http|https):\/\/)/;

const Button = ({ href, children, className, outline }) => {
  const buttonClasses = classnames({
    button: true,
    [`button--outline`]: !!outline,
    [className]: !!className,
  });

  const extAttr = pattern.test(href)
    ? { target: '_blank', rel: 'noopener' }
    : {};

  return (
    <a className={buttonClasses} href={href} {...extAttr}>
      {children}
    </a>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  href: PropTypes.string.isRequired,
  outline: PropTypes.bool,
};

export default Button;
