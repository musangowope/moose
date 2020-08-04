import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { getButtonStyle } from "./PrimaryButton"
import themed from "../functions/themed"

const StyledLink = styled(Link)`
  ${getButtonStyle(props => props.theme.colors.primary)};
  text-decoration: none;
`

const ButtonLink = props => (
  <StyledLink className="primary-button-link" {...props} />
)

export default themed(ButtonLink)
