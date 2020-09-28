import React from "react"
import styled from "styled-components"
import AvatarIcon from "../../svgs/avatar.inline.svg"
import { Link } from "gatsby"
import PrimaryButtonLink from "../../elements/PrimaryButtonLink"
import themed from "../../functions/themed"
import MenuIcon from "../../svgs/menu.inline.svg"
import TransparentButton from "../../elements/TransparentButton"
import MobileMenu from "./MobileMenu"
import { handleOutsideElementClick } from "../../functions/handleOutsideElementClick.func"

export const NavHeight = "95px"

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

const NavItemLink = styled(PrimaryButtonLink)`
  font-size: ${props => props.theme.fontSizes[4]};
  display: block;
  width: 195px;
  margin-left: auto;
  margin-right: auto;
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
  grid-template-columns: repeat(4, 1fr);
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

  const linksArray = [
    {
      link: "/about",
      linkText: "About",
    },
    {
      link: "/web-development",
      linkText: "Web Dev",
    },
    {
      link: "/design",
      linkText: "Design",
    },
    {
      link: "/blog",
      linkText: "Blog",
    },
  ]
  return (
    <NavbarWrapper ref={modalRef}>
      <NavBodyContent>
        <AvatarLink to="/">
          <AvatarSvgWrapper>
            <AvatarIcon />
          </AvatarSvgWrapper>
          <AvatarTextContainer>
            <AvatarText>Musango Wope</AvatarText>
            <SubText>(Front Developer and Designer)</SubText>
          </AvatarTextContainer>
        </AvatarLink>

        <NavItemsContainer>
          {linksArray.map((linkItem, key) => (
            <NavItem key={key}>
              <NavItemLink to={linkItem.link}>{linkItem.linkText}</NavItemLink>
            </NavItem>
          ))}
        </NavItemsContainer>

        <MobileMenuIconButton
          onClick={() => setMobileMenuActive(prev => !prev)}
        >
          <MenuIcon />
        </MobileMenuIconButton>
      </NavBodyContent>
      <MobileMenuWrapper isActive={isMobileMenuActive}>
        <MobileMenu menuItems={linksArray} />
      </MobileMenuWrapper>
    </NavbarWrapper>
  )
}

Navbar.propTypes = {}
Navbar.defaultProps = {}

export default themed(Navbar)
