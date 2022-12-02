import styles from './CheckBox.module.css'

function CheckBox({ name, label, onChange }) {
  return (
    <label className={styles.label} htmlFor={name}>
      <input className={styles.checkbox} type="checkbox" name={name} id={name} onChange={onChange} />
      {label}
    </label>
  )
}

export default CheckBox
