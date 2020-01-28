import React from "react"
import { graphql } from "gatsby"

import Header from "../components/Header"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <React.Fragment>
    <SEO title="Home" />
    <div className="home-header">
      <Header
        navData={data.contentfulNavigation}
        heroData={data.contentfulHeroBannerText}
      />
    </div>
  </React.Fragment>
)

export const pageQuery = graphql`
  query Home {
    contentfulNavigation {
      companyName
      logo {
        description
        file {
          url
        }
      }
      heroImage {
        file {
          url
        }
      }
      navItems {
        linkUrl
        linkText
      }
    }
    contentfulHeroBannerText {
      headerDescription {
        headerDescription
      }
      headerText
      headerLink {
        linkText
        linkUrl
      }
      bottomTextBlocks {
        heading
        description {
          description
        }
      }
    }
    contentfulHomepagePeople {
        people {
          employment
          name
          description {
            description
          }
          thumbnails {
            title
            description
            file {
              url
              fileName
            }
          }
        }
      }
  }
`

export default IndexPage
