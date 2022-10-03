import React from "react"
import Seo from "../components/Seo"
import Container from "../components/Container"
import Title from "../elements/Title"
import Paragraph from "../elements/Paragraph"
import SecondaryTitle from "../elements/SecondaryTitle"
import Layout from "../components/Layout"
import styled from "styled-components"

const VideoWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
`

const VideoCard = styled.div`
  border: 2px solid ${props => props.theme.colors.primary};
  iframe {
    height: 400px;
  }

  @media screen and (max-width: ${props => props.theme.breakpoints.md}) {
    grid-column: 1/3;
    iframe {
      height: 300px;
    }
  }
`

const VideoCardAction = styled.a`
  color: ${props => props.theme.colors.primary};
  font-size: ${props => props.theme.fontSizes[3]};
  text-decoration: none;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
`

const YoutubePage = ({ path }) => {
  return (
    <Layout path={path}>
      <Seo title="Youtube" />
      <Container>
        <Title>Youtube channel for coding tutorials</Title>
        <Paragraph>
          I created a Youtube channel called{" "}
          <a
            href="https://www.youtube.com/channel/UCpbhRfe666i5MPHXpbLe2NQ"
            target="_blank"
            rel="noopener noreferrer"
          >
            CodingWithMoose
          </a>
          . The channel contains videos tutorials on how to code various UI
          Elements. So far I have only made two videos😝. I do plan to make more
          when I have time.
        </Paragraph>

        <SecondaryTitle>Videos</SecondaryTitle>
        <VideoWrapper>
          <VideoCard>
            <iframe
              width="100%"
              src="https://www.youtube.com/embed/9A8nmLfnUK0?controls=0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <VideoCardAction
              href="https://www.youtube.com/watch?v=9A8nmLfnUK0"
              target="_blank"
              rel="noreferrer noopener"
            >
              Coding a Floating Field
            </VideoCardAction>
          </VideoCard>
          <VideoCard>
            <iframe
              width="100%"
              src="https://www.youtube.com/embed/OnQv81Ftst0?controls=0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <VideoCardAction
              href="https://www.youtube.com/watch?v=OnQv81Ftst0"
              target="_blank"
              rel="noopener noreferrer"
            >
              Coding an OTP Field
            </VideoCardAction>
          </VideoCard>
        </VideoWrapper>
      </Container>
    </Layout>
  )
}

export default YoutubePage
