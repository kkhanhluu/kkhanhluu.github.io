import { Fragment } from 'preact';
import { useEffect, useRef } from 'preact/hooks';

import style from './contact.scss';
import GlobalFonts from '../../fonts/fonts';
import { sr, srConfig } from '../scrollReaveal/scrollRevealContainer';

const Contact = () => {
  const revealContainer = useRef(null);

  useEffect(() => {
    sr.reveal(revealContainer.current, srConfig(), []);
  });

  return (
    <Fragment>
      <GlobalFonts />
      <section id='contact' class={style.contact} ref={revealContainer}>
        <h3>04. What's next</h3>
        <h1>Get In Touch</h1>

        <p>
          My inbox is always open for open source projects and freelance
          opportunities. Whether for a potential project or just to say hi, I'll
          try my best to reply your email!
        </p>

        <div>
          <a href='mailto: luukhanh96@gmail.com' class={style.email}>
            Say hello
          </a>
        </div>
      </section>
    </Fragment>
  );
};

export default Contact;
