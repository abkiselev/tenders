const Tender = require('../models/tender')
const { BadRequestError } = require('../constants/BadRequestError')
const { NotFoundError } = require('../constants/NotFoundError')
const { ConflictError } = require('../constants/ConflictError')
const { CREATED_CODE } = require('../constants/codes')

module.exports.getTenders = (req, res, next) => {
  Tender.find({})
    .then((tenders) => res.send(tenders))
    .catch(next)
}

module.exports.getTender = async (req, res, next) => {
  try {
    const tender = await Tender.findOne({ url: req.params.tenderName })

    if (!tender) {
      throw new NotFoundError('Тендер не найден')
    }
    return res.send(tender)
  } catch (error) {
    return next(error)
  }
}

module.exports.createTender = async (req, res, next) => {
  console.log(req.body)
  try {
    const tender = await Tender.create(req.body)
    return res.status(CREATED_CODE).send(tender)
  } catch (error) {
    if (error.name === 'ValidationError') {
      console.log(error)
      return next(new BadRequestError('Некорректные данные для создания'))
    }
    if (error.code === 11000) {
      return next(new ConflictError('Такое название уже существует'))
    }
    return next(error)
  }
}
