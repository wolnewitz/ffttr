import React from "react"
import { graphql } from "gatsby"

import Navigation from "../components/Navigation"
import SEO from "../components/seo"
import styles from "./about.module.css"
import aboutHeader from "../images/aboutHeader.jpg"

const AboutPage = ({ data }) => (
  <React.Fragment>
    <SEO title="About Us" />
    <Navigation transparent data={data.contentfulNavigation} />
    <div className={styles.heroWrapper}>
      <img
        alt="fire on a hill"
        className={styles.heroImage}
        src={aboutHeader}
      />
      <div className={styles.heroTextWrapper}>
        <div className={styles.headline}>About Us</div>
        <div className={styles.address1}>10173 150th Court North</div>
        <div className={styles.address2}>Jupiter, Florida 33478</div>
        <a href="tel: 1-5616625516" className={styles.phone}>
          561-662-5516
        </a>
        <div className={styles.email}>firefighterstotherescue@comcast.net</div>
      </div>
    </div>
    <div className={styles.quoteSection}>
      <div className={styles.headerSectionText}>
        Firefighters to the Rescue was founded based on a profound need to help
        other public servants in the community.
      </div>
      <div className={styles.subHeaderText}>
        Firefighter’s to the Rescue, Inc. is 100% volunteer. This means that
        every penny donated goes toward helping others in need, no salaries or
        overhead. Donations are tax deductible under federal 501c3 status. We
        are governed by a set of by-laws that have been registered with the
        State of Florida.
      </div>
      <div className={styles.divider}></div>
      <div className={styles.foundingSection}>
        <div className={styles.foundingSectionHeadline}>
          In 2004 Palm Beach Gardens Fire Rescue sponsored our first fundraiser.
        </div>
        <div className={styles.foundingSectionBody}>
          It was for Shawn Thurman, who contracted a rare form of heart cancer.
          A benefit dinner/auction was held and approximately $50,000 was raised
          to assist Shawn Thurman with medical bills. Shawn was able to recover
          and return to work for a short time, but ultimately lost his battle to
          the cancer in late 2005.
        </div>
      </div>
      <div className={styles.foundingSection}>
        <div className={styles.foundingSectionHeadline}>
          A year later, Jeremy O’Brien was diagnosed with Guillain Barre’
          Syndrome.
        </div>
        <div className={styles.foundingSectionBody}>
          Jeremy’s insurance and disability were insufficient to cover the
          expenses he had incurred. He has four children (one of which was born
          when Jeremy was in the hospital) that depend on his income. Jeremy’s
          brother, Jason O’Brien, a Battalion Chief for Palm Beach Gardens Fire
          Rescue, started a benefit for him with the help of his co-workers. We
          raised approximately $75,000 to help Jeremy and his family.
        </div>
      </div>
      <div className={styles.foundingSection}>
        <div className={styles.foundingSectionHeadline}>
          Then in 2006, the daughter of one of our firefighters had a relapse of
          Leukemia.
        </div>
        <div className={styles.foundingSectionBody}>
          She required a bone marrow transplant at Duke University in North
          Carolina. We were able to help their family by covering travel
          expenses. Unfortunately, the need to raise funds for other public
          servants, not only with PBGFR, who are in need, continues to this day.
        </div>
      </div>
      <div className={styles.divider}></div>
      <div className={styles.brokenOutQuotes}>
        <div className={styles.quoteOne}>
          It was clear we needed an organization all-year-round to raise money
          for not only the families of PBGFR, but for all area families of
          public servants.
        </div>
        <div className={styles.quoteTwo}>
          It was no longer appropriate to be engaged in several individual
          fundraisers without the benefit of non-profit status. At this point
          Firefighter’s to the Rescue was incorporated and non-profit status was
          gained in 2006. We established a board with the goal of hosting
          fundraising events to establish funds that will be on hand when they
          are needed, and to assist our extended family of public servants so
          that they may quickly return to work and continue serving the
          community. Firefighter’s to the Rescue, Inc. continues to serve public
          servants throughout the area, as well as the country, in their time of
          need with gracious donations from members of the community.
        </div>
      </div>
      <div className={styles.boardMembers}>
        Our board consists of a President (Mark Joyce), a Vice President (Jason
        O’Brien), and two board members (Mike Zingaro and Jules Tuman). These
        people work tirelessly to help those in need. If you have any questions
        about Firefighter’s to the Rescue, Inc., or are considering donating
        please don’t hesitate to contact any of our board members. Thank you for
        taking the time to research the organization.
      </div>
    </div>
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
