import styles from './TenderPage.module.css'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Popup from '../Popup/Popup'
import { Link } from 'react-router-dom'
import Heading from '../Heading/Heading'
import Form from '../UI/Form/Form'
import Input from '../UI/InputText/InputText'
import Loader from '../Loader/Loader'
import { getTender } from '../../helpers/fetching'
import Counter from '../Counter/Counter'

function TenderPage() {
  const { tenderName } = useParams()
  const [tenderData, setTenderData] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [isAddPopupOpen, setIsAddPopupOpen] = useState(false)
  const [formValues, setFormValues] = useState({})
  const [formDisbled, setFormDisbled] = useState(false)
  const [timeFromStart, setTimeFromStart] = useState(null)
  const [activeParticipant, setActiveParticirant] = useState(null)
  const [motionCounter, setMotionCounter] = useState(null)
  const [needRefetch, setNeedRefetch] = useState(false)

  useEffect(() => {
    fetchTender()
  }, [needRefetch])

  console.log( `ререндер`)

  // useEffect(() => {
  //   const interval =
  //     motionCounter > 0 &&
  //     setInterval(() => {
  //       setMotionCounter(motionCounter - 1)
  //     }, 1000)

  //   return () => clearInterval(interval)
  // }, [motionCounter])

  function fetchTender() {
    getTender(tenderName).then((res) => {
      setTenderData(res)
      res.participants.length !== 0 && setTimers(res.createdAt, res.participants.length)
      setIsLoading(false)
      console.log('фетч');
    })
  }

  function refetchTender() {
    getTender(tenderName).then((res) => {
      setTenderData(res)
    })
  }

  function setTimers(startTime, participantsQuantity) {
    console.log('сеттаймерс');
    const date = new Date(startTime)
    const gapMinutes = (Date.now() - date.getTime(startTime)) / 1000 / 60
    const gapRoundes = gapMinutes / 2
    const activeParticipant = Math.floor(gapRoundes % participantsQuantity)
    setActiveParticirant(activeParticipant)
    console.log(activeParticipant)
    setTimeFromStart(gapMinutes)

    const offset = (((Date.now() - date.getTime(startTime)) / 1000 / 60 / 2) % 1) * 120
    // setCounter(offset)

    const remainingSeconds = 120 - offset
    setMotionCounter(remainingSeconds)
    console.log(remainingSeconds)
  }

  function setCounter(offset) {}

  const openAddPopup = () => {
    setIsAddPopupOpen(true)
  }

  const closeAddPopup = () => {
    setIsAddPopupOpen(false)
  }

  const handleFormValues = (e) => {
    setFormValues({ name: e.target.value })
  }

  const handleSubmit = () => {}

  return (
    <>
      <main>
        {isLoading ? (
          <Loader />
        ) : !tenderData.url ? (
          <p>такого тендера не существует</p>
        ) : (
          <>
            <Link className={styles.back_link} to='/'>
              &lsaquo; к списку тендеров
            </Link>

            <section className={styles.tender}>
              <Heading
                title={tenderData.name}
                buttonType='button'
                buttonTitle='Участвовать'
                onClick={openAddPopup}
              />

              <p className={styles.start}>прошло: {timeFromStart}</p>

              <ul className={styles.list}>
                {tenderData.participants.length === 0 ? (
                  <p>участников нет...</p>
                ) : (
                  tenderData.participants.map((participant, index) => (
                    <li key={participant.name} className={styles.partisipant}>
                      <div className={styles.head}>
                        <h2 className={styles.name}>{participant.name}</h2>
                        <p className={styles.status}>
                          {participant.isOnline ? 'online' : 'offline'}
                        </p>
                      </div>
                      {index === activeParticipant && (
                        <>
                        <Counter initialValue={motionCounter} setNeedRefetch={setNeedRefetch} />
                        {/* <p className={styles.timer}>
                          {motionCounter}
                        </p> */}
                        </>
                      )}
                      <p className={styles.bet}>
                        {participant.price === 0 ? 'нет ставки' : participant.price}
                      </p>
                    </li>
                  ))
                )}
              </ul>
            </section>
          </>
        )}
      </main>

      <Popup title='Записаться на участие' isOpen={isAddPopupOpen} onCloseClick={closeAddPopup}>
        <Form onSubmit={handleSubmit} buttonText='Записаться' disabled={formDisbled}>
          <Input
            type='text'
            name='name'
            placeholder='Название вашей компании'
            onChange={handleFormValues}
            required
          />
        </Form>
      </Popup>
    </>
  )
}

export default TenderPage
