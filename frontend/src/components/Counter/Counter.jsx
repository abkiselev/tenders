import styles from './Counter.module.css'
import { useEffect, useState } from 'react'
import { countCounterValue } from '../../helpers/countCounterValue'

function Counter({ tenderStartDate, initialValue, goToNextMotion }) {
  const [value, setValue] = useState(initialValue)

  const formattedCounter = formatTime(value)

  useEffect(() => {
    value < 1 && goToNextMotion()

    const interval = setInterval(() => {
      const { remainingSeconds } = countCounterValue(tenderStartDate)
      setValue(remainingSeconds)
    }, 1000)

    return () => clearInterval(interval)
  }, [value])

  function formatTime(value) {
    const minutes = Math.floor(value / 60)
    const seconds = Math.floor(value % 60)

    return [minutes.toString().padStart(2, '0'), seconds.toString().padStart(2, '0')].join(':')
  }

  return (
    <p className={`${styles.timer} ${value < 60 && styles._orange} ${value < 30 && styles._red}`}>{formattedCounter}</p>
  )
}

export default Counter
