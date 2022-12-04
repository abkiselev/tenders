import styles from './TenderList.module.css'
import { Link } from 'react-router-dom'

function TenderList({ list }) {
  return (
    <section className={styles.tenderList}>
      <ul className={styles.list}>
        {list.map((tender, index) => (
          <Link key={index} className={styles.listItem_link} to={tender.url}>
            <li className={styles.listItem}>
              <h2 className={styles.title}>{tender.name}</h2>
              <div>
                <p className={styles.bullits}>участников: {tender.participants.length}</p>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </section>
  )
}

export default TenderList
