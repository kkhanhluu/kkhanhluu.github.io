import { graphql, useStaticQuery } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import * as styles from './about.module.scss';

export const About: React.FunctionComponent = () => {
  const {
    site: {
      siteMetadata: {
        author: {
          about: { technologies },
        },
      },
    },
  } = useStaticQuery(
    graphql`
      query GetAboutData {
        site {
          siteMetadata {
            author {
              about {
                technologies
              }
            }
          }
        }
      }
    `
  );

  return (
    <section
      id="about"
      className={styles.about}
      data-sal="slide-up"
      data-sal-duration="500"
      data-sal-delay="200"
      data-sal-easing="ease"
    >
      <h3>
        <span>01.</span> About me
      </h3>
      <div className={styles.body}>
        <div className={styles.aboutText}>
          <div className={styles.description}>
            Hello! I&apos;m Khanh Luu, a web developer based in Darmstadt, Germany who enjoys
            building things that live on the internet. I develop exceptional websites and web apps
            that provide intuitive, pixel-perfect user interfaces with efficient and modern
            backends. I&apos;m considered as a team-player because I like to help others and tend to
            work well within groups. Learning new languages and technologies is what I am passionate
            about. Here are a few technologies I&apos;ve been working with recently:
          </div>
          <ul>
            {technologies.map((tech: string) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </div>

        <div className={styles.profile}>
          <StaticImage src="../../../images/avatar.png" alt="Avatar" placeholder="blurred" />
        </div>
      </div>
    </section>
  );
};
