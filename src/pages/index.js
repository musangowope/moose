import React  from "react"
import { Router } from "@reach/router"
import BlogPage from "./blog"
import HomePage from "./home"
import AboutPage from "./about"
import WebDevPage from "./web-development"
import SameStartPage from "./same-start"
import CityVibePage from "./city-vibe"
import GeomusicPage from "./geomusic"
import YoutubePage from "./youtube"

const IndexPage = () => {
  return (
    <Router>
      <HomePage path="/" />
      <BlogPage path="blog" />
      <AboutPage path="about" />
      <YoutubePage path="youtube" />
      <WebDevPage path="web-development" />
      <SameStartPage path="same-start" />
      <CityVibePage path="city-vibe" />
      <GeomusicPage path="geomusic" />
    </Router>
  )
}

export default IndexPage
