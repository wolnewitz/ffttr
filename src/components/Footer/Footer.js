import React from "react"
import { IconContext } from "react-icons"
import styles from "./footer.module.css"

import { FaFacebookSquare } from "react-icons/fa"

const Footer = ({ footerData }) => (
  <div className={styles.footerWrapper}>
    <div className={styles.footerContent}>
      <div className={styles.contactUs}>{footerData.contactUs}</div>
      <a
        href={`tel: 1-${footerData.phoneNumber}`}
        className={styles.phoneNumber}
      >
        {footerData.phoneNumber}
      </a>
      <a href={`mailto:${footerData.email}`} className={styles.email}>
        {footerData.email}
      </a>
      <div className={styles.socialText}>{footerData.socialText}</div>
      <IconContext.Provider
        value={{ size: "2em", className: styles.facebookIcon }}
      >
        <a href="https://www.facebook.com/firefighterstotherescue/">
          <FaFacebookSquare />
        </a>
      </IconContext.Provider>
    </div>
  </div>
)

export default Footer
