import React from "react"
import styles from "./people.module.css"

const People = ({ peopleData }) => (
  <div className={styles.wrapper}>
    {peopleData.people.map(person => (
      <div className={styles.personWrapper} key={person.name}>
        <div className={styles.personHalf}>
          <div className={styles.name}>{person.name}</div>
          <div className={styles.employment}>{person.employment}</div>
          <div className={styles.description}>
            {person.description.description}
          </div>
          <a target="_blank" className={styles.donateBtn} href={person.donateLink.linkUrl}>
            {person.donateLink.linkText}
          </a>
        </div>
        <div className={styles.personHalf}>
          <img className={styles.largeImage} src={person.largeImage.file.url} />
          <div className={`flex ${styles.thumbnailsWrapper}`}>
            {person.thumbnails.map(thumbnail => (
              <img className={styles.thumbnail} src={thumbnail.file.url} />
            ))}
          </div>
        </div>
      </div>
    ))}
  </div>
)

export default People
