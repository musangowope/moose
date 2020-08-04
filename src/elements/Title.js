import styled from "styled-components"
import themed from "../functions/themed"

const Title = styled.h2`
  font-size: ${props => props.theme.fontSizes[6]};
  color: ${props => props.theme.colors.primary};
  margin-bottom: ${props => props.theme.marginPaddings[2]};
  font-weight: bold;
`

export default themed(Title)
