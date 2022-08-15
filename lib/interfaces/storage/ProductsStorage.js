const axios = require('axios')

class ProductsStorage {
	async getProductById(id) {
		try {
			const response = await axios.get(
				`${process.env.MELI_API}/items/${id}`
			)
			return response.data
		} catch (error) {
			return Promise(new Error(error))
		}
	}

	async getProductDescription(id) {
		try {
			const response = await axios.get(
				`${process.env.MELI_API}/items/${id}/description`
			)
			return response.data
		} catch (error) {
			return Promise(new Error(error))
		}
	}

	async getProductsByQuery(query) {
		try {
			const response = await axios.get(
				`${process.env.MELI_API}/sites/MLA/search?q=${query}`
			)
			return response.data
		} catch (error) {
			return Promise(new Error(error))
		}
	}
}

module.exports = { ProductsStorage }
