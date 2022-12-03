import styles from './Counter.module.css'
import { useEffect, useState } from 'react'

function Counter({ initialValue, setNeedRefetch }) {
  const [value, setValue] = useState(initialValue)

  console.log(`страница ${Math.floor(value / 60)} мин ${Math.floor(value % 60)} сек `)

  useEffect(() => {
    const interval =
      value > 1 &&
      setInterval(() => {
        setValue(value - 1)
      }, 1000)

    value < 1 && setNeedRefetch(true)

    return () => clearInterval(interval)
  }, [value])

  return <p className={styles.timer}>{`${Math.floor(value / 60)}м. ${Math.floor(value % 60)}с.`}</p>
  // return <p className={styles.timer}>{(value / 60).toFixed(2).replace('.', ':')}</p>
}

export default Counter
