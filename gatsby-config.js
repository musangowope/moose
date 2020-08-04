require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Musango Wope Web Developer`,
    description: `Web developer and UI/UX Designer`,
    author: `@Musango Wope`,
    keywords: "Front End Developer, Javascript, HTML, SCSS/CSS, Design",
  },
  plugins: [
    {
      resolve: `gatsby-source-blogger`,
      options: {
        blogger_api_key: process.env.GATSBY_BLOGGER_API_KEY,
        blogger_id: process.env.GATSBY_BLOGGER_BLOG_ID,
      },
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `8082825063`,
      },
    },
    `gatsby-transformer-remark`,
    "gatsby-plugin-styled-components",
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 590,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Musango Wope`,
        short_name: `Web Developer`,
        start_url: `/`,
        background_color: `#FF6978`,
        theme_color: `#FF6978`,
        display: `minimal-ui`,
        icon: `src/images/landing-avatar.png`, // This path is relative to the root of the site.
        crossOrigin: `use-credentials`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
