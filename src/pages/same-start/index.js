import React from "react"
import Preview from "../../videos/samestart-preview.mp4"
import CaseStudyHeader from "../../images/same-start-case-study.jpg"
import styled from "styled-components"
import SEO from "../../components/SEO"
import Layout from "../../components/LayoutWrapper"
import Container from "../../components/Container"
import Title from "../../elements/Title"
import SecondaryTitle from "../../elements/SecondaryTitle"
import Paragraph from "../../elements/Paragraph"
import TertiaryTitle from "../../elements/TertiaryTitle"
import { BackLink } from "../city-vibe"

export const CaseStudyBanner = styled.img`
  height: 200px;
  width: 100%;
  object-position: center;
  object-fit: cover;
  margin-bottom: 20px;
`

const TechStackParagraphWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`

const SameStartVideo = styled.video`
  height: 675px;
  width: 100%;
  
  @media screen and (max-width: ${props => props.theme.breakpoints.md}) {
    height: 300px;
  }
`

const SameStartPage = () => {
  return (
    <Layout>
      <Container>
        <SEO title="Same Start Case Study" />
        <BackLink to="/web-development">Back to projects</BackLink>
        <br />
        <Title>Same Start Case Study</Title>
        <CaseStudyBanner src={CaseStudyHeader} />
        <SecondaryTitle>The problem we are tackling:</SecondaryTitle>
        <Paragraph>
          <ul>
            <li>
              students with an African first language are only taught in this
              language up until the end of grade 3 and are then required to
              switch to English for the remainder of their school career
            </li>
            <li>
              This is despite the fact that research shows that about 8 years of
              well resourced teaching is required for a language to be used as a
              learning medium.
            </li>
            <li>
              There are about 410 million students aged 10 - 19 across Africa,
              and many of them face this problem.
            </li>
          </ul>
        </Paragraph>
        <SecondaryTitle>Key Features of Same Start</SecondaryTitle>

        <Paragraph>
          <li>Translate content with a tap</li>
          <li>Interactive quizzes based on your country’s past papers</li>
          <li>A data-driven approach to education</li>
        </Paragraph>

        <SecondaryTitle>Technologies Stack:</SecondaryTitle>
        <TechStackParagraphWrapper>
          <div>
            <TertiaryTitle>Front End</TertiaryTitle>
            <Paragraph>
              <ul>
                <li>React JS</li>
                <li>Styled components</li>
              </ul>
            </Paragraph>
          </div>
          <div>
            <TertiaryTitle>Back End</TertiaryTitle>
            <Paragraph>
              <ul>
                <li>Wordpress API</li>
              </ul>
            </Paragraph>
          </div>
        </TechStackParagraphWrapper>


        <SecondaryTitle>Conclusion:</SecondaryTitle>
        <Paragraph>
          After a challenging journey, my founder and I decided to end this project. Below is a video
          demoing an early version of site. and a demo of the site can be seen <a href="https://confident-lalande-0cdcf7.netlify.app/" target="_blank" rel="noreferrer">here</a>
        </Paragraph>
        <SameStartVideo src={Preview} controls />
      </Container>
    </Layout>
  )
}

export default SameStartPage
