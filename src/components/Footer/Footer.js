import React from "react"
import { IconContext } from "react-icons"
import styles from "./footer.module.css"

import { FaFacebookSquare } from "react-icons/fa"

const Footer = () => (
  <div className={styles.footerWrapper}>
    <IconContext.Provider
      value={{ size: "3em", className: styles.facebookIcon }}
    >
      <FaFacebookSquare />
    </IconContext.Provider>
  </div>
)

export default Footer
