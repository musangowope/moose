import React from "react";
import Helmet from "react-helmet";
import { StaticQuery, graphql, Link } from "gatsby";
import Menu from "../components/Menu";
import BackgroundIcons from "../components/BackgroundIcons";
import Landing from "../components/Landing";
import "../css/styles.scss";

const TemplateWrapper = ({ children, pathName = null }) => (
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

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/img/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            href="/img/favicon-32x32.png"
            sizes="32x32"
          />
          <link
            rel="icon"
            type="image/png"
            href="/img/favicon-16x16.png"
            sizes="16x16"
          />

          <link
            rel="mask-icon"
            href="/img/safari-pinned-tab.svg"
            color="#ff4400"
          />
          <meta name="theme-color" content="#fff" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta property="og:type" content="business.business" />
          <meta property="og:title" content={data.site.siteMetadata.title} />
          <meta property="og:url" content="/" />
          <meta property="og:image" content="/img/og-image.jpg" />
        </Helmet>

        <div className="layout__logo">
          <Link to="/" className="layout__logo__text">Musango Wope</Link>
        </div>

        <div className="layout__area">
          <div className="layout__area__menu">
            <Menu />
          </div>
          <div className="layout__area__children">
            <div className="animated fadeIn">
              <BackgroundIcons />
            </div>
            {pathName === "/" ? <Landing /> : (
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

export default TemplateWrapper;
