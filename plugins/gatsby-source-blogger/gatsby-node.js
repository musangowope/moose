const axios = require("axios")
const cheerio = require("cheerio");

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs  = `
    type BloggerPost implements Node {
      featureImage: String
      id: String
      published: Date
      title: String
      content: String
      slug: String
    }
  `;
  createTypes(typeDefs);
}

exports.sourceNodes = (
  { actions, createNodeId, createContentDigest },
  configOptions
) => {
  const { createNode } = actions
  // Gatsby adds a configOption that's not needed for this plugin, delete it
  delete configOptions.plugins

  const processBlogPost = blogPost => {
    const nodeId = createNodeId(blogPost.id)
    const $ = cheerio.load(blogPost.content)
    const featureImageSrc = $("img").attr("src")

    const shapedData = {
      featureImage: featureImageSrc,
      id: blogPost.id,
      published: blogPost.published,
      title: blogPost.title,
      content: blogPost.content,
      slug: `blogs/${blogPost.id}`,
    }
    const nodeContent = JSON.stringify(shapedData)

    return Object.assign({}, shapedData, {
      id: nodeId,
      parent: null,
      children: [],
      internal: {
        type: `BloggerPost`,
        content: nodeContent,
        contentDigest: createContentDigest(shapedData),
      },
    })
  }

  // plugin code goes here...
  const { blogger_api_key = "", blogger_id = "" } = configOptions
  const baseUrl = `https://www.googleapis.com/blogger/v3/blogs`
  const url = `${baseUrl}/${blogger_id}/posts?key=${blogger_api_key}`
  axios
    .get(url)
    .then(({ data }) => {
      data.items.forEach(blog => {
        createNode(processBlogPost(blog))
      })
    })
    .catch(e => console.log(e))
}
