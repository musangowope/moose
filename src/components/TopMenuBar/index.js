import React from "react";
import { Link } from "gatsby";
import {
  FaBars,
  FaEnvelope,
  FaInstagram,
  FaLinkedin,
  FaTwitter
} from "react-icons/fa";

const TopBarMenu = ({ toggleMenu }) => {
  const setBarButtonState = buttonState => {
    toggleMenu(buttonState);
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
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaInstagram size="1.5em" />
          </a>
        </div>
        <div className="icon-group__icon">
          <a
            href="https://twitter.com/CodeUiux"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaTwitter size="1.5em" />
          </a>
        </div>

        <div className="icon-group__icon">
          <a
            href="https://www.linkedin.com/in/musango-wope-414656120/"
            rel="noopener noreferrer"
            target="_blank"
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
