const express = require('express')

// Controller
const {
	getProductById,
	getProductsByQuery,
} = require('../../../interfaces/controllers/ProductsController')

const ProductsRouter = express.Router()

ProductsRouter.get('/items/:id', getProductById)
ProductsRouter.get('/items/:q?', getProductsByQuery)

module.exports = { ProductsRouter }
