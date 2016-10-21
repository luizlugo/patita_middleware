var routeName = baseRouteSuffix + "Products";
var productService = require(__base + 'Services/Product/');
var ProductRoutes = {
	routes : [
		{
			method  : 'GET',
			path    : routeName,
			handler : productService.getProducts,
			config : {
				auth : false, // 'jwt'
			}
		},
		{
			method  : 'GET',
			path    : routeName + '/{id}',
			handler : productService.getProduct,
			config : {
				auth : false, // 'jwt'
			}
		},
		{
			method  : 'POST',
			path    : routeName,
			handler : productService.addProduct,
			config : {
				auth : false, // 'jwt'
			}
		},
		{
			method  : 'PUT',
			path    : routeName,
			handler : productService.updateProduct,
			config : {
				auth : false, // 'jwt'
			}
		},
		{
			method  : 'DELETE',
			path    : routeName + '/{id}',
			handler : productService.deleteProduct,
			config : {
				auth : false, // 'jwt'
			}
		},
	],
};
module.exports = ProductRoutes;
