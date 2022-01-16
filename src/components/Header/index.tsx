import * as React from 'react';
import * as styles from './header.module.scss';
import { HeaderNavItem } from './NavItem';
// import GlobalFonts from '../../fonts/fonts';

export const Header: React.FunctionComponent = () => {
  const isMounted = React.useRef(false);

  React.useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  return (
    <>
      {/* <GlobalFonts /> */}
      <header className={styles.header}>
        <nav>
          <HeaderNavItem
            transitionDelay={100}
            isMounted={isMounted.current}
            index={1}
            title="About"
            to="/"
          />
          <HeaderNavItem
            transitionDelay={200}
            isMounted={isMounted.current}
            index={2}
            title="Blogs"
            to="/new-beginnings"
          />

          <a
            href="https://kkhanhluu.github.io/assets/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{ transitionDelay: '500ms' }}
            className={`resume ${isMounted ? 'fadedown-enter-active' : 'fadedown-enter'}`}
          >
            <button>Resume</button>
          </a>
        </nav>
      </header>
    </>
  );
};

export default Header;
