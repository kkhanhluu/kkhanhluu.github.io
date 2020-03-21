import style from './home.scss';
import Intro from '../../components/intro/intro';
import About from '../../components/about/about';
import Jobs from '../../components/jobs/jobs';
import Contact from '../../components/contact/contact';
import Projects from '../../components/projects/projects';
import OtherProjects from '../../components/otherProjects/otherProjects';

const Home = () => (
  <main class={style.main}>
    <Intro />
    <About
      technologies={[
        'Javascript (ES6+)',
        'Angular',
        'React',
        'Ionic',
        'Node.js',
        'Express',
        'Typescript',
        'HTML & (S)CSS',
        'Mongodb',
        'SQL Database',
        'Azure'
      ]}
    />
    <Jobs />
    <Projects />
    <OtherProjects />
    <Contact />
  </main>
);

export default Home;
