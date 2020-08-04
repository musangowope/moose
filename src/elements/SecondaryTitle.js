import styled from "styled-components"
import themed from "../functions/themed"

const SecondaryTitle = styled.h3`
  font-size: ${props => props.theme.fontSizes[4]};
  color: ${props => props.theme.colors.secondary};
  margin-bottom: ${props => props.theme.marginPaddings[1]};
  font-weight: bold;
`

export default themed(SecondaryTitle)
