import style from './side.scss';

const Side = props => (
  <div
    class={style.side}
    style={{
      left: props.orientation === 'left' ? '2rem' : 'auto',
      right: props.orientation === 'right' ? '2rem' : 'auto'
    }}
  >
    <div class={style.wrapper}>{props.children}</div>
  </div>
);

export default Side;
