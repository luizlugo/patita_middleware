var routeName = baseRouteSuffix + "Printers";
var printerService = require(__base + 'Services/Printer/');
var PrinterRoutes = {
	routes : [
		{
			method  : 'GET',
			path    : routeName,
			handler : printerService.getPrinters,
			config : {
				auth : false, // 'jwt'
			}
		},
		{
			method  : 'GET',
			path    : routeName + '/{id}',
			handler : printerService.getPrinter,
			config : {
				auth : false, // 'jwt'
			}
		},
		{
			method  : 'POST',
			path    : routeName,
			handler : printerService.addPrinter,
			config : {
				auth : false, // 'jwt'
			}
		},
		{
			method  : 'PUT',
			path    : routeName,
			handler : printerService.updatePrinter,
			config : {
				auth : false, // 'jwt'
			}
		},
		{
			method  : 'DELETE',
			path    : routeName + '/{id}',
			handler : printerService.deletePrinter,
			config : {
				auth : false, // 'jwt'
			}
		},
	],
};
module.exports = PrinterRoutes;
