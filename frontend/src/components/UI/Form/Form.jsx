import Loader from '../../Loader/Loader'
import Button from '../Button/Button'
import styles from './Form.module.css'

function Form({ children, onSubmit, buttonText, disabled }) {
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <fieldset className={styles.fieldset}>{children}</fieldset>
      {disabled ? <Loader /> : <Button type="submit" text={buttonText} disabled={disabled} />}
    </form>
  )
}

export default Form
