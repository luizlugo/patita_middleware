var routeName = baseRouteSuffix + "Order";
var orderService = require(__base + 'Services/Order/');
var OrderRoutes = {
	routes : [
		{
			method  : 'GET',
			path    : routeName,
			handler : orderService.getOrders,
			config : {
				auth : false, // 'jwt'
			}
		},
		{
			method  : 'GET',
			path    : routeName + '/{id}',
			handler : orderService.getOrder,
			config : {
				auth : false, // 'jwt'
			}
		},
		{
			method  : 'POST',
			path    : routeName,
			handler : orderService.addOrder,
			config : {
				auth : false, // 'jwt'
			}
		},
		{
			method  : 'PUT',
			path    : routeName,
			handler : orderService.updateOrder,
			config : {
				auth : false, // 'jwt'
			}
		},
		{
			method  : 'DELETE',
			path    : routeName + '/{id}',
			handler : orderService.deleteOrder,
			config : {
				auth : false, // 'jwt'
			}
		},
	],
};
module.exports = OrderRoutes;
