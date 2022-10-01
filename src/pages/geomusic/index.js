import React from "react"
import styled from "styled-components"
import GeomusicImg from "../../images/geomusic-case-study.jpg"
import Paragraph from "../../elements/Paragraph"
import SecondaryTitle from "../../elements/SecondaryTitle"
import GeomusicPreview from "../../videos/geomusic-preview.mp4"
import { Link } from "gatsby"
import themed from "../../functions/themed"
import CaseStudyTemplate from "../../components/CaseStudyTemplate"
import TertiaryTitle from "../../elements/TertiaryTitle"

const GeomusicVideo = styled.video`
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

const TechStackParagraphWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`

const GeomusicPage = themed(() => {
  return (
    <CaseStudyTemplate bannerImage={GeomusicImg} title="Geomusic" projectLink="https://geomusic.netlify.app/">
      <Paragraph>
        Geomusic is an application that allows you create music playlist place it on a geographical location.
        I built this small side project as a tech portfolio piece to showcase my skills as a software engineer.
      </Paragraph>

      <TechStackParagraphWrapper>
        <div>
          <TertiaryTitle>Front End</TertiaryTitle>
          <Paragraph>
            <ul>
              <li>React JS</li>
              <li>TailwindCSS</li>
              <li>SCSS</li>
              <li>TypeScript</li>
            </ul>
          </Paragraph>
        </div>
        <div>
          <TertiaryTitle>Back End</TertiaryTitle>
          <Paragraph>
            <ul>
              <li>Python Django</li>
            </ul>
          </Paragraph>
        </div>
      </TechStackParagraphWrapper>

      <SecondaryTitle>Demo Video:</SecondaryTitle>
      <GeomusicVideo controls>
        <source src={GeomusicPreview} type="video/mp4" />
      </GeomusicVideo>
    </CaseStudyTemplate>
  )
})

export default GeomusicPage
