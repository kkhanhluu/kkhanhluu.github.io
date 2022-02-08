import { PageProps } from 'gatsby';
// @ts-ignore
import { ThemeContext } from 'gatsby-plugin-theme-switcher';
import * as React from 'react';
import Footer from './Footer';
import Header from './Header';

type LayoutProps = Pick<PageProps, 'location'> & {
  title: string;
};

export const Layout: React.FunctionComponent<React.PropsWithChildren<LayoutProps>> = ({
  location,
  children,
}) => {
  // @ts-ignore
  const rootPath = `${__PATH_PREFIX__}/`;
  const { theme } = React.useContext(ThemeContext);

  const isRootPath = location.pathname === rootPath;

  return (
    <div className={theme} data-is-root-path={isRootPath}>
      <Header />
      <main>{children}</main>

      {/* <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer> */}
      <Footer />
    </div>
  );
};
