import { Fragment } from 'preact';
import { useState, useRef } from 'preact/hooks';

import styles from './jobs.scss';
import GlobalFonts from '../../fonts/fonts';

const Jobs = () => {
  const jobs = [
    {
      title: 'Junior frontend developer',
      company: 'Ice cream',
      start: 'April 2018',
      end: 'September 2018',
      tasks: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mauris quam, porttitor nec lacinia a, ornare nec justo. Fusce laoreet mollis leo.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mauris quam, porttitor nec lacinia a, ornare nec justo. Fusce laoreet mollis leo.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mauris quam, porttitor nec lacinia a, ornare nec justo. Fusce laoreet mollis leo.s'
      ]
    },
    {
      title: 'Fullstack developer',
      company: 'Mipio',
      start: 'April 2018',
      end: 'January 2019',
      tasks: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mauris quam, porttitor nec lacinia a, ornare nec justo. Fusce laoreet mollis leo.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mauris quam, porttitor nec lacinia a, ornare nec justo. Fusce laoreet mollis leo.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mauris quam, porttitor nec lacinia a, ornare nec justo. Fusce laoreet mollis leo.s'
      ]
    },
    {
      title: 'Web developer',
      company: 'Peasec',
      start: 'Juni 2019',
      end: 'Oktober 2019',
      tasks: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mauris quam, porttitor nec lacinia a, ornare nec justo. Fusce laoreet mollis leo.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mauris quam, porttitor nec lacinia a, ornare nec justo. Fusce laoreet mollis leo.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mauris quam, porttitor nec lacinia a, ornare nec justo. Fusce laoreet mollis leo.s'
      ]
    },
    {
      title: 'Fullstack developer',
      company: 'Aonic',
      start: 'Oktober 2019',
      end: 'present',
      tasks: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mauris quam, porttitor nec lacinia a, ornare nec justo. Fusce laoreet mollis leo.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mauris quam, porttitor nec lacinia a, ornare nec justo. Fusce laoreet mollis leo.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mauris quam, porttitor nec lacinia a, ornare nec justo. Fusce laoreet mollis leo.s'
      ]
    }
  ];

  const [activeTabId, setActiveTabId] = useState(0);
  const tabs = useRef([]);

  return (
    <Fragment>
      <GlobalFonts />
      <section id='jobs' class={styles.jobs}>
        <h3>
          <span>02.</span> Where I've worked
        </h3>
        <div class={styles.jobsBody}>
          <ul role='tablist' class={styles.listCompany}>
            {jobs.map((job, i) => (
              <li key={job.company}>
                <button
                  id={`tab-${i}`}
                  role='tab'
                  aria-selected={i === 0 ? 'true' : 'false'}
                  tabIndex={activeTabId === i ? '0' : '-1'}
                  class={activeTabId === i ? styles.active : ''}
                  ref={el => (tabs.current[i] = el)}
                  onClick={() => setActiveTabId(i)}
                >
                  {job.company}
                </button>
              </li>
            ))}
          </ul>

          {jobs.map((job, i) => (
            <div
              id={`panel-${i}`}
              role='tabpanel'
              class={styles.taskTab}
              aria-labelledby={`tab-${i}`}
              hidden={activeTabId !== i}
            >
              <h4 class={styles.title}>
                {job.title} <span>&nbsp;@&nbsp;</span>{' '}
                <a href=''>{job.company}</a>
              </h4>
              <h5 class={styles.timeline}>
                {job.start} - {job.end}
              </h5>
              <ul class={styles.taskList}>
                {job.tasks.map((task, idx) => (
                  <li key={idx}>{task}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </Fragment>
  );
};

export default Jobs;
