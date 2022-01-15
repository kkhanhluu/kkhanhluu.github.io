// If you don't want to use TypeScript you can delete this file!
import { Layout } from 'components/Layout';
import { graphql, Link, PageProps } from 'gatsby';
import * as React from 'react';
import { Seo } from '../components/Seo';

type DataProps = {
  site: {
    buildTime: string;
  };
};

const UsingTypescript: React.FC<PageProps<DataProps>> = ({ data, path, location }) => (
  <Layout title="Using TypeScript" location={location}>
    <Seo title="Using TypeScript" />
    <h1>Gatsby supports TypeScript by default!</h1>
    <p>
      You&apos;re currently on the page &quot;{path}&quot; which was built on {data.site.buildTime}.
    </p>
    <p>
      To learn more, head over to our{' '}
      <a href="https://www.gatsbyjs.com/docs/typescript/">documentation about TypeScript</a>.
    </p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default UsingTypescript;

export const query = graphql`
  {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
  }
`;
