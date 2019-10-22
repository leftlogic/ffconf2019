import PropTypes from 'prop-types';
import classnames from 'classnames';
import Link from 'next/link';

import './button.scss';

const pattern = /^((http|https):\/\/)/;

const Button = ({ href, as, children, className, style, outline }) => {
  const buttonClasses = classnames({
    button: true,
    [`button--outline`]: !!outline,
    [className]: !!className,
  });

  if (!href) {
    return <span className={buttonClasses}>{children}</span>;
  }

  const isExternal = pattern.test(href);

  if (!isExternal) {
    return (
      <Link href={href} as={as}>
        <a className={buttonClasses}>{children}</a>
      </Link>
    );
  }

  return (
    <a className={buttonClasses} href={href} style={style} target="_blank" rel="noopener">
      {children}
    </a>
  );
};

Button.propTypes = {
  as: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  href: PropTypes.string,
  outline: PropTypes.bool,
  style: PropTypes.object,
};

export default Button;
