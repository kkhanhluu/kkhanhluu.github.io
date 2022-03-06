import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import * as styles from './bio.module.scss';

export const Bio: React.FunctionComponent = () => (
  <div className={styles.bio}>
    <StaticImage
      className={styles.bioAvatar}
      layout="fixed"
      formats={['auto', 'webp', 'avif']}
      src="../../images/avatar.png"
      width={60}
      height={60}
      quality={95}
      alt="Profile picture"
      placeholder="blurred"
    />
    <div>
      <span className={styles.link}>
        Written by <a href="https://github.com/kkhanhluu">Khanh Luu</a>
      </span>
      <span>My journey to become a better developer.</span>
    </div>
  </div>
);
