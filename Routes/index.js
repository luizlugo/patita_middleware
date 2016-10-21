/**
* API Routes object
**/
var Routes = _.union(
	require(__base + 'Routes/User/').routes,
	require(__base + 'Routes/OrderItem/').routes,
	require(__base + 'Routes/Printer/').routes,
	require(__base + 'Routes/Product/').routes,
	require(__base + 'Routes/ProductIngredient/').routes,
	require(__base + 'Routes/ProductSide/').routes,
	require(__base + 'Routes/ProductSubCategory/').routes,
	require(__base + 'Routes/Side/').routes,
	require(__base + 'Routes/User/').routes
);
module.exports = Routes;
