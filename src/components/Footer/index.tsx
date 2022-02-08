import { Icon } from 'components/Icons';
import * as React from 'react';
import * as style from './footer.module.scss';

export const Footer: React.FunctionComponent = () => (
  <footer className={style.footer}>
    <div className={style.icons}>
      <a href="/" className={style.link}>
        <Icon name="github" className={style.icon} />
      </a>
      <a href="/" className={style.link}>
        <Icon name="linkedin" className={style.icon} />
      </a>
      <a href="/" className={style.link}>
        <Icon name="facebook" className={style.icon} />
      </a>
    </div>
    <div className={style.built}>
      Design inspired by{' '}
      <a target="__blank" href="https://brittanychiang.com/">
        Brittany Chiang
      </a>
    </div>
    <div className={style.inspired}>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.com">Gatsby</a>
    </div>
  </footer>
);

export default Footer;
