module.exports = {
	async getProduct(req, res, next) {
		try {
			console.log(req.params)
			next('respondiendo')
		} catch (error) {
			next(error)
		}
	},
}
