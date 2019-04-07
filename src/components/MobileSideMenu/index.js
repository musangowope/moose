import React, { Fragment } from "react";
import { Link } from "gatsby";

const MobileSideMenu = ({ toggleMenu }) => {
  const setBarButtonState = buttonState => {
    const newBarButtonState = buttonState;
    toggleMenu(newBarButtonState);
  };

  return (
    <Fragment>
      <div
        className="mobile-overlay"
        onClick={() => setBarButtonState(false)}
      />
      <div className="mobile-side-menu">
        <ul className="mobile-side-menu__list">
          <li className="mobile-side-menu__list__item">
            <Link to="/about">About Me</Link>
          </li>
          <li className="mobile-side-menu__list__item">
            <Link to="/my-work">My Work</Link>
          </li>
          <li className="mobile-side-menu__list__item">
            <Link to="my-blog">My Blog</Link>
          </li>
          <li className="mobile-side-menu__list__item">
            <a
              href="mailto:musangow@gmail.com?Subject=Hello%20again"
              target="_top"
            >
              Email Me
            </a>
          </li>
          <li className="mobile-side-menu__list__item">
            <a
              href="https://www.instagram.com/moosedoesdesign/?hl=en"
              rel="noopener noreferrer"
              target="_blank"
            >
              Instagram
            </a>
          </li>

          <li className="mobile-side-menu__list__item">
            <a
              href="https://twitter.com/CodeUiux"
              rel="noopener noreferrer"
              target="_blank"
            >
              Twitter
            </a>
          </li>

          <li className="mobile-side-menu__list__item">
            <a
              href="https://www.linkedin.com/in/musango-wope-414656120/"
              rel="noopener noreferrer"
              target="_blank"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

MobileSideMenu.propTypes = {};
MobileSideMenu.defaultProps = {};

export default MobileSideMenu;
