import styles from './Button.module.css'

function Button({ type, text, onClick, disabled }) {
  return (
    <button className={styles.button_main} type={type} onClick={onClick} disabled={disabled}>
      {text}
    </button>
  )
}

export default Button
