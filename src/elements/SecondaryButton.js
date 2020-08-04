import React from "react"
import { getButtonStyle } from "./PrimaryButton"
import styled, { css } from "styled-components"
import themed from "../functions/themed"

const Button = styled.button`
  ${getButtonStyle(props => props.theme.colors.secondary)};
`

const SecondaryButton = props => (
  <Button className="secondary-button" {...props} />
)

export default themed(SecondaryButton)
