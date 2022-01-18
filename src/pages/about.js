import React from "react"
import styled from "styled-components"
import Layout from "../components/Layout"
import Container from "../components/Container"
import themed from "../functions/themed"
import AboutMe from "../images/about-me.jpg"
import Paragraph from "../elements/Paragraph"
import SecondaryTitle from "../elements/SecondaryTitle"
import Title from "../elements/Title"
import Seo from "../components/Seo"

const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`

const AboutMeImage = styled.img`
  height: 200px;
  width: 100%;
  object-fit: cover;
  margin-bottom: 20px;
  @media screen and (max-width: ${props => props.theme.breakpoints.sm}) {
    height: 120px;
  }
`

const AboutPage = ({ path }) => {
  return (
    <Layout path={path}>
      <Seo title="About" />
      <Container>
        <Title>About Me</Title>
        <AboutMeImage src={AboutMe} />
        <Paragraph>
          I am front end developer and UX/UI enthusiast that is currently
          looking for opportunities to collaborate with other partners and
          businesses to create cool innovative  web solutions.
        </Paragraph>

        <SecondaryTitle>Learning Front End Development</SecondaryTitle>
        <Paragraph>
          I'm continuously growing my skills in front end development to build
          the best sites possible. I am on a journey learning new concepts one
          step at a time. Front End can be frustrating, it can be difficult, but
          delivering an the an amazing functional website that fulfills the
          needs of the user makes it all worth.
        </Paragraph>

        <Paragraph>
          <SkillsContainer>
            <ul>
              <li>HTML5</li>
              <li>Javascript</li>
              <li>Git</li>
              <li>Wordpress Development</li>
              <li>Shopify Theme Development</li>
            </ul>
            <ul>
              <li>React</li>
              <li>React Native</li>
              <li>Gatsby</li>
              <li>CSS(SCSS) and Styled Components</li>
            </ul>
          </SkillsContainer>
        </Paragraph>
        <SecondaryTitle>UI/UX Focused Design</SecondaryTitle>
        <Paragraph>
          Although I am not a seasoned designer by any means, I highly value
          good design in websites and mobile apps. In the process of building
          website I like to research resources that follow good design
          principles and use those plan out the look and feel of the website.
        </Paragraph>

        <Paragraph>
          <SkillsContainer>
            <ul>
              <li>Wireframing on paper</li>
              <li>Prototyping with Figma</li>
            </ul>
            <ul>
              <li>Basic Vector Designs</li>
            </ul>
          </SkillsContainer>
        </Paragraph>
      </Container>
    </Layout>
  )
}

AboutPage.propTypes = {}
AboutPage.defaultProps = {}

export default themed(AboutPage)
