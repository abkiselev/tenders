const router = require('express').Router()
const { celebrate, Joi } = require('celebrate')
const { createUser, getUsers } = require('../controllers/users')

router.get('/', getUsers)

router.post(
  '/',
  celebrate({
    body: Joi.object().keys({
      name: Joi.string().required().min(2),
    }),
  }),
  createUser
)

module.exports = router
