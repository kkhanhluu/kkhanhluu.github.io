import { Link } from 'gatsby';
import * as React from 'react';

interface HeaderNavItemProps {
  isMounted: boolean;
  index: number;
  title: string;
  to: string;
}
export const HeaderNavItem: React.FunctionComponent<HeaderNavItemProps> = ({
  isMounted,
  index,
  title,
  to,
}) => {
  return (
    <Link to={to} className={`${isMounted ? 'fadedown-enter-active' : 'fadedown-enter'}`}>
      <span>{index.toString().padStart(2, '0')}.</span> {title}
    </Link>
  );
};
