import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Container from "../components/Container"
import styled from "styled-components"
import themed from "../functions/themed"
import Title from "../elements/Title"

const StyledLink = styled(Link)`
  font-size: ${props => props.theme.fontSizes[3]};
`

const StyledReactMarkdown = styled.div`
  font-size: ${props => props.theme.fontSizes[3]} !important;
  * {
    font-size: ${props => props.theme.fontSizes[3]} !important;
  }

  a {
    margin-right: 0 !important;
    margin-left: 0 !important;
  }
  h1,
  h1 * {
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: ${props => props.theme.fontSizes[6]} !important;
  }

  h2,
  h2 * {
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: ${props => props.theme.fontSizes[5]} !important;
  }
  h3,
  h3 * {
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: ${props => props.theme.fontSizes[4]} !important;
  }

  h4,
  h4 * {
    font-size: ${props => props.theme.fontSizes[3]} !important;
  }

  h5,
  h5 * {
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: ${props => props.theme.fontSizes[2]} !important;
  }

  h6,
  h6 * {
    font-size: ${props => props.theme.fontSizes[1]} !important;
  }

  pre {
    width: 100%;
    padding: 15px;
    margin-top: 20px;
    margin-bottom: 20px;
    overflow: auto;
    overflow-y: hidden;
    //font-size: 12px;
    line-height: 20px;
    background: #efefef;
    border: 1px solid #777;
  }
  pre code {
    padding: 10px;
    color: #333;
  }
`

const blogTemplate = ({ pageContext }) => {
  const { title, content } = pageContext
  return (
    <Layout>
      <Container>
        <StyledLink to="/blog">Back to blogs</StyledLink>
        <Title>{title}</Title>
        <StyledReactMarkdown dangerouslySetInnerHTML={{ __html: content }} />
      </Container>
    </Layout>
  )
}

blogTemplate.propTypes = {}
blogTemplate.defaultProps = {}

export default themed(blogTemplate)
