import styles from './MainPage.module.css'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Popup from '../../components/Popup/Popup'
import TenderList from '../../components/TenderList/TenderList'
import Heading from '../../components/Heading/Heading'
import { getTenders, addTender } from '../../helpers/fetching'
import Form from '../../components/UI/Form/Form'
import Input from '../../components/UI/InputText/InputText'
import CheckBox from '../../components/UI/Select/Select'
import { transliterate } from '../../helpers/transliterate'
import Loader from '../../components/Loader/Loader'

function MainPage() {
  const navigate = useNavigate()
  const [tendersList, setTendersList] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isAddPopupOpen, setIsAddPopupOpen] = useState(false)
  const [formValues, setFormValues] = useState({})
  const [fakeParticipantsQuantity, setFakeParticipantsQuantity] = useState(0)
  const [formDisabled, setFormDisabled] = useState(false)
  const [formErrorMessage, setFormErrorMessage] = useState('')

  useEffect(() => {
    fetchTenderslist()
  }, [])

  function fetchTenderslist() {
    getTenders().then((res) => {
      setTendersList(res)
      setIsLoading(false)
    })
  }

  const openAddPopup = () => {
    setIsAddPopupOpen(true)
  }

  const closeAddPopup = () => {
    setIsAddPopupOpen(false)
  }

  const handleFormValues = (e) => {
    setFormValues({ name: e.target.value })
  }

  const handleAddTender = (e) => {
    e.preventDefault()
    setFormDisabled(true)

    const participants = fakeParticipantsQuantity
      ? Array.from({ length: fakeParticipantsQuantity }, (_, index) => ({
          name: `Тестовый участник ${index + 1}`,
          price: 0,
          isOnline: false,
        }))
      : []

    const data = {
      name: formValues.name,
      url: transliterate(formValues.name),
      participants,
    }

    addTender(data)
      .then((res) => {
        if (res.url) {
          navigate(`/${res.url}`)
        } else {
          console.log(res.response.data.message)
          setFormErrorMessage(res.response.data.message)
          setFormDisabled(false)
        }
      })
      .catch((err) => {
        setFormErrorMessage(err.message)
        setFormDisabled(false)
      })
  }

  return (
    <>
      <main>
        <section>
          <Heading title="Список торгов" buttonType="button" buttonTitle="Создать тендер" onClick={openAddPopup} />

          {isLoading ? (
            <div className={styles.loader}>
              <Loader />
            </div>
          ) : tendersList.length < 1 ? (
            <p>пока тендеров нет...</p>
          ) : (
            <TenderList list={tendersList} />
          )}
        </section>
      </main>

      <Popup title="Создать тендер" isOpen={isAddPopupOpen} onCloseClick={closeAddPopup}>
        <Form onSubmit={handleAddTender} buttonText="Создать" disabled={formDisabled} error={formErrorMessage}>
          <Input type="text" name="name" placeholder="Название тендера" onChange={handleFormValues} required />
          <CheckBox name="participants_quantity" onChange={(e) => setFakeParticipantsQuantity(e.target.value)} />
        </Form>
      </Popup>
    </>
  )
}

export default MainPage
