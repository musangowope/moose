import React  from "react"
import { Router } from "@reach/router"
import BlogPage from "./blog"
import HomePage from "./home"
import AboutPage from "./about"
import WebDevPage from "./web-development"
import SameStartPage from "./same-start"
import CityVibePage from "./city-vibe"

const IndexPage = () => {
  return (
    <Router>
      <HomePage path="/" />
      <BlogPage path="blog" />
      <AboutPage path="about" />
      <WebDevPage path="web-development" />
      <SameStartPage path="same-start" />
      <CityVibePage path="city-vibe" />
    </Router>
  )
}

export default IndexPage
