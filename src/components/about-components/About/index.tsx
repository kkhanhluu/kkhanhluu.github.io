import * as React from 'react';
import { sr, srConfig } from 'utils/scrollRevealContainer';
// @ts-ignore
import avatar from '../../../images/avatar.jpg';
import * as styles from './about.module.scss';

export const About: React.FunctionComponent<{ technologies: string[] }> = ({ technologies }) => {
  const revealContainer = React.useRef(null);

  React.useEffect(() => {
    sr.reveal(revealContainer.current ?? '', srConfig());
  }, []);

  return (
    <>
      <section id="about" className={styles.about} ref={revealContainer}>
        <h3>
          <span>01.</span> About me
        </h3>
        <div className={styles.body}>
          <div className={styles.aboutText}>
            <div className={styles.description}>
              Hello! I&aps;m Khanh Luu, a web developer based in Darmstadt, Germany who enjoys
              building things that live on the internet. I develop exceptional websites and web apps
              that provide intuitive, pixel-perfect user interfaces with efficient and modern
              backends. I&aps;m considered as a team-player because I like to help others and tend
              to work well within groups. Learning new languages and technologies is what I am
              passionate about. Here are a few technologies I&aps;ve been working with recently:
            </div>
            <ul className={styles.stack}>
              {technologies.map(tech => (
                <li key={tech} className={styles.technology}>
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.profile}>
            <img src={avatar} />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
