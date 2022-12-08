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
        <Link className={styles.logo_link} to="/">
          <p className={styles.logo}>
            ТОРГИ <sup className={styles.logo_sup}>online</sup>{' '}
          </p>
        </Link>

        <nav className={styles.nav}>
          <ul className={styles.links}>
            <li>
              <Link to="/">Тендеры</Link>
            </li>
          </ul>
        </nav>

        <Button type="button" text="О задаче" onClick={openPopup} />
      </header>

      <Popup title="О задаче" isOpen={isAboutPopupOpen} onCloseClick={closePopup}>
        <p>
          Сделать комнату торгов с синхронным счетчиком на 2 минуты для каждого участника. Если участник не онлайн -
          счетчик все-равно должен идти. По окончании хода (счетчика) - ход переходит к следующему участнику и счетчик
          возобновляется.
        </p>
        <p>
          <strong>Использованы:</strong> React, NodeJS, MongoDB.
        </p>

        <p>
          В рамках тестового задания НЕ делал адаптивную верстку, валидацию форм, обработку ошибок (обрабатываются
          только некоторые ошибки, да и то в усеченном виде), Участника отдельной сущностью в Mongo.
        </p>
        <p>
          <a
            className={styles.link_github}
            href="https://github.com/abkiselev/tenders"
            target="_blank"
            rel="noopener noreferrer"
          >
            Cсылка на GitHub
          </a>
        </p>
      </Popup>
    </>
  )
}

export default MenuBar
