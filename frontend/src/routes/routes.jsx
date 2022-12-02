import MainPage from '../components/MainPage/MainPage'
import TenderPage from '../components/TenderPage/TenderPage'
import ErrorPage from '../error'

const routes = () => [
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/:tenderName',
    element: <TenderPage />,
  },
  {
    path: '*',
    element: <ErrorPage />,
  },
]

export default routes
