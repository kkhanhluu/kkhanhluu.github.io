import { Fragment } from 'preact';
import { useRef, useEffect } from 'preact/hooks';

import styles from './otherProjects.scss';
import GlobalFonts from '../../fonts/fonts';
import Icon from '../icons/icon';
import { sr, srConfig } from '../scrollReaveal/scrollRevealContainer';

const OtherProjects = () => {
  const revealTitle = useRef(null);
  const revealProjects = useRef([]);

  useEffect(() => {
    sr.reveal(revealTitle.current, srConfig(), []);
    revealProjects.current.forEach((pro, i) =>
      sr.reveal(pro, srConfig(i * 100))
    );
  });

  const otherProjects = [
    {
      name: 'Lukaloka mobile app',
      description:
        'Mobile App for the web application Lukaloka. A small online marketplace mainly for oversea vietnamese people. A place for buyers and sellers to come together and trade almost anything that you want to.',
      stack: ['Node.js', 'Mongodb', 'Angular', 'Ionic'],
      link: 'https://cholon-9544f.firebaseapp.com/home',
    },
    {
      name: 'Covid19 Vietnam',
      description:
        'An app to collection information about COVID cases and news in Vietnam. User can get a better overview about COVID19 in Vietnam. In collaboration with <a href="https://hieudoan.herokuapp.com/">Hieu Doan</a>',
      stack: ['Angular', 'Chart.js', 'Ionic'],
      link: 'https://covid19vietnam.herokuapp.com/',
      github: 'https://github.com/covid19vietnam',
    },
    {
      name: 'Idol Recognition',
      description:
        "A web app to recognize japanes actress. User send the app an image and this app will recognize and give the user actree's information",
      stack: ['MS Recognitive API', 'MS Bing Image'],
      link: 'https://github.com/kkhanhluu/jav-idol-recoginze',
    },
    {
      name: 'Travel app',
      description:
        'A mobile app to add favorite places. This is app was made in order to get familiar with ionic framework',
      link: 'https://ionic-travel-app-773ae.firebaseapp.com/',
      stack: ['Angular', 'Ionic', 'Firebase'],
      github: 'https://github.com/kkhanhluu/BookingApp',
    },
    {
      name: 'Saigon',
      description:
        'Landing page for the restaurant Saigon in Kaiserlautern, Germany.',
      stack: ['HTML', 'Javascript', 'CSS'],
      link: 'http://saigonkaiserslautern.de/',
    },
    {
      name: 'Pizza Restaurant',
      description:
        'A HTMl/CSS Template for a landing page of a pizza restaurant. This was made for a customer in Frankfurt, Germany.',
      stack: ['HTML', 'Javascript', 'CSS'],
      link: 'https://kkhanhluu.github.io/FrontEndBootCamp/pizza-template/',
    },
  ];

  return (
    <Fragment>
      <GlobalFonts />
      <section
        id='other-projects'
        class={styles.otherProjects}
        ref={revealTitle}
      >
        <h4>Other Projects</h4>
        <div class={styles.otherProjectsContainer}>
          {otherProjects.map((p, i) => {
            return (
              <div
                class={styles.projects}
                ref={(el) => (revealProjects.current[i] = el)}
              >
                <div class={styles.project}>
                  <div class={styles.projectBody}>
                    <div class={styles.projectLink}>
                      <div class={styles.folderIcon}>
                        <Icon type='folder' />
                      </div>
                      <div class={styles.linkIcon}>
                        <a
                          href={p.link}
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          <Icon type='link' />
                        </a>

                        {p.github ? (
                          <a
                            href={p.github}
                            target='_blank'
                            rel='noopener noreferrer'
                          >
                            <Icon type='github' />
                          </a>
                        ) : null}
                      </div>
                    </div>

                    <h5>{p.name}</h5>

                    <p dangerouslySetInnerHTML={{ __html: p.description }} />
                  </div>
                  <div class={styles.projectFooter}>
                    <ul class={styles.techStack}>
                      {p.stack.map((tech) => (
                        <li key={tech}>{tech}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </Fragment>
  );
};

export default OtherProjects;
