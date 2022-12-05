import styles from './Form.module.css'
import Loader from '../../Loader/Loader'
import Button from '../Button/Button'

function Form({ children, error, onSubmit, buttonText, disabled }) {
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <p className={styles.error}>{error}</p>
      <fieldset className={styles.fieldset}>{children}</fieldset>
      {disabled ? <Loader /> : <Button type="submit" text={buttonText} disabled={disabled} />}
    </form>
  )
}

export default Form
