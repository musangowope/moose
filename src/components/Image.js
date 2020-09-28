import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const Image = ({ src, alt, ...restProps }) => {
  const [hasError, setHasError] = React.useState(false)

  return (
    <StyledImage
      {...restProps}
      alt={alt}
      src={src}
      onError={() => setHasError(true)}
      hasError={hasError}
    />
  )
}

const StyledImage = styled.img`
  display: ${props => (props.hasError ? "none" : "block")};
`

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
}
Image.defaultProps = {
  src: "",
  alt: "",
}

export default Image
