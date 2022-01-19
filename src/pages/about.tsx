import About from 'components/about-components/About';
import { Intro } from 'components/about-components/Intro';
import { Layout } from 'components/Layout';
import { Seo } from 'components/Seo';
import { graphql, PageProps } from 'gatsby';
import * as React from 'react';

type DataProps = {
  site: {
    buildTime: string;
  };
};

const AboutPage: React.FunctionComponent<PageProps<DataProps>> = ({ location }) => {
  return (
    <Layout title="Using TypeScript" location={location}>
      <Seo title="Using TypeScript" />
      <main className="main">
        <Intro />
        <About
          technologies={[
            'Javascript (ES6+)',
            'Angular',
            'React',
            'React native',
            'Ionic',
            'Node.js',
            'Express',
            'Typescript',
            'HTML & (S)CSS',
            'Mongodb',
            'SQL Database',
            'Azure',
          ]}
        />
      </main>
    </Layout>
  );
};

export const query = graphql`
  {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
  }
`;

export default AboutPage;
