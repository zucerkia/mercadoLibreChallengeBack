class ProductsRepository {
	constructor(repository) {
		this.repository = repository
	}

	getProductById(id) {
		return this.repository.getProductById(id)
	}
	getProductDescription(id) {
		return this.repository.getProductDescription(id)
	}
	getProductsByQuery(query) {
		return this.repository.getProductsByQuery(query)
	}
}

module.exports = { ProductsRepository }
