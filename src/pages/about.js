import React from "react"
import { graphql } from "gatsby"

import Navigation from "../components/Navigation"
import SEO from "../components/seo"

const AboutPage = ({ data }) => (
  <React.Fragment>
    <SEO title="About" />
    <Navigation data={data.contentfulNavigation} />
    <div>About</div>
  </React.Fragment>
)

export const pageQuery = graphql`
  query About {
    contentfulNavigation {
      companyName
      logo {
        description
        file {
          url
        }
      }
      navItems {
        linkUrl
        linkText
      }
    }
  }
`

export default AboutPage
