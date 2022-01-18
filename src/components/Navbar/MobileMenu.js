import React from "react"
import PropTypes from "prop-types"
import themed from "../../functions/themed"
import styled, {css} from "styled-components"
import { Link } from "gatsby"

const MobileMenuContainer = styled.div`
  background: ${props => props.theme.colors.white};
  border: 2px solid ${props => props.theme.colors.primary};
`

const menuLinkStyles = css`
  display: block;
  font-size: ${props => props.theme.fontSizes[5]};
  text-align: center;
  text-decoration: none;
  color: ${props => props.theme.colors.primary};
`

const MenuItemLink = styled(Link)`
  ${() => menuLinkStyles}  
`

const MenuItemAnchor = styled.a`
  ${() => menuLinkStyles}
`

const MobileMenu = ({ menuItems }) => {
  return (
    <MobileMenuContainer>
      {menuItems.map((item, index) => (
        <MenuItemLink key={index} to={item.link}>
          {item.linkText}
        </MenuItemLink>
      ))}
      <MenuItemAnchor target="_blank" href="https://www.linkedin.com/in/musango-wope-414656120/">
        LinkedIn
      </MenuItemAnchor>
      <MenuItemAnchor target="_blank" href="https://github.com/musangowope">
        Github
      </MenuItemAnchor>
    </MobileMenuContainer>
  )
}

MobileMenu.propTypes = {
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string,
      linkText: PropTypes.string,
    })
  ),
}
MobileMenu.defaultProps = {
  menuItems: [],
}

export default themed(MobileMenu)
