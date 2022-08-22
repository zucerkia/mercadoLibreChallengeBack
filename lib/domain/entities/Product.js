class ProductEntity {
	constructor({
		id,
		title,
		price,
		picture,
		condition,
		sold_quantity,
		description,
		free_shipping,
	}) {
		this.id = id
		this.title = title
		this.price = price
		this.picture = picture
		this.condition = condition
		this.sold_quantity = sold_quantity
		this.description = description
		this.free_shipping = free_shipping
	}
}
