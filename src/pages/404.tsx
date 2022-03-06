import { graphql, Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import { Layout } from '../components/Layout';
import { Seo } from '../components/Seo';
import * as styles from './404.module.scss';

const NotFoundPage = ({ data, location }: any) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout showFooter={false} location={location} title={siteTitle}>
      <Seo title="404: Not Found" />
      <div className={styles.container}>
        <StaticImage
          className={styles.image}
          src="../images/404.png"
          alt="404"
          placeholder="blurred"
        />
        <div className={styles.text}>
          <h1>404</h1>
          <p>Hey captain! Looks like you&apos;re heading to a wrong planet!</p>
          <div>
            <Link to="/" className={styles.back}>
              Take me back
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFoundPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
