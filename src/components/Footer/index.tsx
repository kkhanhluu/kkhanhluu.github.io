import { Icon } from 'components/Icons';
import * as React from 'react';
import * as style from './footer.module.scss';

export const Footer: React.FunctionComponent = () => (
  <footer className={style.footer}>
    <div className={style.icons}>
      <a href="/">
        <Icon name="github" />
      </a>
      <a href="/">
        <Icon name="linkedin" />
      </a>
      <a href="/">
        <Icon name="facebook" />
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
