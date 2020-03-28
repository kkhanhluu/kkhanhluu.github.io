import { useEffect, useState } from 'preact/hooks';
import { Fragment } from 'preact';

import style from './intro.scss';
import GlobalFonts from '../../fonts/fonts';

const Intro = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsMounted(true);
    }, 400);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <Fragment>
      <GlobalFonts />
      <section class={style.intro}>
        <h4
          class={`${isMounted ? 'fadeup-enter-active' : 'fadeup-enter'}`}
          style={{ transitionDelay: '100ms' }}
        >
          Hi, my name is
        </h4>
        <h1
          class={`${isMounted ? 'fadeup-enter-active' : 'fadeup-enter'}`}
          style={{ transitionDelay: '200ms' }}
        >
          Kim Khanh Luu.
        </h1>
        <h2
          class={`${isMounted ? 'fadeup-enter-active' : 'fadeup-enter'}`}
          style={{ transitionDelay: '300ms' }}
        >
          I build things for the web.
        </h2>

        <p
          class={`${isMounted ? 'fadeup-enter-active' : 'fadeup-enter'}`}
          style={{ transitionDelay: '400ms' }}
        >
          I'm a software engineer based in Boston, MA specializing in building
          (and occasionally designing) exceptional, high-quality websites and
          applications.
        </p>

        <div
          class={`${isMounted ? 'fadeup-enter-active' : 'fadeup-enter'}`}
          style={{ transitionDelay: '500ms' }}
        >
          <a href='/' class={style.contact}>
            Get in touch
          </a>
        </div>
      </section>
    </Fragment>
  );
};

export default Intro;
