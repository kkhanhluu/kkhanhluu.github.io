import { Link } from 'gatsby';
import * as React from 'react';
import * as style from './intro.module.scss';

export const Intro: React.FunctionComponent = () => {
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setIsMounted(true);
    }, 400);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <section className={style.intro}>
        <h4
          className={`${isMounted ? 'fadeup-enter-active' : 'fadeup-enter'}`}
          style={{ transitionDelay: '100ms' }}
        >
          Hi, my name is
        </h4>
        <h1
          className={`${isMounted ? 'fadeup-enter-active' : 'fadeup-enter'}`}
          style={{ transitionDelay: '200ms' }}
        >
          Kim Khanh Luu.
        </h1>
        <h2
          className={`${isMounted ? 'fadeup-enter-active' : 'fadeup-enter'}`}
          style={{ transitionDelay: '300ms' }}
        >
          I build things for the web.
        </h2>

        <p
          className={`${isMounted ? 'fadeup-enter-active' : 'fadeup-enter'}`}
          style={{ transitionDelay: '400ms' }}
        >
          I&apos;m a software engineer based in Darmstadt, Germany enjoying in building high-quality
          websites and applications.
        </p>

        <div
          className={`${isMounted ? 'fadeup-enter-active' : 'fadeup-enter'}`}
          style={{ transitionDelay: '500ms' }}
        >
          <Link to="/" className={style.contact}>
            Get in touch
          </Link>
        </div>
      </section>
    </>
  );
};
