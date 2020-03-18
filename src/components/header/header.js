import { Link } from 'preact-router/match';
import { Fragment } from 'preact';

import style from './header.scss';
import GlobalFonts from '../../fonts/fonts';

const Header = () => (
  <Fragment>
    <GlobalFonts />
    <header class={style.header}>
      <nav>
        <Link activeClassName={style.active} href='/'>
          <span>01.</span> About
        </Link>
        <Link activeClassName={style.active} href='/'>
          <span>02.</span> Experience
        </Link>
        <Link activeClassName={style.active} href='/'>
          <span>03.</span> Work
        </Link>
        <Link activeClassName={style.active} href='/'>
          <span>04.</span> Contact
        </Link>
        <Link activeClassName={style.active} href='/'>
          <button>Resume</button>
        </Link>
      </nav>
    </header>
  </Fragment>
);

export default Header;
