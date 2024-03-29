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
            title: 'Backend Engineer',
            company: 'Strapi',
            start: 'February 2023',
            end: 'present',
            tasks: [
              'Developing cloud platform, which helps to deploy, monitor and manage strapi app in a cloud environment.',
            ],
          },
          {
            title: 'Fullstack developer',
            company: 'Gastromatic',
            start: 'November 2020',
            end: 'November 2022',
            tasks: [
              'Involving in planing, designing and implementing a microservices application to help digitalizing the accounting process',
              'Develop own backend services with GraphQL/REST, Node.js, Postgres, Mongodb, Apollo federation, Express,... and integrating external APIs (Hubspot, Easybill,...)',
              'Designing and implementing communication between microservices using RabbitMQ (amqpblib/rascal)',
              'Developing modern, multilingual web app with React, typescript, Apollo client and ant design',
            ],
          },
          {
            title: 'Technical lead',
            company: 'Pawtner',
            start: 'September 2020',
            end: 'February 2022',
            tasks: [
              'Lead a tribe of 6 senior developers. I am responsible for technical planning, overseeing and make the decision on all aspects of architecture and development',
              'Work closely with the team and stakeholders to define technical debt, gathered requirements from stakeholders and ensuring smooth communication between engineering team and stakeholders',
              'Involving in designing and implementing a scalable backend server for a social platform, which allows adopters to find their favorite friends and pets and adopt the pets',
              'Building an authentication/authorization system for this multiple role platform',
              'Involving in designing and developing real-time features by using websocket and firebase (chat, notification,...)',
              'Deploy and manage Azure cloud infrastructures and CI/CD pipeline.',
              'Develop the mobile app with react native and take responsibility for publishing the app to Google store and App store',
              'Technologies we used: ASP.NET core 5, Node.js, React native, Firebase, Azure',
            ],
          },
          {
            title: 'Fullstack developer',
            company: 'Aonic',
            start: 'Oktober 2019',
            end: 'June 2020',
            tasks: [
              'Plan, design system and develop Microsoft Teams App <a target="_blank" style="text-decoration: none; color: #ae80ff;" href="https://appsource.microsoft.com/en-us/product/office/WA200001566?tab=Overview">We Decide</a>',
              'Develop RESTful Backend Service with modern technologies like: Java Spring, Nodejs, websocket,... and a React Frontend app',
              "Develop and give technical support in other customer's project",
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
              'Develop an API gateway with Java Spring to aggregate data from multiple services and forward request to client',
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
            title: '',
            company: 'Achievements',
            start: 'April 2020',
            end: 'present',
            tasks: [
              'Win 1st Prize in track Ideation in an online hackathon "Hackcovy" with the app "Quanranhome". The App helps to improve the communication between quarantine area\'s manager and residents. <a target="_blank" style="text-decoration: none; color: #ae80ff;" href="/hackathon.pdf">Certificate</a>',
              '<a target="_blank" style="text-decoration: none; color: #ae80ff;" href="https://www.credly.com/users/kim-khanh-luu/badges">Microsoft Certified: Azure Fundamentals</a>. The certification validates basic knowledge of cloud services and how those services are provided with Azure',
              '<a target="_blank" style="text-decoration: none; color: #ae80ff;" href="https://learn.microsoft.com/en-us/users/khanhluu-0122/credentials/5a8b1e01b168ba3f">Microsoft Certified: Azure Developer Associate</a>. This certification is designed for individuals who want to demonstrate their expertise in developing applications on the Microsoft Azure cloud platform',
            ],
          },
        ],
        projects: [
          {
            name: 'E-shop',
            description:
              'A practical microservices reference example for demonstrating the basic of Command Query Responsibility Segregation (CQRS), Event Sourcing and Saga pattern.',
            stack: ['Java spring', 'Kubernetes', 'RabbitMQ', 'Eventstore', 'gRPC', 'tRPC'],
            link: 'https://kkhanhluu.github.io/e-shop/',
            github: 'https://github.com/kkhanhluu/e-shop',
          },
          {
            name: 'Pawtner',
            description: `A mobile for digitalizing pet adoption, connecting pet lovers and beyond. 
              Pawtner helps adopters and shelters to streamline the system from the start to the end of 
              the pet ownership journey. Available on <a target="_blank" style="text-decoration: none; color: #ae80ff;" href="https://apps.apple.com/pk/app/pawtner/id1577467735">App store</a> App store
              and <a target="_blank" style="text-decoration: none; color: #ae80ff;" href="https://play.google.com/store/apps/details?id=co.pawtner.mobileapp&hl=en&gl=US">Google play</a>.`,
            stack: ['Node.js', 'Mongodb', 'React native', 'ASP.NET core 5', 'Graphql'],
            link: 'https://cholon-9544f.firebaseapp.com/home',
          },
          {
            name: 'Lukaloka',
            description:
              'A small online marketplace mainly for oversea vietnamese people. A place for buyers and sellers to come together and trade almost anything that you want to.',
            stack: ['Node.js', 'Mongodb', 'Angular'],
            link: 'https://cholon-9544f.firebaseapp.com/home',
          },
          {
            name: 'Natours',
            description:
              'A nice look app to book your trip. A complete fullstack web app, which has authentication, authorization and is integrated with Stripe Payments platform and Mapbox api',
            stack: ['Node.js', 'Mongodb', 'Stripe API'],
            link: 'https://hoa-ban-camp.herokuapp.com/',
            github: 'https://github.com/kkhanhluu/natours',
          },
          {
            name: 'Covid 19',
            description:
              'A small web app to visualize covid 19 statistics. User can get information about total case, total deaths and recovered cases all around the world with a nicer visualization.',
            stack: ['Parcel', 'Javascript'],
            link: 'https://kkhanhluu.github.io/covid19/',
          },
          {
            name: 'Infinitown',
            description: 'A 3D infinite town. The website is built with three.js',
            stack: ['Javascript', 'Three.js'],
            link: 'https://kkhanhluu.github.io/infinitown/',
          },
          {
            name: 'CSS Challenges',
            description: 'Some CSS Challenges I solved by myself',
            stack: ['HTML', 'CSS'],
            link: 'https://kkhanhluu.github.io/CSSChallenges/',
          },
        ],
        otherProjects: [
          {
            name: 'Lukaloka mobile app',
            description:
              'Mobile App for the web application Lukaloka. A small online marketplace mainly for oversea vietnamese people. A place for buyers and sellers to come together and trade almost anything that you want to.',
            stack: ['Node.js', 'Mongodb', 'Angular', 'Ionic'],
            link: 'https://cholon-9544f.firebaseapp.com/home',
          },
          {
            name: 'Furniture App',
            description:
              'A small online furniture shop, where user can order and manage their products. This app was implemented from sratch with react native',
            stack: ['React native', 'Firebase'],
            link: 'https://github.com/kkhanhluu/react-native-shopping-app',
            image: 'https://kkhanhluu.github.io/assets/images/shoppingApp.png',
          },
          {
            name: 'Travel app',
            description:
              'A mobile app to add favorite places. This is app was made in order to get familiar with ionic framework',
            link: 'https://ionic-travel-app-773ae.firebaseapp.com/',
            stack: ['Angular', 'Ionic', 'Firebase'],
            github: 'https://github.com/kkhanhluu/BookingApp',
          },
          {
            name: 'Saigon',
            description: 'Landing page for the restaurant Saigon in Kaiserlautern, Germany.',
            stack: ['HTML', 'Javascript', 'CSS'],
            link: 'http://saigonkaiserslautern.de/',
          },
          {
            name: 'Pizza Restaurant',
            description:
              'A HTMl/CSS Template for a landing page of a pizza restaurant. This was made for a customer in Frankfurt, Germany.',
            stack: ['HTML', 'Javascript', 'CSS'],
            link: 'https://kkhanhluu.github.io/FrontEndBootCamp/pizza-template/',
          },
          {
            name: 'Face Recognition',
            description:
              "A web app to recognize japanes actress. User send the app an image and this app will recognize and give the user actree's information",
            stack: ['MS Recognitive API', 'MS Bing Image'],
            link: 'https://github.com/kkhanhluu/jav-idol-recoginze',
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
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/assets`,
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
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
            },
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-145027640-1',
      },
    },
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
                  time: node.frontmatter.time,
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
                      time
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
        icon: `src/images/avatar.png`, // This path is relative to the root of the site.
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
        defaultLightTheme: 'theme-twitter',
        defaultDarkTheme: 'theme-midnightgreen',
      },
    },
    `gatsby-plugin-scroll-reveal`,
  ],
};
