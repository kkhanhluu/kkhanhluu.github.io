import { Icon } from 'components/Icons';
import { graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';
import { ProjectImage } from './Image';
import * as styles from './projects.module.scss';

interface Project {
  name: string;
  description: string;
  link: string;
  stack: string[];
  github?: string;
}

export const Projects: React.FunctionComponent = () => {
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
      <h3 data-sal="slide-up" data-sal-duration="500" data-sal-delay="200" data-sal-easing="ease">
        <span>03.</span> Some Things I&apos;ve built
      </h3>
      <div>
        {projects.map((project: Project) => (
          <div
            key={project.name}
            className={styles.project}
            data-sal="slide-up"
            data-sal-duration="500"
            data-sal-delay="200"
            data-sal-easing="ease"
          >
            <div className={`${styles.projectInformation} ${styles.information}`}>
              <h5>Featured Project</h5>
              <h4>{project.name}</h4>
              <div
                className={styles.projectDescription}
                dangerouslySetInnerHTML={{ __html: project.description }}
              />
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
                // style={{
                //   backgroundImage: `url(${project.image})`,
                //   backgroundSize: i === 2 ? 'contain' : '',
                // }}
              >
                <ProjectImage name={project.name} />
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};
