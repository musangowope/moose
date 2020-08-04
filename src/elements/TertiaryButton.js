import React from "react"
import { getButtonStyle } from "./PrimaryButton"
import styled, { css } from "styled-components"
import themed from "../functions/themed"

const Button = styled.button`
  ${getButtonStyle(props => props.theme.colors.tertiary)};
`

const TertiaryButton = props => (
  <Button className="tertiary-button" {...props} />
)

export default themed(TertiaryButton)
