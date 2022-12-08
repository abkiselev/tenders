const router = require('express').Router()
const { celebrate, Joi } = require('celebrate')
const { getTenders, getTender, createTender } = require('../controllers/tenders')

router.get('/', getTenders)

router.get('/:tenderName', getTender)

router.post('/', createTender)

module.exports = router
