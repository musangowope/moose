import React from "react"
import styled, { css } from "styled-components"
import themed from "../functions/themed"

export const getButtonStyle = (color = "transparent") => css`
  display: inline-block;
  text-align: center;
  transition: 0.2s ease-in-out;
  cursor: pointer;
  border: 2px solid ${color};
  background-color: transparent;
  padding: 5px;
  color: ${color};
  font-size: ${props => props.theme.fontSizes[5]};
  &:hover {
    background-color: ${color};
    color: ${props => props.theme.colors.white};
  }
`

const Button = styled.button`
  ${getButtonStyle(props => props.theme.colors.primary)}
`

const PrimaryButton = props => <Button className="primary-button" {...props} />

export default themed(PrimaryButton)
