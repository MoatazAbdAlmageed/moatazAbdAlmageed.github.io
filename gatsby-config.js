const config = require('./config');

const {
  pathPrefix,
  siteTitle,
  manifestName,
  manifestShortName,
  manifestBackgroundColor,
  manifestDisplay,
  manifestStartUrl,
  manifestThemeColor,
  manifestIcon,
  TRACKING_ID,
} = config;
module.exports = {
  pathPrefix: pathPrefix,
  siteMetadata: {
    title: siteTitle,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: manifestName,
        short_name: manifestShortName,
        start_url: pathPrefix || manifestStartUrl,
        background_color: manifestBackgroundColor,
        theme_color: manifestThemeColor,
        display: manifestDisplay,
        icon: manifestIcon, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: TRACKING_ID,
      },
    },
  ],
};
