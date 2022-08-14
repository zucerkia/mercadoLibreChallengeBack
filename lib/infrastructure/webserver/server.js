const express = require('express')
const { RouterMain } = require('./routes/index.routes')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(RouterMain)

module.exports = { app }
