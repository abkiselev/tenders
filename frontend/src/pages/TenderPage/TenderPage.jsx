import styles from './TenderPage.module.css'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Error from '../../components/Error/Error'
import Heading from '../../components/Heading/Heading'
import Loader from '../../components/Loader/Loader'
import { getTender } from '../../helpers/fetching'
import Counter from '../../components/Counter/Counter'
import { counterDurationSeconds, countCounterValue } from '../../helpers/countCounterValue'

function TenderPage() {
  const { tenderName } = useParams()
  const [isLoading, setIsLoading] = useState(true)
  const [tenderData, setTenderData] = useState({})
  const [tenderStartDate, setTenderStartDate] = useState(null)
  const [activeParticipant, setActiveParticipant] = useState(null)
  const [initialCounterValue, setInitialCounterValue] = useState(null)

  useEffect(() => {
    fetchTender()
  }, [])

  function goToNextMotion() {
    // если НЕ надо обновлять ставки с сервера после окончания хода
    setInitialCounterValue(counterDurationSeconds)
    setActiveParticipant(activeParticipant === tenderData.participants.length - 1 ? 0 : activeParticipant + 1)

    // если надо обновлять ставки с сервера
    // рефетч и ререндер компонента
  }

  function fetchTender() {
    getTender(tenderName).then((res) => {
      if (!res.url) {
        setIsLoading(false)
        return
      }

      const date = new Date(res.createdAt)
      const startTime = date.getTime(res.createdAt)
      setTenderStartDate(startTime)

      res.participants.length !== 0 && setParameters(startTime, res.participants.length)
      setTenderData(res)
      setIsLoading(false)
    })
  }

  function setParameters(startTime, participantsQuantity) {
    const { remainingSeconds, gapRoundes } = countCounterValue(startTime)
    setInitialCounterValue(remainingSeconds)
    setActiveParticipant(Math.floor(gapRoundes % participantsQuantity))
  }

  return (
    <main>
      {isLoading ? (
        <div className={styles.loader}>
          <Loader />
        </div>
      ) : !tenderData.url ? (
        <Error text="Такого тендера не существует" />
      ) : (
        <>
          <Link className={styles.back_link} to="/">
            &lsaquo; к списку тендеров
          </Link>

          <section className={styles.tender}>
            <Heading title={tenderData.name} />

            <ul className={styles.list}>
              {tenderData.participants.length === 0 ? (
                <p>участников нет...</p>
              ) : (
                tenderData.participants.map((participant, index) => (
                  <li
                    key={participant.name}
                    className={`${styles.partisipant} ${index === activeParticipant && styles._active}`}
                  >
                    <div className={styles.head}>
                      <h2 className={styles.name}>{participant.name}</h2>
                      <p className={styles.status}>{participant.isOnline ? 'online' : 'offline'}</p>
                    </div>
                    {index === activeParticipant && (
                      <Counter
                        tenderStartDate={tenderStartDate}
                        initialValue={initialCounterValue}
                        goToNextMotion={goToNextMotion}
                      />
                    )}
                    <p className={styles.bet}>{participant.price === 0 ? 'нет ставки' : participant.price}</p>
                  </li>
                ))
              )}
            </ul>
          </section>
        </>
      )}
    </main>
  )
}

export default TenderPage
