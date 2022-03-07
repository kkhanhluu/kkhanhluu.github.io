import { Icon } from 'components/Icons';
import { Side } from 'components/Side';
import * as React from 'react';
import * as styles from './sideIcon.module.scss';

export const SideIcon: React.FunctionComponent = () => (
  <Side orientation="left">
    <a href="https://github.com/kkhanhluu" target="__blank" className={styles.link}>
      <Icon name="github" className={styles.icon} />
    </a>
    <a
      href="https://www.linkedin.com/in/khanh-luu-6043b8163/"
      target="__blank"
      className={styles.link}
    >
      <Icon name="linkedin" className={styles.icon} />
    </a>
    <a
      href="https://medium.com/@luukhanh96"
      target="__blank"
      className={styles.link}
      style={{ paddingBottom: '40px' }}
    >
      <Icon name="medium" className={styles.icon} />
    </a>
  </Side>
);
