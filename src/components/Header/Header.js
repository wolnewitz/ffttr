import React from "react"
import styles from "./header.module.css"

import Navigation from "../Navigation"

const Header = ({ navData, heroData }) => {
  return (
    <>
      <div className={styles.heroImage}>
        <Navigation data={navData} />
        <div className={styles.heroTextWrapper}>
          <h1 className={styles.heroBannerText}>{heroData.headerText}</h1>
          <div className={styles.heroInfo}>
            {heroData.headerDescription.headerDescription}
          </div>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={heroData.headerLink.linkUrl}
            className={styles.heroButton}
          >
            {heroData.headerLink.linkText}
          </a>
        </div>
      </div>
      <div className={styles.bottomHeroWrapper}>
        <div className={styles.bottomHeroTextBlocks}>
          {heroData.bottomTextBlocks.map(({ heading, description }) => (
            <div key={heading} className={styles.bottomTextWrapper}>
              <div className={styles.bottomTextHeading}>{heading}</div>
              <div className={styles.bottomTextDescription}>
                {description.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
export default Header
