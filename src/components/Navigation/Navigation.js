import React from "react"
import styles from "./navigation.module.css"

const Navigation = ({ data }) => {
  console.log({ data })
  return (
    <div
      className={styles.heroImage}
      style={{
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${data.heroImage.file.url})`,
        height: 750,
      }}
    >
      <div className={styles.topNav}>
        <img
          alt={data.logo.description}
          className={styles.navLogo}
          src={data.logo.file.url}
        />
        <div className={`navText ${styles.topNavText}`}>{data.companyName}</div>
      </div>
    </div>
  )
}
export default Navigation
