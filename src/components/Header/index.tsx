// @ts-ignore
import { ThemeContext } from 'gatsby-plugin-theme-switcher';
import * as React from 'react';
// @ts-ignore
import moon from '../../images/moon.png';
// @ts-ignore
import sun from '../../images/sun.png';
import { Toggle } from '../Toggle';
import * as styles from './header.module.scss';
import { HeaderNavItem } from './NavItem';

export const Header: React.FunctionComponent = () => {
  const { theme, switchTheme } = React.useContext(ThemeContext);
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <header className={styles.header}>
      <Toggle
        checked={theme === 'theme-twitter'}
        onChange={e => switchTheme(e.target.checked ? 'theme-twitter' : 'theme-midnightgreen')}
        CheckedIcon={
          <img
            src={sun}
            width="16"
            height="16"
            role="presentation"
            style={{ pointerEvents: 'none' }}
          />
        }
        UncheckedIcon={
          <img
            src={moon}
            width="16"
            height="16"
            role="presentation"
            style={{ pointerEvents: 'none' }}
          />
        }
      />
      <nav>
        <HeaderNavItem isMounted={isMounted} index={1} title="Blogs" to="/" />
        <HeaderNavItem isMounted={isMounted} index={2} title="About" to="/about" />

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
  );
};

export default Header;
