import { Fragment } from 'preact';

import Side from '../side/side';
import style from './emailSide.scss';
import GlobalFonts from '../../fonts/fonts';

const EmailSide = () => (
  <Fragment>
    <GlobalFonts />
    <Side orientation='right'>
      <a href='/' class={style.email}>
        luukhanh96@gmail.com
      </a>
    </Side>
  </Fragment>
);

export default EmailSide;
