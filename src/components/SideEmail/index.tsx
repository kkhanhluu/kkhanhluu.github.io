import { Side } from 'components/Side';
import * as React from 'react';
import * as styles from './sideEmail.module.scss';

export const SideEmail: React.FunctionComponent = () => (
  <Side orientation="right">
    <a href="/" className={styles.email}>
      luukhanh96@gmail.com
    </a>
  </Side>
);
