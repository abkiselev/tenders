import styles from './Heading.module.css'
import Button from '../UI/Button/Button'

function Heading({ title, buttonType, buttonTitle, onClick }) {
  return (
    <div className={styles.heading}>
      <h1>{title}</h1>
      {buttonTitle && <Button type={buttonType} text={buttonTitle} onClick={onClick} />}
    </div>
  )
}

export default Heading
