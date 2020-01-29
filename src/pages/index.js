import React from "react"
import { graphql } from "gatsby"

import Footer from "../components/Footer"
import Header from "../components/Header"
import People from "../components/People"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <React.Fragment>
    <SEO title="FFTTR" />
    <div className="home-header">
      <Header
        navData={data.contentfulNavigation}
        heroData={data.contentfulHeroBannerText}
      />
    </div>
    <People peopleData={data.contentfulHomepagePeople} />
    <Footer footerData={data.contentfulFooter} />
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
        largeImage {
          file {
            fileName
            url
          }
          description
        }
        donateLink {
          linkText
          linkUrl
        }
      }
    }
    contentfulFooter {
      contactUs
      email
      phoneNumber
      socialText
    }
  }
`

export default IndexPage
