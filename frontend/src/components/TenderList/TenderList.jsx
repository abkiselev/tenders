import styles from './TenderList.module.css'
import { Link } from 'react-router-dom'

function TenderList({ list }) {
  return (
    <section className={styles.tenderList}>
      <ul className={styles.list}>
        {list.map((tender, index) => (
          <li key={index} className={styles.listItem}>
            <Link to={tender.url}>
              <h2 className={styles.title}>{tender.name}</h2>
            </Link>
            <div>
              <p className={styles.bullits}>участников: {tender.participants.length}</p>
              {/* <p className={styles.bullits}>статус: не завершен</p>
              <p className={styles.bullits}>дата начала: </p> */}
            </div>
            <Link to={tender.url}>Смотреть</Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default TenderList
