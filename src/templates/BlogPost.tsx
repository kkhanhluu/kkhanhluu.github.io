import Bio from 'components/Bio';
import { graphql, Link, PageProps } from 'gatsby';
import * as React from 'react';
import { Layout } from '../components/Layout';
import { Seo } from '../components/Seo';
import * as styles from './blogPost.module.scss';

interface DataProps {
  markdownRemark: {
    frontmatter: {
      title: string;
      description: string;
      date: string;
    };
    excerpt: string;
    html: string;
  };
  site: {
    siteMetadata?: {
      title: string;
    };
  };
  previous: {
    fields: { slug: string };
    frontmatter: { title: string };
  };
  next: {
    fields: { slug: string };
    frontmatter: { title: string };
  };
}

const BlogPostTemplate: React.FunctionComponent<PageProps<DataProps>> = ({ data, location }) => {
  const post = data.markdownRemark;
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  const { previous, next } = data;

  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <div className={styles.blogPost}>
        <article itemScope itemType="http://schema.org/Article">
          <header>
            <h1 itemProp="headline">{post.frontmatter.title}</h1>
            <p className={styles.date}>{post.frontmatter.date}</p>
          </header>
          <section dangerouslySetInnerHTML={{ __html: post.html }} itemProp="articleBody" />
          <footer>
            <Bio />
          </footer>
        </article>

        <nav className="blog-post-nav">
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($id: String!, $previousPostId: String, $nextPostId: String) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`;
