require("dotenv").config({
  path: `.env`,
})

import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Moose`,
    siteUrl: `https://www.yourdomain.tld`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
      "gatsby-plugin-styled-components",
    "gatsby-transformer-remark", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"},
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
  ]
};

export default config;
