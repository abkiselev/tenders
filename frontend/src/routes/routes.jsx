import MainPage from '../pages/MainPage/MainPage'
import TenderPage from '../pages/TenderPage/TenderPage'
import ErrorPage from '../components/Error/Error'

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
