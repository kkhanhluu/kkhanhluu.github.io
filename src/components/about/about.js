import { Fragment } from 'preact';

import styles from './about.scss';
import GlobalFonts from '../../fonts/fonts';

const About = props => (
  <Fragment>
    <GlobalFonts />
    <section id='about' class={styles.about}>
      <h3>
        <span>01.</span> About me
      </h3>
      <div class={styles.body}>
        <div class={styles.aboutText}>
          <div class={styles.description}>
            Hello! I'm Khanh Luu, a software engineer based in Boston, MA who
            enjoys building things that live on the internet. I develop
            exceptional websites and web apps that provide intuitive,
            pixel-perfect user interfaces with efficient and modern backends.
            Shortly after graduating from Northeastern University, I joined the
            engineering team at Upstatement where I work on a wide variety of
            interesting and meaningful projects on a daily basis. Here are a few
            technologies I've been working with recently:
          </div>
          <ul class={styles.stack}>
            {props.technologies.map(tech => (
              <li key={tech} class={styles.technology}>
                {tech}
              </li>
            ))}
          </ul>
        </div>

        <div class={styles.profile}>
          <img src='./assets/images/avatar.jpg' />
        </div>
      </div>
    </section>
  </Fragment>
);

export default About;
