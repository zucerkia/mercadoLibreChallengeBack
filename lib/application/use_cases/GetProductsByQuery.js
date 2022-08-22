const {
	ProductsRepository,
} = require('../../domain/repositories/ProductsRepository')
const { ProductsStorage } = require('../../interfaces/storage/ProductsStorage')

const productsRepository = new ProductsRepository(new ProductsStorage())

module.exports = async (query, author) => {
	try {
		const { results, filters } =
			await productsRepository.getProductsByQuery(query)
		let categories = []
		const items = results.map(
			({
				id,
				title,
				price,
				shipping,
				thumbnail,
				condition,
				currency_id,
				sold_quantity,
				address,
			}) => ({
				id,
				title,
				price: {
					currency: currency_id,
					amount: price,
					decimals: 0,
				},
				picture: thumbnail,
				condition,
				sold_quantity,
				free_shipping: shipping.free_shipping,
				city_name: address.city_name,
			})
		)

		if (filters.length > 0) {
			categories = filters
				.find((filter) => filter.id === 'category')
				.values.map(({ name }) => name)
		}

		return {
			author,
			categories,
			items,
		}
	} catch (error) {
		return Promise(new Error(error))
	}
}
