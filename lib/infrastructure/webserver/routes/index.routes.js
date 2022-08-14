const express = require('express')

const RouterMain = express.Router()
const { ProductsRouter } = require('./products.routes')

RouterMain.use('/api', ProductsRouter)

module.exports = { RouterMain }
