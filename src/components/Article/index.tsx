import { Link } from 'gatsby';
import * as React from 'react';
import * as styles from './article.module.scss';

interface Post {
  excerpt: string;
  fields: {
    slug: string;
  };
  frontmatter: {
    date: string;
    title: string;
    description: string;
  };
}
export const Article: React.FunctionComponent<{ post: Post }> = ({ post }) => {
  const title = post.frontmatter.title || post.fields.slug;

  return (
    <li key={post.fields.slug}>
      <article className={styles.post} itemScope itemType="http://schema.org/Article">
        <header>
          <h2>
            <Link className={styles.header} to={post.fields.slug} itemProp="url">
              <span itemProp="headline">{title}</span>
            </Link>
          </h2>
          <small>{post.frontmatter.date}</small>
        </header>
        <section>
          <p
            className={styles.description}
            dangerouslySetInnerHTML={{
              __html: post.frontmatter.description || post.excerpt,
            }}
            itemProp="description"
          />
        </section>
      </article>
    </li>
  );
};
