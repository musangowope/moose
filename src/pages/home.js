import React from "react"
import LandingAvatarImg from "../images/landing-avatar.png"
import HeartIcon from "../svgs/heart.inline.svg"
import Layout from "../components/Layout"
import Title from "../elements/Title"
import styled from "styled-components"
import Container from "../components/Container"
import themed from "../functions/themed"
import PrimaryButtonLink from "../elements/PrimaryButtonLink"
import Seo from "../components/Seo"
import { NavHeight } from "../components/Navbar"

const HomeTitle = styled(Title)`
  margin-top: 0;
  margin-bottom: 0;
  @media screen and (max-width: ${props => props.theme.breakpoints.sm}) {
    font-size: ${props => props.theme.fontSizes[5]}; 
  }
  
  @media screen and (max-width: ${props => props.theme.breakpoints.xs}) {
    display: none;
  }
  
`
const AvatarImg = styled.img`
  @media screen and (max-width: ${props => props.theme.breakpoints.sm}) {
    height: 220px;
    width: auto;
    margin-bottom: 20px;
  }
`

const LearnMoreButton = styled(PrimaryButtonLink)`
  width: 195px;
  margin-top: ${props => props.theme.marginPaddings[2]};
`

const Description = styled(HomeTitle)`
  color: ${props => props.theme.colors.secondary};
  display: flex;
  flex-flow: row nowrap;
  align-items: center;

  svg {
    height: 50px;
    width: auto;
    margin-left: 10px;
    path {
      fill: ${props => props.theme.colors.primary};
    }
  }
  
  @media screen and (max-width: ${props => props.theme.breakpoints.xs}) {
    display: block;
  }
`

const DescriptionText = styled.div`

`

const HomeContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
  //margin-top: -${NavHeight};
`
const HomeContent = styled.div`
  text-align: center;
`

const HomePage = props => {
  return (
    <Layout>
      <Seo title="Home" />
      <HomeContainer>
        <HomeContent>
          <AvatarImg src={LandingAvatarImg} alt="musango-wope" />
          <HomeTitle>Musango Wope</HomeTitle>
          <Description>
            <DescriptionText>HTML + CSS + JS + DESIGN =</DescriptionText> <HeartIcon />
          </Description>
          <div>
            <LearnMoreButton to="/about">Learn More</LearnMoreButton>
          </div>
        </HomeContent>
      </HomeContainer>
    </Layout>
  )
}

HomePage.propTypes = {}
HomePage.defaultProps = {}

export default themed(HomePage)
