import styled from "styled-components"
import themed from "../functions/themed"

const TertiaryTitle = styled.h3`
  font-size: ${props => props.theme.fontSizes[3]};
  color: ${props => props.theme.colors.secondary};
  margin-bottom: ${props => props.theme.marginPaddings[1]};
`

export default themed(TertiaryTitle)
