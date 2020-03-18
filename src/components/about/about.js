import style from './about.scss';
import GlobalFonts from '../../fonts/fonts';
import { Fragment } from 'preact';

const About = () => (
  <Fragment>
    <GlobalFonts />
    <section class={style.about}>
      <h4>Hi, my name is</h4>
      <h1>Kim Khanh Luu.</h1>
      <h2>I build things for the web.</h2>

      <p>
        I'm a software engineer based in Boston, MA specializing in building
        (and occasionally designing) exceptional, high-quality websites and
        applications.
      </p>

      <div>
        <a href='/' class={style.contact}>
          Get in touch
        </a>
      </div>
    </section>
  </Fragment>
);

export default About;
