import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

import Link from 'components/shared/link';

// Example of the code — https://user-images.githubusercontent.com/20713191/144215307-35538500-b9f0-486d-abed-1a14825bb75c.png
const styles = {
  // TODO: Add base styles
  base: 'inline-flex items-center justify-center !leading-none text-center whitespace-nowrap rounded transition-[colors, opacity] duration-200 outline-none font-bold',
  size: {
    lg: 'h-14 px-8 py-[18px] text-lg',
    sm: 'h-10 px-4 text-[15px]',
    xs: 'h-10 px-5 text-xs',
  },
  theme: {
    blue: 'bg-blue-1 text-white hover:bg-blue-2',
    primary:
      'bg-none text-primary-1 border-2 border-primary-1 hover:bg-primary-1 hover:bg-opacity-10',
    'link-primary':
      'font-semibold inline-flex items-baseline leading-none transition-colors text-primary-1 hover:text-blue-1',
  },
};

const Button = ({ className: additionalClassName, to, size, theme, children, ...otherProps }) => {
  const className = clsx(styles.base, styles.size[size], styles.theme[theme], additionalClassName);

  const Tag = to ? Link : 'button';

  return (
    <Tag className={className} to={to} {...otherProps}>
      {children}
    </Tag>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  to: PropTypes.string,
  size: PropTypes.oneOf(Object.keys(styles.size)),
  theme: PropTypes.oneOf(Object.keys(styles.theme)).isRequired,
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  className: null,
  to: null,
  size: null,
};

export default Button;
