const {
	ProductsRepository,
} = require('../../domain/repositories/ProductsRepository')
const { ProductsStorage } = require('../../interfaces/storage/ProductsStorage')

const productsRepository = new ProductsRepository(new ProductsStorage())

module.exports = async (id, author) => {
	try {
		const {
			title,
			price,
			condition,
			sold_quantity,
			shipping,
			currency_id,
			pictures,
		} = await productsRepository.getProductById(id)
		const { plain_text } = await productsRepository.getProductDescription(
			id
		)

		return {
			author,
			item: {
				id,
				title,
				price: {
					currency: currency_id,
					amount: price,
					decimals: 0,
				},
				picture: pictures[0].secure_url,
				condition,
				sold_quantity,
				description: plain_text,
				free_shipping: shipping.free_shipping,
			},
		}
	} catch (error) {
		Promise(new Error(error))
	}
}
