import React from "react"
import styled, {css} from "styled-components"
import AvatarIcon from "../../svgs/avatar.inline.svg"
import { Link } from "gatsby"
import PrimaryButtonLink from "../../elements/PrimaryButtonLink"
import themed from "../../functions/themed"
import MenuIcon from "../../svgs/menu.inline.svg"
import TransparentButton from "../../elements/TransparentButton"
import MobileMenu from "./MobileMenu"
import { handleOutsideElementClick } from "../../functions/handleOutsideElementClick.func"
import PrimaryButtonAnchor from "../../elements/PrimaryButtonAnchor";

export const NavHeight = "95px"

export const menuItems = [
  {
    path: "/about/",
    linkText: "About",
  },
  {
    path: "/web-development/",
    linkText: "Web Dev",
  },
  {
    path: "/blog/",
    linkText: "Blog",
  },
];

const Navbar = () => {
  const [isMobileMenuActive, setMobileMenuActive] = React.useState(false)
  const modalRef = React.useRef()
  React.useEffect(() => {
    const handleOutsideClick = e =>
      handleOutsideElementClick(modalRef, e, () => setMobileMenuActive(false))
    window.addEventListener("mousedown", handleOutsideClick)
    return () => {
      window.removeEventListener("mousedown", handleOutsideClick)
    }
  }, [])

  React.useEffect(() => {
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const handleResize = () => setMobileMenuActive(false)
  return (
    <NavbarWrapper ref={modalRef}>
      <NavBodyContent>
        <AvatarLink to="/">
          <AvatarSvgWrapper>
            <AvatarIcon />
          </AvatarSvgWrapper>
          <AvatarTextContainer>
            <AvatarText>Musango Wope</AvatarText>
            <SubText>(Front End Engineer and UX/UI Enthusiast)</SubText>
          </AvatarTextContainer>
        </AvatarLink>

        <NavItemsContainer>
          {menuItems.map((linkItem, key) => (
            <NavItem key={key}>
              <NavItemLink to={linkItem.path}>{linkItem.linkText}</NavItemLink>
            </NavItem>
          ))}
          <NavItem>
            <NavItemAnchor target="_blank" href="https://www.linkedin.com/in/musango-wope-414656120/">
              LinkedIn
            </NavItemAnchor>
          </NavItem>
          <NavItem>
            <NavItemAnchor target="_blank" href="https://github.com/musangowope">
              Github
            </NavItemAnchor>
          </NavItem>
        </NavItemsContainer>

        <MobileMenuIconButton
          onClick={() => setMobileMenuActive(prev => !prev)}
        >
          <MenuIcon />
        </MobileMenuIconButton>
      </NavBodyContent>
      <MobileMenuWrapper isActive={isMobileMenuActive}>
        <MobileMenu menuItems={menuItems} />
      </MobileMenuWrapper>
    </NavbarWrapper>
  )
}

const NavbarWrapper = styled.div`
  position: sticky;
  top: 0;
  z-index: 9;
`

const NavBodyContent = styled.div`
  padding-right: ${props => props.theme.marginPaddings[3]};
  padding-left: ${props => props.theme.marginPaddings[3]};
  justify-content: space-between;
  display: flex;
  flex-flow: row nowrap;
  min-height: ${NavHeight};
  height: ${NavHeight};
  overflow-y: hidden;
  border: 2px solid ${props => props.theme.colors.tertiary};
  background-color: ${props => props.theme.colors.white};
  position: relative;
  z-index: 999;
`

const NavItem = styled.div`
  text-align: center;
  margin-top: auto;
  margin-bottom: auto;
`

const navItemLinkStyles = css`
  padding-right: ${props => props.theme.marginPaddings[1]};
  padding-left: ${props => props.theme.marginPaddings[1]};
  font-size: ${props => props.theme.fontSizes[4]};
  display: block;
  width: 100%;
  margin-left: auto;
  margin-right: auto;`

const NavItemLink = styled(PrimaryButtonLink)`
  ${() => navItemLinkStyles}
`

const NavItemAnchor = styled(PrimaryButtonAnchor)`
  ${() => navItemLinkStyles}
`

const AvatarTextContainer = styled.span`
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 15px;
  @media screen and (max-width: ${props => props.theme.breakpoints.sm}) {
    display: none;
  }
`

const AvatarText = styled.span`
  font-size: ${props => props.theme.fontSizes[5]};
  color: ${props => props.theme.colors.primary};
  font-weight: bold;
  height: 100%;
  margin-top: auto;
  margin-bottom: auto;
  display: block;
}
`

const SubText = styled.span`
  color: ${props => props.theme.colors.tertiary};
  font-size: ${props => props.theme.fontSizes[4]};
  font-style: italic;
`
const AvatarLink = styled(Link)`
  display: inline-flex;
  text-decoration: none;
  color: ${props => props.theme.colors.secondary};
  align-self: center;
`

const AvatarSvgWrapper = styled.div`
  display: flex;
  svg {
    margin-top: -15px;
    height: 150px;
    width: auto;
    @media screen and (max-width: ${props => props.theme.breakpoints.sm}) {
      height: 120px;
    }
  }
`

const NavItemsContainer = styled.div`
  display: grid;
  grid-auto-rows: minmax(${NavHeight}, auto);
  grid-template-columns: repeat(5, 1fr);
  column-gap: 10px;
  @media screen and (max-width: ${props => props.theme.breakpoints.lg}) {
    display: none;
  }
`

const MobileMenuIconButton = styled(TransparentButton)`
  display: none;
  align-items: center;
  svg {
    width: 40px;
    height: auto;
    fill: ${props => props.theme.colors.primary};
  }
  @media screen and (max-width: ${props => props.theme.breakpoints.lg}) {
    display: flex;
  }
`

const MobileMenuWrapper = styled.div`
  display: none;
  @media screen and (max-width: ${props => props.theme.breakpoints.lg}) {
    display: block;
    position: fixed;
    width: 100%;
    top: ${props => (props.isActive ? "95px" : "-100%")};
    transition: top 300ms ease-in-out;
  }
}
`

export default themed(Navbar)
