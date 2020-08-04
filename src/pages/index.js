import React, { Fragment } from "react"
import { Router } from "@reach/router"
import "../styles/global.css"
import BlogPage from "./blog"
import HomePage from "./home"
import DesignPage from "./design"
import AboutPage from "./about"
import WebDevPage from "./web-development"
import SameStartPage from "./same-start"
import CityVibePage from "./city-vibe"

const IndexPage = () => {
  return (
    <Fragment>
      <Router>
        <HomePage path="/" />
        <BlogPage path="blog" />
        <DesignPage path="design" />
        <AboutPage path="about" />
        <WebDevPage path="web-development" />
        <SameStartPage path="same-start" />
        <CityVibePage path="city-vibe" />
      </Router>
    </Fragment>
  )
}

export default IndexPage
