import React from "react"

import Navigation from "../components/Navigation"
import SEO from "../components/seo"

const IndexPage = () => (
  <React.Fragment>
    <SEO title="Home" />
    <div className="home-header">
      <Navigation />
    </div>
  </React.Fragment>
)

export default IndexPage
