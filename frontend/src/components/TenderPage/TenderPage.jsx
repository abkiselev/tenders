import styles from './TenderPage.module.css'
import { useState } from 'react'
import Button from '../UI/Button/Button'
import Popup from '../Popup/Popup'
import { Link } from 'react-router-dom'
import MenuBar from '../MenuBar/MenuBar'
import Heading from '../Heading/Heading'

function TenderPage() {
  const [isAddPopupOpen, setIsAddPopupOpen] = useState(false)

  const openAddPopup = () => {
    setIsAddPopupOpen(true)
  }

  const closeAddPopup = () => {
    setIsAddPopupOpen(false)
  }
  const handleSubmit = () => {}

  return (
    <>
      <main>
        <Link className={styles.back_link} to="/">
          &lsaquo; к списку тендеров
        </Link>

        <section className={styles.tender}>
          <Heading title="Название тендера" buttonType="button" buttonTitle="Участвовать" onClick={openAddPopup} />

          <table className={styles.table}>
            <thead>
              <tr>
                <th></th>
                <th>
                  <p>Участник 2</p>
                  <p>online</p>
                  <p>0:22</p>
                </th>
                <th>Участник 3</th>
                <th>Участник 4</th>
                <th>Участник 5</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Цена</td>
                <td>222</td>
                <td>222 3</td>
                <td>222 4</td>
                <td>
                  <input type="text" />
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
      <Popup isOpen={isAddPopupOpen} onCloseClick={closeAddPopup} />
    </>
  )
}

export default TenderPage
