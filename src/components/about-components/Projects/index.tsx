import { Icon } from 'components/Icons';
import { graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';
import { sr, srConfig } from 'utils/scrollRevealContainer';
import * as styles from './projects.module.scss';

interface Project {
  name: string;
  description: string;
  link: string;
  stack: string[];
  image: string;
  github?: string;
}

export const Projects: React.FunctionComponent = () => {
  const revealTitle = React.useRef(null);
  const revealProjects = React.useRef([]);

  React.useEffect(() => {
    sr.reveal(revealTitle.current ?? '', srConfig());
    revealProjects.current.forEach((pro, i) => sr.reveal(pro, srConfig(i * 100)));
  }, []);

  const {
    site: {
      siteMetadata: {
        author: {
          about: { projects },
        },
      },
    },
  } = useStaticQuery(
    graphql`
      query GetAboutProjectsData {
        site {
          siteMetadata {
            author {
              about {
                projects {
                  name
                  description
                  stack
                  link
                  image
                  github
                }
              }
            }
          }
        }
      }
    `
  );

  return (
    <section id="projects" className={styles.projects}>
      <h3 ref={revealTitle}>
        <span>03.</span> Some Things I&apos;ve built
      </h3>
      <div>
        {projects.map((project: Project, i: number) => (
          <div key={project.name} ref={revealProjects.current.at(i)} className={styles.project}>
            <div className={`${styles.projectInformation} ${styles.information}`}>
              <h5>Featured Project</h5>
              <h4>{project.name}</h4>
              <div className={styles.projectDescription}>{project.description}</div>
              <ul className={styles.stack}>
                {project.stack.map(tech => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
              <div className={styles.projectLinks}>
                {project.github ? (
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Icon name="github" />
                  </a>
                ) : null}
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <Icon name="link" />
                </a>
              </div>
            </div>

            <a
              href={project.link}
              className={`${styles.linkWrapper} ${styles.linkWrapper}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                className={styles.imageWrapper}
                style={{
                  backgroundImage: `url(${project.image})`,
                  backgroundSize: i === 2 ? 'contain' : '',
                }}
              />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};
