const express = require('express')

// Controller
const {
	getProduct,
} = require('../../../interfaces/controllers/ProductsController')

const ProductsRouter = express.Router()

ProductsRouter.get('/items/:id', getProduct)

module.exports = { ProductsRouter }
