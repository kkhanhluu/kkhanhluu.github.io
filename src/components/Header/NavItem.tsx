import { Link } from 'gatsby';
import * as React from 'react';

interface HeaderNavItemProps {
  isMounted: boolean;
  transitionDelay: number;
  index: number;
  title: string;
  to: string;
}
export const HeaderNavItem: React.FunctionComponent<HeaderNavItemProps> = ({
  isMounted,
  transitionDelay,
  index,
  title,
  to,
}) => {
  return (
    <Link
      to={to}
      style={{ transitionDelay: `${transitionDelay}ms` }}
      className={`${isMounted ? 'fadedown-enter-active' : 'fadedown-enter'}`}
    >
      <span>{index.toString().padStart(2, '0')}.</span> {title}
    </Link>
  );
};
