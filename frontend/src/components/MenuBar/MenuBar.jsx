import './MenuBar.module.css'
import { Link } from 'react-router-dom'

function MenuBar() {
  return (
    <header>
      <img src="/favicon.ico" alt="Логотип" />

      <nav>
        <ul>
          <li>
            <Link to="/">Ссылка</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default MenuBar
