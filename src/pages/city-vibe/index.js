import React from "react"
import styled from "styled-components"
import Container from "../../components/Container"
import Title from "../../elements/Title"
import Layout from "../../components/Layout"
import Seo from "../../components/Seo"
import CityVibeImg from "../../images/city-vibe-case-study.jpg"
import { CaseStudyBanner } from "../same-start"
import Paragraph from "../../elements/Paragraph"
import SecondaryTitle from "../../elements/SecondaryTitle"
import DesignOneImg from "../../images/city-vibe-home-page.png"
import DesignTwoImg from "../../images/city-vibe-places-page.png"
import CityVibePreview from "../../videos/city-preview.mp4"
import { Link } from "gatsby"
import themed from "../../functions/themed"

const PreviewGridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-bottom: 40px;
  
  @media screen and (max-width: ${props => props.theme.breakpoints.sm}) {
    display: block;
  }
 
`

const CityVibeVideo = styled.video`
  height: 675px;
  width: 100%;
  @media screen and (max-width: ${props => props.theme.breakpoints.md}) {
    height: 200px;
  }
`

export const BackLink = styled(Link)`
  display: block;
  font-size: ${props => props.theme.fontSizes[4]};
`

const CityVibePage = () => {
  return (
    <Layout>
      <Seo title="City Vibe Case Study" />
      <Container>
        <BackLink to="/web-development">Back to projects</BackLink>
        <br />
        <Title>City Vibe</Title>
        <CaseStudyBanner src={CityVibeImg} />
        <SecondaryTitle>The Goal of the Project:</SecondaryTitle>
        <Paragraph>
          CityVibe which attempts to measure the occupancy of how full a pub,
          club or night club is in that specific hour coupled with realtime chat
          and rating. Giving the user ability to know which places are a "vibe"
          at that the particular hours.
        </Paragraph>

        <SecondaryTitle>Planned Key Features:</SecondaryTitle>
        <Paragraph>
          <ul>
            <li>
              Viewing the occupancy of "Nightspot" in that particular hour
            </li>
            <li>Realtime user feed linked to a Nightspot</li>
            <li>
              Promoting Nightspot specials (happy hour specials, food specials
              etc)
            </li>
          </ul>
        </Paragraph>

        <SecondaryTitle>Technology Stack:</SecondaryTitle>
        <Paragraph>
          For the first iteration in developing this app used the following
          technologies:
        </Paragraph>
        <Paragraph>
          <ul>
            <li>Quasar Framework (VueJS)</li>
            <li>Firebase</li>
          </ul>
        </Paragraph>

        <Paragraph>
          After experiencing some limitations with using Quasar Framework, I
          decided to start rebuilding the app using the following tech-stack:
          <ul>
            <li>React Native</li>
            <li>Nodejs (Graphql)</li>
            <li>Firebase</li>
          </ul>
        </Paragraph>

        <SecondaryTitle>Preview of New Designs:</SecondaryTitle>
        <PreviewGridWrapper>
          <img src={DesignOneImg} alt="design-one" />
          <img src={DesignTwoImg} alt="design-two" />
        </PreviewGridWrapper>

        <SecondaryTitle>Demo Video of Old App:</SecondaryTitle>
        <CityVibeVideo controls>
          <source src={CityVibePreview} type="video/mp4" />
        </CityVibeVideo>
      </Container>
    </Layout>
  )
}

export default themed(CityVibePage)
