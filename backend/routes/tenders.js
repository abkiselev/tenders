const router = require('express').Router()
const { celebrate, Joi } = require('celebrate')
const { getTenders, getTender, createTender } = require('../controllers/tenders')

router.get('/', getTenders)

router.get(
  '/:tenderName',
  // celebrate({
  //   params: Joi.object().keys(isValidUserId).unknown(true),
  // }),
  getTender
)

router.post(
  '/',
  // celebrate({
  //   body: Joi.object().keys({
  //     name: Joi.string().required().min(2).max(30),
  //     about: Joi.string().required().min(2).max(30),
  //   }),
  // }),
  createTender
)

module.exports = router
