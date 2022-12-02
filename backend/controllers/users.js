const User = require('../models/user')
const { BadRequestError } = require('../constants/BadRequestError')
const { ConflictError } = require('../constants/ConflictError')
const { CREATED_CODE } = require('../constants/codes')

module.exports.getUsers = (req, res, next) => {
  User.find({})
    .then((users) => res.send(users))
    .catch(next)
}

module.exports.createUser = async (req, res, next) => {
  try {
    const { name } = req.body
    const user = await User.create({ name })
    return res.status(CREATED_CODE).send(user)
  } catch (error) {
    if (error.name === 'ValidationError') {
      return next(new BadRequestError('Некорректные данные для создания пользователя'))
    }
    if (error.code === 11000) {
      return next(new ConflictError('Такой пользователь уже существует'))
    }
    return next(error)
  }
}
