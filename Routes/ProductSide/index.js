var routeName = baseRouteSuffix + "ProductSides";
var ProductSideService = require(__base + 'Services/ProductSide/');
var ProductSide = {
	routes : [
		{
			method  : 'GET',
			path    : routeName,
			handler : ProductSideService.getProductSides,
			config : {
				auth : false, // 'jwt'
			}
		},
		{
			method  : 'GET',
			path    : routeName + '/{id}',
			handler : ProductSideService.getProductSide,
			config : {
				auth : false, // 'jwt'
			}
		},
		{
			method  : 'POST',
			path    : routeName,
			handler : ProductSideService.addProductSide,
			config : {
				auth : false, // 'jwt'
			}
		},
		{
			method  : 'PUT',
			path    : routeName,
			handler : ProductSideService.updateProductSide,
			config : {
				auth : false, // 'jwt'
			}
		},
		{
			method  : 'DELETE',
			path    : routeName + '/{id}',
			handler : ProductSideService.deleteProductSide,
			config : {
				auth : false, // 'jwt'
			}
		},
	],
};
module.exports = ProductSide;
