import styles from './InputText.module.css'

function Input({ type, name, placeholder, onChange, required }) {
  return (
    <input
      className={styles.input}
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      required={required}
    />
  )
}

export default Input
