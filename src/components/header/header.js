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
          <a
            href='#about'
            style={{ transitionDelay: '100ms' }}
            class={`${isMounted ? 'fadedown-enter-active' : 'fadedown-enter'}`}
          >
            <span>01.</span> About
          </a>

          <a
            href='#jobs'
            style={{ transitionDelay: '200ms' }}
            class={`${isMounted ? 'fadedown-enter-active' : 'fadedown-enter'}`}
          >
            <span>02.</span> Experience
          </a>

          <a
            href='#projects'
            style={{ transitionDelay: '300ms' }}
            class={`${isMounted ? 'fadedown-enter-active' : 'fadedown-enter'}`}
          >
            <span>03.</span> Work
          </a>

          <a
            href='#contact'
            style={{ transitionDelay: '400ms' }}
            class={`${isMounted ? 'fadedown-enter-active' : 'fadedown-enter'}`}
            activeClassName={style.active}
          >
            <span>04.</span> Contact
          </a>

          <a
            href='/assets/Resume.pdf'
            target='_blank'
            rel='noopener noreferrer'
            className={style.resume}
            style={{ transitionDelay: '500ms' }}
            class={`${isMounted ? 'fadedown-enter-active' : 'fadedown-enter'}`}
          >
            <button>Resume</button>
          </a>
        </nav>
      </header>
    </Fragment>
  );
};

export default Header;
