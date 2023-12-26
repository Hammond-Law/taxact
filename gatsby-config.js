/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Taxact`,
    siteUrl: `https://www.yourdomain.tld`,
    trackingId: `G-VK0KKS1X8Y`
  },
  plugins: [
    'gatsby-plugin-postcss',
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-VK0KKS1X8Y", // Google Analytics / GA
        ],
      },
    },
  ],
};