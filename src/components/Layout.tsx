import { Link, PageProps } from 'gatsby';
// @ts-ignore
import { ThemeContext } from 'gatsby-plugin-theme-switcher';
import * as React from 'react';
import Header from './Header';

type LayoutProps = Pick<PageProps, 'location'> & {
  title: string;
};

export const Layout: React.FunctionComponent<React.PropsWithChildren<LayoutProps>> = ({
  location,
  title,
  children,
}) => {
  // @ts-ignore
  const rootPath = `${__PATH_PREFIX__}/`;
  const { theme, switchTheme } = React.useContext(ThemeContext);

  const isRootPath = location.pathname === rootPath;
  let header;

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    );
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    );
  }
  console.log({ theme });

  return (
    <div className={theme} data-is-root-path={isRootPath}>
      <Header />
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <button
        onClick={() => {
          console.log('click');
          switchTheme('theme-twitter');
        }}
      >
        swtich
      </button>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  );
};
