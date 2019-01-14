import React, { useState } from "react";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";
import Menu from "../components/Menu";
import BackgroundIcons from "../components/BackgroundIcons";
import Landing from "../components/Landing";
import TopMenuBar from "../components/TopMenuBar";
import MobileSideMenu from "../components/MobileSideMenu";

import "../css/styles.scss";

const TemplateWrapper = ({ children, pathName = null }) => {
  const [state, setState] = useState({
    isBarsButtonActive: false
  });
  const toggleMenu = isBarsButtonActive => {
    setState({ ...state, isBarsButtonActive });
  };
  return (
    <StaticQuery
      query={graphql`
        query HeadingQuery {
          site {
            siteMetadata {
              title
              description
            }
          }
        }
      `}
      render={data => (
        <div className="layout">
          <Helmet>
            <html lang="en" />
            <title>{data.site.siteMetadata.title}</title>
            <meta
              name="description"
              content={data.site.siteMetadata.description}
            />
            <meta name="theme-color" content="#fff" />
            <meta name="keywords" content={data.site.siteMetadata.keywords} />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"
            />
            <meta property="og:type" content="business.business" />
            <meta property="og:title" content={data.site.siteMetadata.title} />
            <meta property="og:url" content="/" />
            <meta property="og:image" content="/img/og-image.jpeg" />
          </Helmet>

          {state.isBarsButtonActive && (
            <MobileSideMenu toggleMenu={toggleMenu} />
          )}

          <TopMenuBar toggleMenu={toggleMenu} />

          <div className="layout__area">
            <div className="layout__area__menu">
              <Menu />
            </div>
            <div className="layout__area__children">
              <div className="animated fadeIn">
                <BackgroundIcons />
              </div>
              {pathName === "/" ? (
                <Landing />
              ) : (
                <div className="layout__area__children__content animated fadeIn">
                  {children}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    />
  );
};

export default TemplateWrapper;
