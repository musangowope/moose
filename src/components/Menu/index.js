import React from "react";

const Menu = props => {
  return (
    <ul className="menu-list">
      <li className="menu-list__list-item-link">
        <button>About Me</button>
      </li>

      <li className="menu-list__list-item-link">
        <button>My Work</button>
      </li>


      <li className="menu-list__list-item-link">
        <button>Blog</button>
      </li>

      <li className="menu-list__list-item-link">
        <button>Connect with me</button>
      </li>


    </ul>
  );
};

Menu.propTypes = {};
Menu.defaultProps = {};

export default Menu;
