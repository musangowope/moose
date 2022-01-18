import React from "react"
import styled from "styled-components"
import { getButtonStyle } from "./PrimaryButton"
import themed from "../functions/themed"

const StyledButtonAnchor = styled.a`
  ${getButtonStyle(props => props.theme.colors.primary)};
  text-decoration: none;
`

const ButtonAnchor = props => (
    <StyledButtonAnchor {...props} />
)

export default themed(ButtonAnchor)
