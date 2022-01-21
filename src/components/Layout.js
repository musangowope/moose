import React from "react"
import PropTypes from "prop-types"
import Navbar, {menuItems} from "./Navbar"
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
  const index = menuItems.findIndex(item => item.path === path);
  console.log({index});

  const prevNavBtnData = (() => {
    if(index === 0 || index === -1) {
      return {};
    }
    return menuItems[index -1];
  })();

  const nexNavBtnData = (() => {
    if(index === menuItems.length -1 || index === -1) {
     return {};
    }
    return menuItems[index + 1];
  })();


  const getNavBtn = (
    navData = {},
    linkComponent = null,
    icon = React.Fragment
  ) => {
    const { path = "", linkText = "" } = navData;
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
      {getNavBtn(prevNavBtnData, PrevNavBtnLink, ChevronLeftIcon)}
      {getNavBtn(nexNavBtnData, NextNavBtnLink, ChevronRightIcon)}
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

export default themed(Layout)
