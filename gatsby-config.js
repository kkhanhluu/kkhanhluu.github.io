module.exports = {
  siteMetadata: {
    title: `Kim Khanh Luu`,
    author: {
      name: `Khanh Luu`,
      summary: `guy who lives and works in Darmstadt, Germany building useful things.`,
      about: {
        technologies: [
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
        ],
        jobs: [
          {
            title: 'Junior frontend developer',
            company: 'Ice cream',
            start: 'April 2018',
            end: 'September 2018',
            tasks: [
              'Develop HTML/CSS Templates in close collaboration with graphic designers and other developers',
              'Learn to use React.js, Redux and implement unit tests for small component in a react app',
            ],
          },
          {
            title: 'Fullstack developer',
            company: 'Mipio',
            start: 'April 2018',
            end: 'January 2019',
            tasks: [
              'Develop new backend and frontend components for the real-time online auction and customer management',
              'Develop multilingual web app and build the landing page for the componay',
              "Maintain and improve Web app 's design in close collaboration with graphic designers and CTO",
            ],
          },
          {
            title: 'Web developer',
            company: 'Peasec',
            start: 'Juni 2019',
            end: 'Oktober 2019',
            tasks: [
              'Further development of new components for Geobox project [ionic/angular project]',
              "App's Design and Usability maintenance and improvement",
            ],
          },
          {
            title: '1st Prize',
            company: 'AngelHack',
            start: 'April 2020',
            end: 'April 2020',
            tasks: [
              'Win 1st Prize in track Ideation in an online hackathon "Hackcovy" with the app "Quanranhome". The App helps to improve the communication between quarantine area\'s manager and residents. <a target="_blank" style="text-decoration: none; color: #ae80ff;" href="https://kkhanhluu.github.io/assets/HackCovyCertificate.pdf">Certificate</a>',
            ],
          },
          {
            title: 'Fullstack developer',
            company: 'Aonic',
            start: 'Oktober 2019',
            end: 'June 2020',
            tasks: [
              'Plan, design system and develop Microsoft Teams App <a target="_blank" style="text-decoration: none; color: #ae80ff;" href="https://appsource.microsoft.com/en-us/product/office/WA200001566?tab=Overview">We Decide</a>',
              'Develop RESTful Backend Service with modern technologies like: nodejs, websocket,... and a React Frontend app',
              "Develop and give technical support in other customer's project",
            ],
          },
        ],
      },
    },
    description: `Writing and stuff from Kim Khanh Luu`,
    siteUrl: `https://gatsbystarterblogsource.gatsbyjs.io/`,
    image: 'https://kkhanhluu.github.io/assets/images/avatar.jpg',
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: `ADD YOUR TRACKING ID HERE`,
    //   },
    // },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.nodes.map(node => {
                return Object.assign({}, node.frontmatter, {
                  description: node.excerpt,
                  date: node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + node.fields.slug,
                  guid: site.siteMetadata.siteUrl + node.fields.slug,
                  custom_elements: [{ 'content:encoded': node.html }],
                });
              });
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  nodes {
                    excerpt
                    html
                    fields {
                      slug
                    }
                    frontmatter {
                      title
                      date
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
            title: 'Gatsby Starter Blog RSS Feed',
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Blog`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-react-helmet`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-theme-switcher',
      options: {
        defaultDarkTheme: 'theme-twitter',
        defaultLightTheme: 'theme-midnightgreen',
      },
    },
  ],
};
