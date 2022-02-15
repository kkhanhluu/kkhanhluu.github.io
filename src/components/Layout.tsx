import { PageProps } from 'gatsby';
// @ts-ignore
import { ThemeContext } from 'gatsby-plugin-theme-switcher';
import * as React from 'react';
import { Footer } from './Footer';
import { Header } from './Header';

type LayoutProps = Pick<PageProps, 'location'> & {
  title: string;
  showFooter?: boolean;
};

export const Layout: React.FunctionComponent<React.PropsWithChildren<LayoutProps>> = ({
  location,
  children,
  showFooter = true,
}) => {
  // @ts-ignore
  const rootPath = `${__PATH_PREFIX__}/`;
  const { theme } = React.useContext(ThemeContext);

  const isRootPath = location.pathname === rootPath;

  return (
    <div className={theme} data-is-root-path={isRootPath}>
      <Header />
      <main>{children}</main>
      {showFooter && <Footer />}
    </div>
  );
};
