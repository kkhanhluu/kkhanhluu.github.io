import { About, Contact, Intro, Jobs, OtherProjects, Projects } from 'components/about-components';
import { Layout } from 'components/Layout';
import { Seo } from 'components/Seo';
import { SideEmail } from 'components/SideEmail';
import { SideIcon } from 'components/SideIcon';
import { graphql, PageProps } from 'gatsby';
import * as React from 'react';

type DataProps = {
  site: {
    buildTime: string;
  };
};

const AboutPage: React.FunctionComponent<PageProps<DataProps>> = ({ location }) => {
  return (
    <Layout title="Khanh Luu" location={location}>
      <Seo title="A blog by Khanh Luu" />
      <main className="main">
        <Intro />
        <About />
        <Jobs />
        <Projects />
        <OtherProjects />
        <Contact />
        <SideEmail />
        <SideIcon />
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
