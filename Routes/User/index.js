var routeName = baseRouteSuffix + "Users";
var userService = require(__base + 'Services/User/');
var UserRoutes = {
	routes : [
		{
			method  : 'GET',
			path    : routeName,
			handler : userService.getUsers,
			config : {
				auth : false, // 'jwt'
			}
		},
		{
			method  : 'GET',
			path    : routeName + '/{id}',
			handler : userService.getUser,
			config : {
				auth : false, // 'jwt'
			}
		},
		{
			method  : 'POST',
			path    : routeName,
			handler : userService.addUser,
			config : {
				auth : false, // 'jwt'
			}
		},
		{
			method  : 'PUT',
			path    : routeName,
			handler : userService.updateUser,
			config : {
				auth : false, // 'jwt'
			}
		},
		{
			method  : 'DELETE',
			path    : routeName + '/{id}',
			handler : userService.deleteUser,
			config : {
				auth : false, // 'jwt'
			}
		},
	],
};
module.exports = UserRoutes;
