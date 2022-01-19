// gatsby-node.js
const path = require("path")

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  const postTemplate = path.resolve("src/templates/blogTemplate.js")

  const res = await graphql(`
    {
      allBloggerPost {
        edges {
          node {
            content
            published
            title
            slug
            featureImage
          }
        }
      }
    }
  `);
  res.data.allBloggerPost.edges.forEach(({ node }) => {
    createPage({
      path: node.slug,
      component: postTemplate,
      context: node,
    })
  });

  if (res.errors) {
    return Promise.reject(res.errors)
  }
}
