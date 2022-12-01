// import ReactDOM from 'react-dom/client'
// import { RouterProvider } from 'react-router-dom'
// import './index.css'
// import routes from './routes/routes'
// import App from './components/App/App'

// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(<RouterProvider router={routes} />)

import ReactDOM from 'react-dom/client'
import './index.css'
import App from './components/App/App'
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
