import * as React from 'react';
import * as styles from './side.module.scss';

interface SideProps {
  orientation: 'right' | 'left';
}

export const Side: React.FunctionComponent<React.PropsWithChildren<SideProps>> = ({
  orientation,
  children,
}) => {
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setIsMounted(true);
    }, 1200);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className={`${styles.side} ${isMounted ? 'fade-enter-active' : 'fade-enter'}`}
      style={{
        left: orientation === 'left' ? '2rem' : 'auto',
        right: orientation === 'right' ? '2rem' : 'auto',
      }}
    >
      <div className={styles.wrapper}>{children}</div>
    </div>
  );
};
