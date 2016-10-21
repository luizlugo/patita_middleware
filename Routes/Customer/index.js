var routeName = baseRouteSuffix + "Customer";
var customerService = require(__base + 'Services/Customer/');
var CustomerRoutes = {
	routes : [
		{
			method  : 'GET',
			path    : routeName,
			handler : customerService.getCustomers,
			config : {
				auth : false, // 'jwt'
			}
		},
		{
			method  : 'GET',
			path    : routeName + '/{id}',
			handler : customerService.getCustomer,
			config : {
				auth : false, // 'jwt'
			}
		},
		{
			method  : 'POST',
			path    : routeName,
			handler : customerService.addCustomer,
			config : {
				auth : false, // 'jwt'
			}
		},
		{
			method  : 'PUT',
			path    : routeName,
			handler : customerService.updateCustomer,
			config : {
				auth : false, // 'jwt'
			}
		},
		{
			method  : 'DELETE',
			path    : routeName + '/{id}',
			handler : customerService.deleteCustomer,
			config : {
				auth : false, // 'jwt'
			}
		},
	],
};
module.exports = CustomerRoutes;
