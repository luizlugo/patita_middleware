var routeName = baseRouteSuffix + "ProductIngredients";
var productIngredientService = require(__base + 'Services/ProductIngredient/');
var ProductIngredient = {
	routes : [
		{
			method  : 'GET',
			path    : routeName,
			handler : productIngredientService.getProductIngredients,
			config : {
				auth : false, // 'jwt'
			}
		},
		{
			method  : 'GET',
			path    : routeName + '/{id}',
			handler : productIngredientService.getProductIngredient,
			config : {
				auth : false, // 'jwt'
			}
		},
		{
			method  : 'POST',
			path    : routeName,
			handler : productIngredientService.addProductIngredient,
			config : {
				auth : false, // 'jwt'
			}
		},
		{
			method  : 'PUT',
			path    : routeName,
			handler : productIngredientService.updateProductIngredient,
			config : {
				auth : false, // 'jwt'
			}
		},
		{
			method  : 'DELETE',
			path    : routeName + '/{id}',
			handler : productIngredientService.deleteProductIngredient,
			config : {
				auth : false, // 'jwt'
			}
		},
	],
};
module.exports = ProductIngredient;
