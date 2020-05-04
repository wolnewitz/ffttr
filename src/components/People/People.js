import React from "react"
import styles from "./people.module.css"

const People = ({ peopleData }) => (
  <div className={styles.wrapper}>
    {peopleData.people.map((person, i) => (
      <div className={styles.personWrapper} key={person.name}>
        <div
          style={{
            order: i % 2 === 0 ? 0 : 1,
            [`margin${i % 2 === 0 ? "Right" : "Left"}`]: 66,
          }}
          className={styles.personHalf}
        >
          <div className={styles.name}>{person.name}</div>
          <div className={styles.employment}>{person.employment}</div>
          <div className={styles.description}>
            {person.description.description}
          </div>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className={styles.donateBtn}
            href={person.donateLink.linkUrl}
          >
            {person.donateLink.linkText}
          </a>
        </div>
        <div style={{ order: 0 }} className={styles.personHalf}>
          <img
            alt={person.largeImage.description}
            className={styles.largeImage}
            src={person.largeImage.file.url}
          />
              {person.thumbnails && <div className={`flex ${styles.thumbnailsWrapper}`}>
            {person.thumbnails.map(thumbnail => (
              <img
                alt={thumbnail.description}
                className={styles.thumbnail}
                src={thumbnail.file.url}
              />
            ))}
          </div>}
        </div>
      </div>
    ))}
  </div>
)

export default People
