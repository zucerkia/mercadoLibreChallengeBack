require('dotenv').config()
const express = require('express')
const cors = require('cors')

const { RouterMain } = require('./routes/index.routes')

const app = express()

app.use(cors({ methods: ['GET'] }))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(RouterMain)

module.exports = { app }
