module.exports = {
  siteMetadata: {
    title: `Recipie  Website`,
    description: `A Recipie Website to a demo for content ful api`,
    author: `Nadir Ali`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {resolve:'gatsby-source-contentful',
    options:{
      spaceId:'nybzb8duecoi',
      accessToken:'pBNoXxlBk7LKeo_SGy16H-UnOCO9LIaB8_EUhoHc5jQ'
    }
  },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
