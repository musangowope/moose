import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { getButtonStyle } from "./PrimaryButton"
import themed from "../functions/themed"

const StyledLink = styled(Link)`
  ${getButtonStyle(props => props.theme.colors.tertiary)};
  text-decoration: none;
`

const ButtonLink = props => (
  <StyledLink className="tertiary-button-link" {...props} />
)

export default themed(ButtonLink)
