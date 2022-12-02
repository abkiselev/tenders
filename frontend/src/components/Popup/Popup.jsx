import styles from './Popup.module.css'

function Popup({ title, children, onCloseClick, isOpen }) {
  const close = (e) => {
    e.target === e.currentTarget && onCloseClick()
  }

  return (
    <section className={`${styles.popup} ${isOpen && styles._visible}`} onClick={close}>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <button type="button" className={styles.close} onClick={close}>
          &times;
        </button>
        {children}
      </div>
    </section>
  )
}

export default Popup
