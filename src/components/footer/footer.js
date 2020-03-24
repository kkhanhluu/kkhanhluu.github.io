import { Fragment } from 'preact';

import style from './footer.scss';
import GlobalFonts from '../../fonts/fonts';
import Icon from '../icons/icon';

const Footer = () => (
  <Fragment>
    <GlobalFonts />
    <footer class={style.footer}>
      <div class={style.icons}>
        <a href='/' class={style.link}>
          <Icon type='github' class={style.icon} />
        </a>
        <a href='/' class={style.link}>
          <Icon type='linkedin' class={style.icon} />
        </a>
        <a href='/' class={style.link}>
          <Icon type='twitter' class={style.icon} />
        </a>
        <a href='/' class={style.link} style={{ paddingBottom: '40px' }}>
          <Icon type='facebook' class={style.icon} />
        </a>
      </div>
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
