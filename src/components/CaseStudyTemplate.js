import React from "react"
import styled from "styled-components"
import Container from "./Container"
import { Link } from "gatsby"
import themed from "../functions/themed"
import Title from "../elements/Title"
import Layout from "./Layout"
import Seo from "./Seo"
import PrimaryButtonLink from "../elements/PrimaryButtonLink"


export const BackLink = styled(Link)`
  display: block;
  font-size: ${props => props.theme.fontSizes[4]};
`

const CaseStudyBanner = styled.img`
  height: 200px;
  width: 100%;
  object-position: center;
  object-fit: cover;
  margin-bottom: 20px;
`

const ProjectTitle = styled(Title)`
  margin-bottom: 0;
`

const TitleWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
`

const ViewProjectLink = styled(PrimaryButtonLink)`
  font-size: ${props => props.theme.fontSizes[4]};
`

const CaseStudyTemplate = ({
  bannerImage = '',
  title = '',
  children = '',
  projectLink = ''
}) => {
  return (
    <Layout>
      <Seo title={`${title} Case Study`} />
      <Container>
        <BackLink to="/web-development">Back to projects</BackLink>
        <br />
        <TitleWrapper>
          <ProjectTitle>{title}</ProjectTitle>
          {projectLink ? <ViewProjectLink href={projectLink} target="_blank">View project</ViewProjectLink> : null}
        </TitleWrapper>
        <CaseStudyBanner src={bannerImage} />
        <div>
          {children}
        </div>
      </Container>
    </Layout>
  )
}

export default themed(CaseStudyTemplate)
