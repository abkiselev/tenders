import './App.module.css'
import { useRoutes } from 'react-router-dom'
import routes from '../../routes/routes'
import MenuBar from '../MenuBar/MenuBar'

function App() {
  const routing = useRoutes(routes())

  return (
    <>
      <MenuBar />
      {routing}
    </>
  )
}

export default App
