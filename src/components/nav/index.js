import { withRouter } from 'next/router';
import classnames from 'classnames';

const NavItem = ({ className, title, url, pathname }) => {
  const abs = url.startsWith('http');
  return (
    <li className={`${className}__item`}>
      <a
        href={url}
        className={classnames({
          [`${className}__link`]: true,
          [`${className}__link--selected`]: pathname === url,
        })}
        target={abs ? '_blank' : null}
        rel={abs ? 'noopener' : null}
      >
        {title}
      </a>
    </li>
  );
};

const Nav = ({ router, data, className }) => {
  const { pathname } = router;

  return (
    <ul className={`${className}__list`}>
      {data.map(item => (
        <NavItem
          key={item.title}
          className={className}
          {...item}
          pathname={pathname}
        />
      ))}
    </ul>
  );
};

export default withRouter(Nav);
