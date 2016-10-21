var routeName = baseRouteSuffix + "OrderItems";
var orderItemService = require(__base + 'Services/OrderItem/');
var OrderItemRoutes = {
	routes : [
		{
			method  : 'GET',
			path    : routeName,
			handler : orderItemService.getOrderItems,
			config : {
				auth : false, // 'jwt'
			}
		},
		{
			method  : 'POST',
			path    : routeName,
			handler : orderItemService.addOrderItem,
			config : {
				auth : false, // 'jwt'
			}
		},
		{
			method  : 'GET',
			path    : routeName + "/Cancel/{id}",
			handler : orderItemService.cancelOrderItem,
			config : {
				auth : false, // 'jwt'
			}
		},
	],
};
module.exports = orderItemService;
