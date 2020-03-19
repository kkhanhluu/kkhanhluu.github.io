import style from './contact.scss';
import GlobalFonts from '../../fonts/fonts';
import { Fragment } from 'preact';

const Contact = () => (
  <Fragment>
    <GlobalFonts />
    <section id='contact' class={style.contact}>
      <h3>04. What's next</h3>
      <h1>Get In Touch</h1>

      <p>
        Although I'm not currently looking for freelance opportunities, my inbox
        is always open. Whether for a potential project or just to say hi, I'll
        try my best to answer your email!
      </p>

      <div>
        <a href='/' class={style.email}>
          Say hello
        </a>
      </div>
    </section>
  </Fragment>
);

export default Contact;