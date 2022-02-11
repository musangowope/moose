import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import themed from "../functions/themed"
import SecondaryTitle from "../elements/SecondaryTitle"
import TertiaryTitle from "../elements/TertiaryTitle"

const PostContainer = styled.div`
  border: 2px solid ${props => props.theme.colors.secondary};
  margin-bottom: 20px;
`

const PostFeatureImg = styled.img`
  height: 200px;
  width: 100%;
  object-fit: cover;
  object-position: center;
`

const PostExcerpt = styled.div`
  padding: 20px;
`

const BlogPostPreview = ({ title, date, slug, img = null }) => {
  const today = new Date(date);
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  const yyyy = today.getFullYear();
  const presentationalDate = `${dd}/${mm}/${yyyy}`
  return (
    <PostContainer>
      <PostFeatureImg src={img} alt={title} />
      <PostExcerpt>
        <SecondaryTitle>{title}</SecondaryTitle>
        <TertiaryTitle>Date Written: {presentationalDate}</TertiaryTitle>
        <Link to={`/${slug}`}>
          <TertiaryTitle>Read more</TertiaryTitle>
        </Link>
      </PostExcerpt>
    </PostContainer>
  )
}

export default themed(BlogPostPreview)
