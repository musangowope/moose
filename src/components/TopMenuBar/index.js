import React from "react";
import { Link } from "gatsby";
import {
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaEnvelope,
  FaBars
} from "react-icons/fa";

const TopBarMenu = ({ toggleMenu }) => {
  const setBarButtonState = buttonState => {
    const newBarButtonState = buttonState;
    toggleMenu(newBarButtonState);
  };

  return (
    <div className="top-menu-bar">
      <Link to="/" className="top-menu-bar__logo">
        Musango Wope
      </Link>
      <div className="icon-group">
        <div className="icon-group__icon">
          <a
            href="https://www.instagram.com/moosedoesdesign/?hl=en"
            rel="noopener"
          >
            <FaInstagram size="1.5em" />
          </a>
        </div>
        <div className="icon-group__icon">
          <a href="https://twitter.com/CodeUiux" rel="noopener">
            <FaTwitter size="1.5em" />
          </a>
        </div>

        <div className="icon-group__icon">
          <a
            href="https://www.linkedin.com/in/musango-wope-414656120/"
            rel="noopener"
          >
            <FaLinkedin size="1.5em" />
          </a>
        </div>
        <div className="icon-group__icon">
          <a
            href="mailto:musangow@gmail.com?Subject=Hello%20again"
            target="_top"
          >
            <FaEnvelope size="1.5em" />
          </a>
        </div>
      </div>

      <button
        className="hamburger-menu"
        onClick={() => setBarButtonState(true)}
      >
        <div className="animated fadeIn">
          <FaBars size="2em" />
        </div>
      </button>
    </div>
  );
};

export default TopBarMenu;
