import { Fragment } from 'preact';
import { useRef, useEffect } from 'preact/hooks';

import styles from './projects.scss';
import GlobalFonts from '../../fonts/fonts';
import Icon from '../icons/icon';
import { sr, srConfig } from '../scrollReaveal/scrollRevealContainer';

const Projects = () => {
  const revealTitle = useRef(null);
  const revealProjects = useRef([]);

  useEffect(() => {
    sr.reveal(revealTitle.current, srConfig(), []);
    revealProjects.current.forEach((pro, i) =>
      sr.reveal(pro, srConfig(i * 100))
    );
  });

  const projects = [
    {
      name: 'Lukaloka',
      description:
        'A small online marketplace mainly for oversea vietnamese people. A place for buyers and sellers to come together and trade almost anything that you want to.',
      stack: ['Node.js', 'Mongodb', 'Angular'],
      link: 'https://cholon-9544f.firebaseapp.com/home',
      image: './assets/images/lukaloka.png',
    },
    {
      name: 'Covid 19',
      description:
        'A small web app to visualize covid 19 statistics. User can get information about total case, total deaths and recovered cases all around the world with a nicer visualization.',
      stack: ['Parcel', 'Javascript'],
      link: 'https://kkhanhluu.github.io/covid19/',
      image: './assets/images/covid19.png',
    },
    {
      name: 'Infinitown',
      description: 'A 3D infinite town. The website is built with three.js',
      stack: ['Javascript', 'Three.js'],
      link: 'https://kkhanhluu.github.io/infinitown/',
      image: './assets/images/infinitown.png',
    },
    {
      name: 'CSS Challenges',
      description: 'Some CSS Challenges I solved by myself',
      stack: ['HTML', 'CSS'],
      link: 'https://kkhanhluu.github.io/CSSChallenges/',
      image: './assets/images/csschallenges.png',
    },
    {
      name: 'Furniture App',
      description:
        'A small online furniture shop, where user can order and manage their products. This app was implemented from sratch with react native',
      stack: ['React native', 'Firebase'],
      link: 'https://github.com/kkhanhluu/react-native-shopping-app',
      image: './assets/images/shoppingApp.png',
    },
    {
      name: 'Moviee',
      description:
        'A better way to search your favorite moveies. Get full information about movies: casting, trailer, idmb score and so on',
      stack: ['Angular', 'Firebase', 'The Movie Database API'],
      link: 'https://kkhanhluu.github.io/movieapp/movies',
      image: './assets/images/movieapp.png',
      github: 'https://github.com/kkhanhluu/movieapp',
    },
    {
      name: 'HoabanCamp',
      description:
        'A nice look app to book your trip. A complete web app which is built with JAM Stack and integrated with Stripe Payments platform',
      stack: ['Node.js', 'Mongodb', 'Stripe API'],
      link: 'https://hoa-ban-camp.herokuapp.com/',
      image: './assets/images/natours.png',
      github: 'https://github.com/kkhanhluu/natours',
    },
  ];

  return (
    <Fragment>
      <GlobalFonts />
      <section id='projects' class={styles.projects}>
        <h3 ref={revealTitle}>
          <span>03.</span> Some Things I've built
        </h3>
        <div>
          {projects.map((p, i) => {
            return (
              <div
                key={p.name}
                ref={(el) => (revealProjects.current[i] = el)}
                class={styles.project}
              >
                <div
                  class={`${styles.projectInformation} ${
                    styles[`information-${i}`]
                  }`}
                >
                  <h5>Featured Project</h5>
                  <h4>{p.name}</h4>
                  <div class={styles.projectDescription}>{p.description}</div>
                  <ul class={styles.stack}>
                    {p.stack.map((tech) => (
                      <li class={styles.technology} key={tech}>
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <div class={styles.projectLinks}>
                    {p.github ? (
                      <a
                        class={styles.linkGithub}
                        href={p.github}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <Icon type='github' />
                      </a>
                    ) : null}
                    <a
                      class={styles.link}
                      href={p.link}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <Icon type='link' />
                    </a>
                  </div>
                </div>

                <a
                  href={p.link}
                  class={`${styles.linkWrapper} ${styles[`linkWrapper-${i}`]}`}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <div
                    class={styles.imageWrapper}
                    style={{
                      backgroundImage: `url(${p.image})`,
                      backgroundSize: i === 2 ? 'contain' : '',
                    }}
                  />
                </a>
              </div>
            );
          })}
        </div>
      </section>
    </Fragment>
  );
};

export default Projects;
