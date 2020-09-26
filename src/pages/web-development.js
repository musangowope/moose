import React from "react"
import Layout from "../components/Layout"
import styled from "styled-components"
import Container from "../components/Container"
import themed from "../functions/themed"
import SecondaryTitle from "../elements/SecondaryTitle"
import Project from "../components/Project"
import Paragraph from "../elements/Paragraph"
import PrimaryButtonLink from "../elements/PrimaryButtonLink"
import Seo from "../components/Seo"

const ProjectSubtitle = styled(SecondaryTitle)`
  font-size: ${props => props.theme.fontSizes[4]};
`

const ViewCaseStudyBtn = styled(PrimaryButtonLink)`
  margin-left: auto;
  display: block;
  font-size: ${props => props.theme.fontSizes[4]};
`

const SameStartContent = () => (
  <React.Fragment>
    <ProjectSubtitle>About Project</ProjectSubtitle>
    <Paragraph>
      Same Start is an edtech project that I co-founded and developed with my
      business partner. We have currently been working on this project in our
      spare time outside our regular do jobs Same Start aims to bridge the
      education language gap and give every learner the same start by providing
      interactive and gamified translated education content with corresponding
      quizzes.
    </Paragraph>
    <ProjectSubtitle>My role in project</ProjectSubtitle>
    <Paragraph>
      I designed all the UI and coded all the front end processes for Same Start
    </Paragraph>

    <ViewCaseStudyBtn to="/same-start">View Case Study</ViewCaseStudyBtn>
  </React.Fragment>
)

const CityVibeContent = () => (
  <React.Fragment>
    <ProjectSubtitle>About Project</ProjectSubtitle>
    <Paragraph>
      This is a hobby project of mine which I have been working on in my spare
      time (giving me the opportunity to learn new things). CityVibe which
      attempts to measure the occupancy of how full a pub, club or night club is
      in that specific hour coupled with realtime chat and rating.
    </Paragraph>

    <ViewCaseStudyBtn to="/city-vibe">View Case Study</ViewCaseStudyBtn>
  </React.Fragment>
)

const WebDevPage = ({ path }) => {
  return (
    <Layout path={path}>
      <Seo title="Web Development" />
      <Container>
        <Project
          projectTitle="Same Start"
          status="In-development"
          projectBodyContent={SameStartContent}
        />

        <Project
          projectTitle="City Vibe"
          status="On-hold"
          projectBodyContent={CityVibeContent}
        />
      </Container>
    </Layout>
  )
}

export default themed(WebDevPage)
