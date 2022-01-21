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
        blogger_api_key: "AIzaSyCFKjg5ZwSvYz69goMaVICRkhcCHiP_FUI",
        blogger_id: "6944691970155595231",
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
  ]
};
