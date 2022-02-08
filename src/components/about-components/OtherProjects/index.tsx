import { Icon } from 'components/Icons';
import { graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';
import { sr, srConfig } from 'utils/scrollRevealContainer';
import * as styles from './otherProjects.module.scss';

interface Project {
  name: string;
  description: string;
  link: string;
  stack: string[];
  github?: string;
}
export const OtherProjects: React.FunctionComponent = () => {
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
          about: { otherProjects },
        },
      },
    },
  } = useStaticQuery(
    graphql`
      query GetAboutOtherProjectsData {
        site {
          siteMetadata {
            author {
              about {
                otherProjects {
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
    <section id="other-projects" className={styles.otherProjects} ref={revealTitle}>
      <h4>Other Projects</h4>
      <div className={styles.otherProjectsContainer}>
        {otherProjects.map((project: Project, i: number) => {
          return (
            <div key={project.name} className={styles.projects} ref={revealProjects.current[i]}>
              <div className={styles.project}>
                <div className={styles.projectBody}>
                  <div className={styles.projectLink}>
                    <div className={styles.folderIcon}>
                      <Icon name="folder" />
                    </div>
                    <div className={styles.linkIcon}>
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <Icon name="link" />
                      </a>

                      {project.github ? (
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Icon name="github" />
                        </a>
                      ) : null}
                    </div>
                  </div>

                  <h5>{project.name}</h5>

                  <p dangerouslySetInnerHTML={{ __html: project.description }} />
                </div>
                <div className={styles.projectFooter}>
                  <ul className={styles.techStack}>
                    {project.stack.map(tech => (
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
  );
};
