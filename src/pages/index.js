import React from "react"

import Navigation from "../components/Navigation"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <React.Fragment>
    <SEO title="Home" />
    <div className="home-header">
      <Navigation data={data.contentfulNavigation} />
    </div>
  </React.Fragment>
)

export const pageQuery = graphql`
  query Home {
    contentfulNavigation {
      companyName
      heroImage {
        description
        file {
          url
        }
      }
      logo {
        description
        file {
          url
        }
      }
    }
  }
`

export default IndexPage
