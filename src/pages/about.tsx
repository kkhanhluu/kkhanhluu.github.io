import About from 'components/about-components/About';
import { Intro } from 'components/about-components/Intro';
import Jobs from 'components/about-components/Jobs';
import { OtherProjects } from 'components/about-components/OtherProjects';
import Projects from 'components/about-components/Projects';
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
        <About />
        <Jobs />
        <Projects />
        <OtherProjects />
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
