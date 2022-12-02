const cors = require('cors')
const express = require('express')
const helmet = require('helmet')
require('dotenv').config()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const { errors } = require('celebrate')
const routes = require('./routes/index')
const { handleErrors } = require('./middlewares/handleErrors.js')
const { requestLogger, errorLogger } = require('./middlewares/logger')

const { PORT = 5000 } = process.env
const app = express()

mongoose.connect(process.env.MongoURI, {
  useNewUrlParser: true,
})


app.use(helmet())
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}))
app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(requestLogger)

app.use(routes)

app.use(errorLogger)

app.use(errors())

app.use((err, req, res, next) => {
  handleErrors(err, req, res, next)
})

app.listen(PORT, (err) => {
  if (err) {
    console.log('Ошибка при запуске', ...err)
  }
  console.log(`Сервер запущен на порту ${PORT}`)
})
