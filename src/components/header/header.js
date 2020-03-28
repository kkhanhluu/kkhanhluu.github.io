import { Link } from 'preact-router/match';
import { Fragment } from 'preact';
import { useEffect, useState } from 'preact/hooks';

import style from './header.scss';
import GlobalFonts from '../../fonts/fonts';
import '../../style/index.css';

const Header = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsMounted(true);
    }, 200);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <Fragment>
      <GlobalFonts />
      <header class={`${style.header}`}>
        <nav>
          <Link
            style={{ transitionDelay: '100ms' }}
            class={`${isMounted ? 'fadedown-enter-active' : 'fadedown-enter'}`}
            activeClassName={style.active}
            href='/'
          >
            <span>01.</span> About
          </Link>
          <Link
            style={{ transitionDelay: '200ms' }}
            class={`${isMounted ? 'fadedown-enter-active' : 'fadedown-enter'}`}
            activeClassName={style.active}
            href='/'
          >
            <span>02.</span> Experience
          </Link>
          <Link
            style={{ transitionDelay: '300ms' }}
            class={`${isMounted ? 'fadedown-enter-active' : 'fadedown-enter'}`}
            activeClassName={style.active}
            href='/'
          >
            <span>03.</span> Work
          </Link>
          <Link
            style={{ transitionDelay: '400ms' }}
            class={`${isMounted ? 'fadedown-enter-active' : 'fadedown-enter'}`}
            activeClassName={style.active}
            href='/'
          >
            <span>04.</span> Contact
          </Link>
          <Link
            style={{ transitionDelay: '500ms' }}
            class={`${isMounted ? 'fadedown-enter-active' : 'fadedown-enter'}`}
            activeClassName={style.active}
            href='/'
          >
            <button>Resume</button>
          </Link>
        </nav>
      </header>
    </Fragment>
  );
};

export default Header;
