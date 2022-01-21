require("dotenv").config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: `Musango Wope Front Engineer`,
    description: `Front End Engineer and UI/UX Enthusiast`,
    author: `@Musango Wope`,
    keywords: "Front End Engineer, Javascript, HTML, SCSS/CSS, Design",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: `gatsby-source-blogger`,
      options: {
        blogger_api_key: process.env.GATSBY_BLOGGER_API_KEY,
        blogger_id: process.env.GATSBY_BLOGGER_BLOG_ID,
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
  ]
};
