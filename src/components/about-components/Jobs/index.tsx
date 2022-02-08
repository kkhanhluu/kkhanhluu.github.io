import { graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';
import { sr, srConfig } from 'utils/scrollRevealContainer';
import * as styles from './jobs.module.scss';

interface Job {
  company: string;
  end: string;
  start: string;
  tasks: string[];
  title: string;
}
export const Jobs: React.FunctionComponent = () => {
  const revealContainer = React.useRef(null);

  React.useEffect(() => {
    sr.reveal(revealContainer.current ?? '', srConfig());
  }, []);

  const {
    site: {
      siteMetadata: {
        author: {
          about: { jobs },
        },
      },
    },
  } = useStaticQuery(
    graphql`
      query GetAboutJobData {
        site {
          siteMetadata {
            author {
              about {
                jobs {
                  company
                  end
                  start
                  tasks
                  title
                }
              }
            }
          }
        }
      }
    `
  );

  const [activeTabId, setActiveTabId] = React.useState(0);
  const tabs = React.useRef([]);

  return (
    <>
      <section id="jobs" className={styles.jobs} ref={revealContainer}>
        <h3>
          <span>02.</span> Work and Awards
        </h3>
        <div className={styles.jobsBody}>
          <ul role="tablist">
            {jobs.reverse().map((job: Job, i: number) => (
              <li key={job.company}>
                <button
                  id={`tab-${job.company}`}
                  role="tab"
                  aria-selected={i === 0 ? 'true' : 'false'}
                  tabIndex={activeTabId === i ? 0 : -1}
                  className={activeTabId === i ? styles.active : ''}
                  ref={tabs.current[i]}
                  onClick={() => setActiveTabId(i)}
                >
                  {job.company}
                </button>
              </li>
            ))}
          </ul>

          {jobs.reverse().map((job: Job, i: number) => (
            <div
              key={job.company}
              id={`panel-${job.company}`}
              role="tabpanel"
              className={styles.taskTab}
              aria-labelledby={`tab-${job.company}`}
              hidden={activeTabId !== i}
            >
              <h4 className={styles.title}>
                {job.title} <span>&nbsp;@&nbsp;</span> <a href="">{job.company}</a>
              </h4>
              <h5 className={styles.timeline}>
                {job.start} - {job.end}
              </h5>
              <ul className={styles.taskList}>
                {job.tasks.map((task: string, idx: number) => (
                  <li key={idx} dangerouslySetInnerHTML={{ __html: task }} />
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
