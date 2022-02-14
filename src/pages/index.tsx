import { Article } from 'components/Article';
import { Bio } from 'components/Bio';
import { graphql, PageProps } from 'gatsby';
import * as React from 'react';
import { Layout } from '../components/Layout';
import { Seo } from '../components/Seo';
import * as styles from './index.module.scss';

type DataProps = {
  site: {
    siteMetadata: {
      title: string;
    };
  };
  allMarkdownRemark: {
    nodes: {
      excerpt: string;
      fields: {
        slug: string;
      };
      frontmatter: {
        date: string;
        title: string;
        description: string;
      };
    }[];
  };
};

const BlogIndex: React.FunctionComponent<PageProps<DataProps>> = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  const posts = data.allMarkdownRemark.nodes;

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="All posts" />
      <main className={styles.mainPosts}>
        <Bio />
        <ol className={styles.listPosts}>
          {posts.map(post => (
            <Article key={post.fields.slug} post={post} />
          ))}
        </ol>
      </main>
    </Layout>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`;
