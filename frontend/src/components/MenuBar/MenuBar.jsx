import styles from './MenuBar.module.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../UI/Button/Button'
import Popup from '../Popup/Popup'

function MenuBar() {
  const [isAboutPopupOpen, setIsAboutPopupOpen] = useState(false)

  const openPopup = () => {
    setIsAboutPopupOpen(true)
  }

  const closePopup = () => {
    setIsAboutPopupOpen(false)
  }
  return (
    <>
      <header className={styles.header}>
        <Link className={styles.logo_link} to='/'>
          <p className={styles.logo}>
            ТОРГИ <sup className={styles.logo_sup}>online</sup>{' '}
          </p>
        </Link>

        <nav className={styles.nav}>
          <ul className={styles.links}>
            <li>
              <Link to='/'>Тендеры</Link>
            </li>
          </ul>
        </nav>

        <Button type='button' text='О задаче' onClick={openPopup} />
      </header>

      <Popup title='Некоторые пояснения' isOpen={isAboutPopupOpen} onCloseClick={closePopup}>
        попап попаппопаппопаппопаппопаппопаппопаппопаппопаппопаппопаппопап
      </Popup>
    </>
  )
}

export default MenuBar
