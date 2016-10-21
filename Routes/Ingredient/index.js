var routeName = baseRouteSuffix + "Ingredient";
var ingredientService = require(__base + 'Services/Ingredient/');
var IngredientRoutes = {
	routes : [
		{
			method  : 'GET',
			path    : routeName,
			handler : ingredientService.getIngredients,
			config : {
				auth : false, // 'jwt'
			}
		},
		{
			method  : 'GET',
			path    : routeName + '/{id}',
			handler : ingredientService.getIngredient,
			config : {
				auth : false, // 'jwt'
			}
		},
		{
			method  : 'POST',
			path    : routeName,
			handler : ingredientService.addIngredient,
			config : {
				auth : false, // 'jwt'
			}
		},
		{
			method  : 'PUT',
			path    : routeName,
			handler : ingredientService.updateIngredient,
			config : {
				auth : false, // 'jwt'
			}
		},
		{
			method  : 'DELETE',
			path    : routeName + '/{id}',
			handler : ingredientService.deleteIngredient,
			config : {
				auth : false, // 'jwt'
			}
		},
	],
};
module.exports = IngredientRoutes;
