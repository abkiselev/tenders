import styles from './Select.module.css'

function Select({ name, onChange }) {
  return (
      <select className={styles.select} name={name} id={name} onChange={onChange}>
        <option value="0" key="0">Без участников</option>
        <option value="1" key="1">1 тестовый участник</option>
        <option value="2" key="2">2 тестовых участника</option>
        <option value="3" key="3">3 тестовых участника</option>
        <option value="4" key="4">4 тестовых участника</option>
        <option value="5" key="5">5 тестовых участника</option>
      </select>
  )
}

export default Select
