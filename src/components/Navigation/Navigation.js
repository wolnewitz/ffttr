import React from "react"
import styles from "./navigation.module.css"

const NavigationItem = ({ data, lastItem }) => {
  return (
    <a
      href={data.linkUrl}
      target={lastItem ? "_blank" : ""}
      rel={lastItem ? "noopener noreferrer" : ""}
      className={`navText ${styles.navItem}`}
    >
      {data.linkText}
    </a>
  )
}

const Navigation = ({ data }) => {
  return (
    <div className={styles.topNav}>
      <div className="flex items-center">
        <a href="/">
          <img
            alt={data.logo.description}
            className={styles.navLogo}
            src={data.logo.file.url}
          />
        </a>
        <div className={`navText ${styles.topNavText}`}>{data.companyName}</div>
      </div>
      <div className="flex navItems items-center">
        {data.navItems.map((navItem, idx) => (
          <NavigationItem
            lastItem={data.navItems.length - 1 === idx}
            key={idx}
            data={navItem}
          />
        ))}
      </div>
    </div>
  )
}
export default Navigation
