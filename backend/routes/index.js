const router = require('express').Router()
const usersRoutes = require('./users')
const tendersRoutes = require('./tenders')
const { NotFoundError } = require('../constants/NotFoundError')

router.use('/users', usersRoutes)
router.use('/tenders', tendersRoutes)

router.use('*', () => {
  throw new NotFoundError('Недопустимый URL')
})

module.exports = router
