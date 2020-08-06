import React from "react"
import styled from "styled-components"
import Seo from "../components/Seo"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/Layout"
import themed from "../functions/themed"
import Title from "../elements/Title"
import Paragraph from "../elements/Paragraph"
import Container from "../components/Container"
import InstaThumbnail from "../components/InstaThumbnail"

const InstaGridLayout = styled.div`
  grid-gap: 10px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;
  @media screen and (max-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: ${props => props.theme.breakpoints.sm}) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const DesignPage = ({ path }) => {
  const instagramData = useStaticQuery(graphql`
    query MyQuery {
      allInstaNode {
        edges {
          node {
            id
            comments
            likes
            mediaType
            preview
            # localFile {
            #   childImageSharp {
            #     fixed(width: 150, height: 150) {
            #       ...GatsbyImageSharpFixed
            #     }
            #   }
            # }
          }
        }
      }
    }
  `)
  console.log(instagramData)
  return (
    <Layout path={path}>
      <Seo title="Design" />
      <Container>
        <Seo title="Design" />
        <Title>My Design Work</Title>
        <Paragraph>
          I attempted to do the Daily UI challenge to become a better designer.
          Daily UI is a series of daily design challenges design inspiration.
          Here are some designs I produced
        </Paragraph>
        <InstaGridLayout>
          {instagramData.allInstaNode.edges.map(
            ({ node: { id, preview, comments, likes } }) => (
              <InstaThumbnail
                key={id}
                id={id}
                preview={preview}
                comments={comments}
                likes={likes}
              />
            )
          )}
        </InstaGridLayout>
        {/*<StaticQuery*/}
        {/*  query={AllInstagramQuery}*/}
        {/*  render={({ allInstaNode: { edges = [] } }) => (*/}
        {/*    <InstaGridLayout>*/}
        {/*      {edges.map(({ node: { id, preview, comments, likes } }) => (*/}
        {/*        <InstaThumbnail*/}
        {/*          key={id}*/}
        {/*          id={id}*/}
        {/*          preview={preview}*/}
        {/*          comments={comments}*/}
        {/*          likes={likes}*/}
        {/*        />*/}
        {/*      ))}*/}
        {/*    </InstaGridLayout>*/}
        {/*  )}*/}
        {/*/>*/}
      </Container>
    </Layout>
  )
}

DesignPage.propTypes = {}
DesignPage.defaultProps = {}

export default themed(DesignPage)
