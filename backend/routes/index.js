const router = require('express').Router()
const tendersRoutes = require('./tenders')
const { NotFoundError } = require('../constants/NotFoundError')

router.use('/tenders', tendersRoutes)

router.use('*', () => {
  throw new NotFoundError('Недопустимый URL')
})

module.exports = router
