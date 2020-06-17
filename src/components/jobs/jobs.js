import { Fragment } from 'preact';
import { useState, useRef, useEffect } from 'preact/hooks';

import styles from './jobs.scss';
import GlobalFonts from '../../fonts/fonts';
import { sr, srConfig } from '../scrollReaveal/scrollRevealContainer';

const Jobs = () => {
  const revealContainer = useRef(null);

  useEffect(() => {
    sr.reveal(revealContainer.current, srConfig(), []);
  });

  const jobs = [
    {
      title: 'Junior frontend developer',
      company: 'Ice cream',
      start: 'April 2018',
      end: 'September 2018',
      tasks: [
        'Develop HTML/CSS Templates in close collaboration with graphic designers and other developers',
        'Learn to use React.js, Redux and implement unit tests for small component in a react app',
      ],
    },
    {
      title: 'Fullstack developer',
      company: 'Mipio',
      start: 'April 2018',
      end: 'January 2019',
      tasks: [
        'Develop new backend and frontend components for the real-time online auction and customer management',
        'Develop multilingual web app and build the landing page for the componay',
        "Maintain and improve Web app 's design in close collaboration with graphic designers and CTO",
      ],
    },
    {
      title: 'Web developer',
      company: 'Peasec',
      start: 'Juni 2019',
      end: 'Oktober 2019',
      tasks: [
        'Further development of new components for Geobox project [ionic/angular project]',
        "App's Design and Usability maintenance and improvement",
      ],
    },
    {
      title: '1st Prize',
      company: 'AngelHack',
      start: 'April 2020',
      end: 'April 2020',
      tasks: [
        'Win 1st Prize in track Ideation in an online hackathon "Hackcovy" with the app "Quanranhome". The App helps to improve the communication between quarantine area\'s manager and residents. <a target="_blank" style="text-decoration: none; color: #ae80ff;" href="https://kkhanhluu.github.io/assets/images/HackCovyCertificate.pdf">Certificate</a>',
      ],
    },
    {
      title: 'Fullstack developer',
      company: 'Aonic',
      start: 'Oktober 2019',
      end: 'June 2020',
      tasks: [
        'Plan, design system and develop Microsoft Teams App <a target="_blank" style="text-decoration: none; color: #ae80ff;" href="https://appsource.microsoft.com/en-us/product/office/WA200001566?tab=Overview">We Decide</a>',
        'Develop RESTful Backend Service with modern technologies like: nodejs, websocket,... and a React Frontend app',
        "Develop and give technical support in other customer's project",
      ],
    },
  ];

  const [activeTabId, setActiveTabId] = useState(0);
  const tabs = useRef([]);

  return (
    <Fragment>
      <GlobalFonts />
      <section id='jobs' class={styles.jobs} ref={revealContainer}>
        <h3>
          <span>02.</span> Work and Awards
        </h3>
        <div class={styles.jobsBody}>
          <ul role='tablist' class={styles.listCompany}>
            {jobs.reverse().map((job, i) => (
              <li key={job.company}>
                <button
                  id={`tab-${i}`}
                  role='tab'
                  aria-selected={i === 0 ? 'true' : 'false'}
                  tabIndex={activeTabId === i ? '0' : '-1'}
                  class={activeTabId === i ? styles.active : ''}
                  ref={(el) => (tabs.current[i] = el)}
                  // eslint-disable-next-line react/jsx-no-bind
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
                  <li key={idx} dangerouslySetInnerHTML={{ __html: task }} />
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
