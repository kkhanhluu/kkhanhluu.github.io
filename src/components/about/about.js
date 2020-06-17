import { Fragment } from 'preact';
import { useEffect, useRef } from 'preact/hooks';

import styles from './about.scss';
import GlobalFonts from '../../fonts/fonts';
import { sr, srConfig } from '../scrollReaveal/scrollRevealContainer';

const About = (props) => {
  const revealContainer = useRef(null);

  useEffect(() => {
    sr.reveal(revealContainer.current, srConfig(), []);
  });

  return (
    <Fragment>
      <GlobalFonts />
      <section id='about' class={styles.about} ref={revealContainer}>
        <h3>
          <span>01.</span> About me
        </h3>
        <div class={styles.body}>
          <div class={styles.aboutText}>
            <div class={styles.description}>
              Hello! I'm Khanh Luu, a web developer based in Darmstadt, Germany
              who enjoys building things that live on the internet. I develop
              exceptional websites and web apps that provide intuitive,
              pixel-perfect user interfaces with efficient and modern backends.
              I'm considered as a team-player because I like to help others and
              tend to work well within groups. Learning new languages and
              technologies is what I am passionate about. Here are a few
              technologies I've been working with recently:
            </div>
            <ul class={styles.stack}>
              {props.technologies.map((tech) => (
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
};

export default About;
