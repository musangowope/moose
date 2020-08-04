import styled from "styled-components"
import themed from "../functions/themed"

const Paragraph = styled.p`
  font-size: ${props => props.theme.fontSizes[3]};
  margin-bottom: ${props => props.theme.marginPaddings[1]};
`

export default themed(Paragraph)
