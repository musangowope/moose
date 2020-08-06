import React from "react"
import PropTypes from "prop-types"
import Navbar from "./Navbar"
import styled from "styled-components"
import themed from "../functions/themed"
import PrimaryButtonLink from "../elements/PrimaryButtonLink"
import ChevronRightIcon from "../svgs/chevron-right.inline.svg"
import ChevronLeftIcon from "../svgs/chevron-left.inline.svg"
import "../styles/global.css"

const IconWrapper = styled.div`
  margin-left: 10px;
  margin-right: 10px;
  display: flex;
  align-items: center;
  svg {
    width: 25px;
    height: auto;
    path {
      transition: fill 0.3s ease-in-out;
    }

    @media screen and (max-width: ${props => props.theme.breakpoints.sm}) {
      width: 15px;
    }
  }
`

const LinkText = styled.span`
  width: 0;
  overflow: hidden;
  transition: width 200ms ease-in-out;
  display: flex;
`

const NavBtnLink = styled(PrimaryButtonLink)`
  height: 74px;
  background-color: ${props => props.theme.colors.white};
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  z-index: 999;
  display: flex;
  flex-flow: nowrap row;
  align-items: center;
  padding: 10px;
  justify-content: center;

  @media screen and (max-width: ${props => props.theme.breakpoints.sm}) {
    height: 50px;
    width: 40px;
  }

  &:hover {
    ${LinkText} {
      width: 200px;
    }
    svg {
      path {
        fill: ${props => props.theme.colors.white};
      }
    }
  }
`

const PrevNavBtnLink = styled(NavBtnLink)`
  left: 0;
  flex-direction: row-reverse;
`

const NextNavBtnLink = styled(NavBtnLink)`
  right: 0;
`

const StyledLayout = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

const Navigator = ({ path }) => {
  const getFirstButtonLink = () => {
    switch (path) {
      case "/about/":
        return {
          path: "",
          linkText: "",
        }
      case "/design/":
        return {
          path: "/about",
          linkText: "About",
        }
      case "/blog/":
        return {
          path: "/design",
          linkText: "Design",
        }
      case "web-development":
        return {
          path: "/blog",
          linkText: "Blog",
        }
      default:
        return {}
    }
  }

  const getLastButtonLink = () => {
    switch (path) {
      case "/about/":
        return {
          path: "/design",
          linkText: "Design",
        }
      case "/design/":
        return {
          path: "/blog",
          linkText: "Blog",
        }
      case "/blog/":
        return {
          path: "/web-development",
          linkText: "Web Dev",
        }
      case "web-development":
        return {
          path: "",
          linkText: "",
        }

      default:
        return {}
    }
  }

  const getNavBtn = (
    getButtonMethod = () => {},
    linkComponent = null,
    icon = React.Fragment
  ) => {
    const { path = "", linkText = "" } = getButtonMethod()
    const LinkComponent = linkComponent
    const Icon = icon
    if (path && linkText) {
      return (
        <LinkComponent to={path}>
          <LinkText>{linkText}</LinkText>
          <IconWrapper>
            <Icon />
          </IconWrapper>
        </LinkComponent>
      )
    }
    return null
  }

  return (
    <React.Fragment>
      {getNavBtn(getFirstButtonLink, PrevNavBtnLink, ChevronLeftIcon)}
      {getNavBtn(getLastButtonLink, NextNavBtnLink, ChevronRightIcon)}
    </React.Fragment>
  )
}

Navigator.propTypes = {
  path: PropTypes.string,
}

Navigator.defaultProps = {
  path: "",
}

const Layout = ({ children, path }) => {
  return (
    <StyledLayout>
      <Navbar />
      <Navigator path={path} />
      {children}
    </StyledLayout>
  )
}

Layout.propTypes = {
  path: PropTypes.string,
}
Layout.defaultProps = {
  path: "",
}

export default themed(Layout)
