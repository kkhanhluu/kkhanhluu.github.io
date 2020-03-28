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
        'A nicer look at your GitHub profile and repo stats. Includes data visualizations of your top languages, starred repositories, and sort through your top repos by number of stars, forks, and size.',
      stack: ['Node.js', 'Mongodb', 'Angular', 'Ionic'],
      link: 'https://cholon-9544f.firebaseapp.com/home'
    },
    {
      name: 'Covid19 Vietnam',
      description:
        'A nicer look at your GitHub profile and repo stats. Includes data visualizations of your top languages, starred repositories, and sort through your top repos by number of stars, forks, and size. In collaboration with <a href="https://hieudoan.herokuapp.com/">Hieu Doan</a>',
      stack: ['Angular', 'Chart.js', 'Ionic'],
      link: 'https://covid19vietnam.herokuapp.com/',
      github: 'https://github.com/covid19vietnam'
    },
    {
      name: 'Idol Recognition',
      description:
        'A nicer look at your GitHub profile and repo stats. Includes data visualizations of your top languages, starred repositories, and sort through your top repos by number of stars, forks, and size.',
      stack: ['MS Recognitive API', 'MS Bing Image'],
      link: 'https://github.com/kkhanhluu/jav-idol-recoginze'
    },
    {
      name: 'Travel app',
      description:
        'A nicer look at your GitHub profile and repo stats. Includes data visualizations of your top languages, starred repositories, and sort through your top repos by number of stars, forks, and size.',
      link: 'https://ionic-travel-app-773ae.firebaseapp.com/',
      stack: ['Angular', 'Ionic', 'Firebase'],
      github: 'https://github.com/kkhanhluu/BookingApp'
    },
    {
      name: 'Saigon',
      description:
        'A nicer look at your GitHub profile and repo stats. Includes data visualizations of your top languages, starred repositories, and sort through your top repos by number of stars, forks, and size.',
      stack: ['HTML', 'Javascript', 'CSS'],
      link: 'https://kkhanhluu.github.io/FrontEndBootCamp/saigon/'
    },
    {
      name: 'Pizza Restaurant',
      description:
        'A nicer look at your GitHub profile and repo stats. Includes data visualizations of your top languages, starred repositories, and sort through your top repos by number of stars, forks, and size.',
      stack: ['HTML', 'Javascript', 'CSS'],
      link: 'https://kkhanhluu.github.io/FrontEndBootCamp/pizza-template/'
    }
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
                ref={el => (revealProjects.current[i] = el)}
              >
                <div class={styles.project}>
                  <div class={styles.projectBody}>
                    <div class={styles.projectLink}>
                      <div class={styles.folderIcon}>
                        <Icon type='folder' />
                      </div>
                      <div class={styles.linkIcon}>
                        <Icon type='link' />
                        {p.github ? <Icon type='github' /> : null}
                      </div>
                    </div>

                    <h5>{p.name}</h5>

                    <p dangerouslySetInnerHTML={{ __html: p.description }} />
                  </div>
                  <div class={styles.projectFooter}>
                    <ul class={styles.techStack}>
                      {p.stack.map(tech => (
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
