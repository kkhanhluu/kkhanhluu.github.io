import { Fragment } from 'preact';

import styles from './projects.scss';
import GlobalFonts from '../../fonts/fonts';
import Icon from '../icons/icon';

const Projects = () => {
  const projects = [
    {
      name: 'Lukaloka',
      description:
        'A nicer look at your GitHub profile and repo stats. Includes data visualizations of your top languages, starred repositories, and sort through your top repos by number of stars, forks, and size.',
      stack: ['Node.js', 'Mongodb', 'Angular'],
      link: 'https://cholon-9544f.firebaseapp.com/home',
      image: './assets/images/lukaloka.png'
    },
    {
      name: 'Moviee',
      description:
        'A nicer look at your GitHub profile and repo stats. Includes data visualizations of your top languages, starred repositories, and sort through your top repos by number of stars, forks, and size.',
      stack: ['Angular', 'Firebase', 'The Movie Database API'],
      link: 'https://kkhanhluu.github.io/movieapp/movies',
      image: './assets/images/movieapp.png',
      github: 'https://github.com/kkhanhluu/movieapp'
    },
    {
      name: 'HoabanCamp',
      description:
        'A nicer look at your GitHub profile and repo stats. Includes data visualizations of your top languages, starred repositories, and sort through your top repos by number of stars, forks, and size.',
      stack: ['Node.js', 'Mongodb', 'Stripe API'],
      link: 'hhttps://hoa-ban-camp.herokuapp.com/',
      image: './assets/images/natours.png',
      github: 'https://github.com/kkhanhluu/natours'
    }
  ];

  return (
    <Fragment>
      <GlobalFonts />
      <section id='projects' class={styles.projects}>
        <h3>
          <span>03.</span> Some Things I've built
        </h3>
        <div>
          {projects.map((p, i) => {
            return (
              <div key={p.name} class={styles.project}>
                <div
                  class={`${styles.projectInformation} ${
                    styles[`information-${i}`]
                  }`}
                >
                  <h5>Featured Project</h5>
                  <h4>{p.name}</h4>
                  <div class={styles.projectDescription}>{p.description}</div>
                  <ul class={styles.stack}>
                    {p.stack.map(tech => (
                      <li class={styles.technology} key={tech}>
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <div class={styles.projectLinks}>
                    {p.github ? (
                      <a class={styles.linkGithub} href={p.github}>
                        <Icon type='github' />
                      </a>
                    ) : null}
                    <a class={styles.link} href={p.link}>
                      <Icon type='link' />
                    </a>
                  </div>
                </div>

                <a
                  href={p.link}
                  class={`${styles.linkWrapper} ${styles[`linkWrapper-${i}`]}`}
                >
                  <div
                    class={styles.imageWrapper}
                    style={{ backgroundImage: `url(${p.image})` }}
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
