var routeName = baseRouteSuffix + "ProductSubCategories";
var ProductSubCategoryService = require(__base + 'Services/ProductSubCategory/');
var ProductSubCategory = {
	routes : [
		{
			method  : 'GET',
			path    : routeName,
			handler : ProductSubCategoryService.getProductSubCategories,
			config : {
				auth : false, // 'jwt'
			}
		},
		{
			method  : 'GET',
			path    : routeName + '/{id}',
			handler : ProductSubCategoryService.getProductSubCategory,
			config : {
				auth : false, // 'jwt'
			}
		},
		{
			method  : 'POST',
			path    : routeName,
			handler : ProductSubCategoryService.addProductSubCategory,
			config : {
				auth : false, // 'jwt'
			}
		},
		{
			method  : 'PUT',
			path    : routeName,
			handler : ProductSubCategoryService.updateProductSubCategory,
			config : {
				auth : false, // 'jwt'
			}
		},
		{
			method  : 'DELETE',
			path    : routeName + '/{id}',
			handler : ProductSubCategoryService.deleteProductSubCategory,
			config : {
				auth : false, // 'jwt'
			}
		},
	],
};
module.exports = ProductSubCategory;
