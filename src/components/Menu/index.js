import React from "react";
import {Link} from "gatsby";

const Menu = () => {
  return (
    <ul className="menu-list">
      <li className="menu-list__list-item-link">
        <Link to="/about">About Me</Link>
      </li>
      <li className="menu-list__list-item-link">
        <Link to="/my-work">My Work</Link>
      </li>
      <li className="menu-list__list-item-link">
        <Link to="/my-blog">Blog</Link>
      </li>
    </ul>
  );
};

Menu.propTypes = {};
Menu.defaultProps = {};

export default Menu;
