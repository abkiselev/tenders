import Main from '../components/Main/Main'
import ErrorPage from '../error'

const routes = () => [
  {
    path: '/',
    element: <Main />,
  },
  {
    path: '*',
    element: <ErrorPage />,
  },
]

export default routes
