import { Side } from 'components/Side';
import * as React from 'react';
import * as styles from './sideEmail.module.scss';

export const SideEmail: React.FunctionComponent = () => (
  <Side orientation="right">
    <a href="mailto:luukhanh96@gmail.com" className={styles.email}>
      luukhanh96@gmail.com
    </a>
  </Side>
);
