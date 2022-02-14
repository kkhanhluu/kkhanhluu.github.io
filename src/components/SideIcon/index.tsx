import { Icon } from 'components/Icons';
import { Side } from 'components/Side';
import * as React from 'react';
import * as styles from './sideIcon.module.scss';

export const SideIcon: React.FunctionComponent = () => (
  <Side orientation="left">
    <a href="/" className={styles.link}>
      <Icon name="github" className={styles.icon} />
    </a>
    <a href="/" className={styles.link}>
      <Icon name="linkedin" className={styles.icon} />
    </a>
    <a href="/" className={styles.link} style={{ paddingBottom: '40px' }}>
      <Icon name="facebook" className={styles.icon} />
    </a>
  </Side>
);
