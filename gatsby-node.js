// gatsby-node.js
const path = require("path")

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  const postTemplate = path.resolve("src/templates/blogTemplate.js")

  return graphql(`
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
  `).then(res => {
    if (res.errors) {
      return Promise.reject(res.errors)
    }
    res.data.allBloggerPost.edges.forEach(({ node }) => {
      createPage({
        path: node.slug,
        component: postTemplate,
        context: node,
      })
    })
  })
}
