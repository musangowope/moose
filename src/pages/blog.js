import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/Layout"
import Container from "../components/Container"
import themed from "../functions/themed"
import Title from "../elements/Title"
import Paragraph from "../elements/Paragraph"
import Seo from "../components/Seo"
import BlogPostPreview from "../components/BlogPostPreview"

const BlogGridLayout = styled.div`
  grid-gap: 10px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  @media screen and (max-width: ${props => props.theme.breakpoints.sm}) {
    display: block;
  }
`

const BlogPage = ({ data, path }) => {
  return (
    <Layout path={path}>
      <Seo title="Blog" />
      <Container>
        <Title>Blog Posts</Title>
        <Paragraph>
          The goal of these blogs posts is to reflect on what I have learn't in
          my web development create thus far. Stay tuned for more blog posts
        </Paragraph>
        <BlogGridLayout>
          {data.allBloggerPost.edges.map(({ node }) => (
            <BlogPostPreview
              key={node.id}
              title={node.title}
              date={node.published}
              slug={node.slug}
              img={node.featureImage}
            />
          ))}
        </BlogGridLayout>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query BlogListQuery {
    allBloggerPost {
      edges {
        node {
          content
          published(formatString: "DD/MM/YY")
          title
          slug
          featureImage
        }
      }
    }
  }
`

BlogPage.propTypes = {}
BlogPage.defaultProps = {}

export default themed(BlogPage)
