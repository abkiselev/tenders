import { Link } from 'react-router-dom'

export default function ErrorPage({ text }) {
  return (
    <main>
      <div id="error-page">
        <h1>404</h1>
        <p>
          <strong>{text || 'Все потерялось'}</strong>, давайте вернемся на <Link to="/">ГЛАВНУЮ</Link>
        </p>
      </div>
    </main>
  )
}
