import styles from './MenuBar.module.css'
import { Link } from 'react-router-dom'
import Button from '../UI/Button/Button'

function MenuBar() {
  return (
    <header className={styles.header}>
      <Link to="/">
        <img className={styles.logo} src="/favicon.ico" alt="Логотип" />
      </Link>

      <nav className={styles.nav}>
        <ul className={styles.links}>
          <li>
            <Link to="/">Инструкция</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default MenuBar
