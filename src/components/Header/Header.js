import React from "react"
import styles from "./header.module.css"

import Navigation from "../Navigation"

const Header = ({ navData, heroData }) => {
  return (
    <div
      className={styles.heroImage}
      style={{
        background: `no-repeat linear-gradient(to bottom, transparent 0%, black 100%), url(${navData.heroImage.file.url})`,
        backgroundSize: `${window.innerWidth < 1150 ? "contain" : "cover"}`,
        height: 750,
      }}
    >
      <div className={styles.overlay} />
      <Navigation data={navData} />
      <div className={styles.heroTextWrapper}>
        <div className={styles.heroBannerText}>{heroData.headerText}</div>
        <div className={styles.heroInfo}>
          {heroData.headerDescription.headerDescription}
        </div>
        <a href={heroData.headerLink.linkUrl} className={styles.heroButton}>
          {heroData.headerLink.linkText}
        </a>
        <div className={styles.bottomHeroWrapper}>
          <div className={styles.bottomHeroTextBlocks}>
              {heroData.bottomTextBlocks.map(({heading, description}) => (
                <div key={heading} className={styles.bottomTextWrapper}>
                  <div className={styles.bottomTextHeading}>{heading}</div>
                  <div className={styles.bottomTextDescription}>{description.description}</div>
                </div>
              ))}
        </div>
        </div>
      </div>
    </div>
  )
}
export default Header
