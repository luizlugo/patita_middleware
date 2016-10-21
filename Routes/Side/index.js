var routeName = baseRouteSuffix + "Sides";
var sideService = require(__base + 'Services/Side/');
var Side = {
	routes : [
		{
			method  : 'GET',
			path    : routeName,
			handler : sideService.getSides,
			config : {
				auth : false, // 'jwt'
			}
		},
		{
			method  : 'GET',
			path    : routeName + '/{id}',
			handler : sideService.getSide,
			config : {
				auth : false, // 'jwt'
			}
		},
		{
			method  : 'POST',
			path    : routeName,
			handler : sideService.addSide,
			config : {
				auth : false, // 'jwt'
			}
		},
		{
			method  : 'PUT',
			path    : routeName,
			handler : sideService.updateSide,
			config : {
				auth : false, // 'jwt'
			}
		},
		{
			method  : 'DELETE',
			path    : routeName + '/{id}',
			handler : sideService.deleteSide,
			config : {
				auth : false, // 'jwt'
			}
		},
	],
};
module.exports = Side;
