import { graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';
import { Helmet } from 'react-helmet';

interface SeoProps {
  description?: string;
  lang?: string;
  meta?: { name: string; content: string }[];
  title?: string;
  image?: string;
  url?: string;
}

export const Seo: React.FunctionComponent<SeoProps> = ({
  description,
  lang = '',
  meta = [],
  title = '',
  image,
  url,
}) => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(
    graphql`
      query GetSiteMetadata {
        site {
          siteMetadata {
            title
            description
            image
            siteUrl
          }
        }
      }
    `
  );

  const imagePath = new URL(image ?? siteMetadata.image, siteMetadata.siteUrl);
  const siteUrl = new URL(url ?? '/', siteMetadata.siteUrl);

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={siteMetadata.title ? `%s | ${siteMetadata.title}` : null}
      meta={[
        {
          name: `description`,
          content: description ?? siteMetadata.description,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: description ?? siteMetadata.description,
        },
        {
          property: `og:image`,
          content: imagePath,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: 'keyword',
          content: 'Khanh Luu, Javascript, Typescript, Nodejs, Golang',
        },
      ].concat(meta)}
    >
      <link rel="canonical" href={siteUrl.toString()} />
      <meta name="image" content={imagePath.toString()} />
    </Helmet>
  );
};
