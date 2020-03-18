import style from './home.scss';
import Intro from '../../components/intro/intro';
import About from '../../components/about/about';

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
  </main>
);

export default Home;
