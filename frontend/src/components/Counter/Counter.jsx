import styles from './Counter.module.css'
import { useEffect, useState } from 'react'
import { countCounterValue } from '../../helpers/countCounterValue'

function Counter({ tenderStartDate, initialValue, setIsNextMotion }) {
  const [value, setValue] = useState(initialValue)

  console.log('counter rerender')

  useEffect(() => {
    value < 1 && setIsNextMotion((prev) => prev + 1)

    const interval =
      value > 0 &&
      setInterval(() => {
        const { remainingSeconds } = countCounterValue(tenderStartDate)
        setValue(remainingSeconds)
      }, 1000)

    return () => clearInterval(interval)
  }, [value])

  return (
    <p className={`${styles.timer} ${value < 60 && styles._orange} ${value < 30 && styles._red}`}>
      {`${Math.floor(value / 60)}м. ${Math.floor(value % 60)}с.`}
    </p>
  )
}

export default Counter