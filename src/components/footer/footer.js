import style from './footer.scss';
import GlobalFonts from '../../fonts/fonts';
import { Fragment } from 'preact';

const Footer = () => (
  <Fragment>
    <GlobalFonts />
    <footer class={style.footer}>
      <div class={style.built}>
        Built by <a>Kim Khanh Luu</a>
      </div>
      <div class={style.inspired}>
        Design inspired by{' '}
        <a href='https://bchiang7.github.io/'>Brittany Chiang</a>
      </div>
    </footer>
  </Fragment>
);

export default Footer;
