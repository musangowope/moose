import React from "react"
import styled from "styled-components"
import themed from "../functions/themed"
import HeartIcon from "../svgs/heart.inline.svg"
import CommentIcon from "../svgs/comment.inline.svg"
import { hasValue } from "../functions/hasValue.func"

const ImageLinkOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  color: white;
  background-color: rgba(0, 0, 0, 0.65);
  opacity: 0;
  transition: 200ms ease-in-out;
`

const OverlayContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  //flex-direction: column;
`

const ImageLink = styled.a`
  height: 250px;
  max-height: 250px;
  width: 100%;
  position: relative;
  background-color: ${props => props.theme.colors.secondary};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  &:hover ${ImageLinkOverlay} {
    opacity: 1;
  }

  @media screen and (max-width: ${props => props.theme.breakpoints.sm}) {
    height: 200px;
    max-height: 200px;
  }
`
const ViewPostText = styled.div`
  margin-top: 10px;
  font-size: ${props => props.theme.fontSizes[3]};
`

const InstaInfo = styled.div`
  font-size: ${props => props.theme.fontSizes[3]};
  display: flex;
  align-items: center;
  margin-left: 5px;
  margin-right: 5px;
  svg {
    margin-left: 5px;
    margin-right: 5px;

    fill: white;
    width: 20px;
    height: auto;
  }
`

const InstaThumbnail = ({ id, preview, comments, likes }) => {
  return (
    <ImageLink href={`https://www.instagram.com/p/${id}/`} target="_blank">
      {hasValue(preview) && <img key={id} src={preview} alt="design-img" />}
      <ImageLinkOverlay>
        <OverlayContent>
          <InstaInfo>
            <HeartIcon />
            <span>{likes ? likes : 0}</span>
          </InstaInfo>
          <InstaInfo>
            <CommentIcon />
            <span>{comments ? comments : 0}</span>
          </InstaInfo>
        </OverlayContent>
        <ViewPostText>Click here to view post</ViewPostText>
      </ImageLinkOverlay>
    </ImageLink>
  )
}

InstaThumbnail.propTypes = {}
InstaThumbnail.defaultProps = {}

export default themed(InstaThumbnail)
