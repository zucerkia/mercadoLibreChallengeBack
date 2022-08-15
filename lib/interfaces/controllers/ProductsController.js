const GetProductById = require('../../application/use_cases/GetProductById')
const GetProductsByQuery = require('../../application/use_cases/GetProductsByQuery')

module.exports = {
	async getProductById(req, res, next) {
		try {
			const { id } = req.params
			const { name, lastname } = req.headers
			const result = await GetProductById(id, { name, lastname })
			res.send(result)
		} catch (error) {
			next(error)
		}
	},

	async getProductsByQuery(req, res, next) {
		try {
			const { q: query = '' } = req.query

			if (query) {
				const { name, lastname } = req.headers
				const result = await GetProductsByQuery(query, {
					name,
					lastname,
				})
				res.send(result)
			}
			next()
		} catch (error) {
			next(error)
		}
	},
}
