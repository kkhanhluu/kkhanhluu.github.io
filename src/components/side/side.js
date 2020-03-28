import { useEffect, useState } from 'preact/hooks';

import style from './side.scss';

const Side = props => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsMounted(true);
    }, 1200);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <div
      class={`${style.side} ${isMounted ? 'fade-enter-active' : 'fade-enter'}`}
      style={{
        left: props.orientation === 'left' ? '2rem' : 'auto',
        right: props.orientation === 'right' ? '2rem' : 'auto'
      }}
    >
      <div class={style.wrapper}>{props.children}</div>
    </div>
  );
};

export default Side;
