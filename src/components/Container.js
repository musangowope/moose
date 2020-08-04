import styled from "styled-components"
import themed from "../functions/themed"

const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: ${props => props.theme.marginPaddings[3]};
  flex-grow: 1;
  @media screen and (max-width: ${props => props.theme.breakpoints.sm}) {
    padding: ${props => props.theme.marginPaddings[2]};
  }
`

export default themed(Container)
