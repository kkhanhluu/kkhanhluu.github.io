import Side from '../side/side';
import style from './iconSide.scss';
import Icon from '../icons/icon';

const EmailSide = () => (
  <Side orientation='left'>
    <a href='/' class={style.link}>
      <Icon type='github' class={style.icon} />
    </a>
    <a href='/' class={style.link}>
      <Icon type='linkedin' class={style.icon} />
    </a>
    <a href='/' class={style.link}>
      <Icon type='twitter' class={style.icon} />
    </a>
    <a href='/' class={style.link} style={{paddingBottom: '40px'}}>
      <Icon type='facebook' class={style.icon} />
    </a>
  </Side>
);

export default EmailSide;
