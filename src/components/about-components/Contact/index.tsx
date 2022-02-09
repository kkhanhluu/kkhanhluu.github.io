import * as React from 'react';
import * as styles from './contact.module.scss';

export const Contact: React.FunctionComponent = () => (
  <section
    id="contact"
    className={styles.contact}
    data-sal="slide-up"
    data-sal-duration="500"
    data-sal-delay="200"
    data-sal-easing="ease"
  >
    <h3>04. What&apos;s next</h3>
    <h1>Get In Touch</h1>

    <p>
      My inbox is always open for open source projects and freelance opportunities. Whether for a
      potential project or just to say hi, I&apos;ll try my best to reply your email!
    </p>

    <div>
      <a href="mailto: luukhanh96@gmail.com" className={styles.email}>
        Say hello
      </a>
    </div>
  </section>
);
