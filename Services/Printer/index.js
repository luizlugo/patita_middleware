var models = require(__base + 'Models/');

var printerService = (function(){
	function getPrinters(req, resp) {
		models
		.Printer
		.findAll({})
		.then(function(printers){
			resp({
				ok : true,
				printers : printers
			});
		})
		.catch(function(e){
			resp({
				ok : false,
				error : e,
			});
		});
	}

	function getPrinter(req, resp) {
		models
		.Printer
		.findAll({
			where : {
				id : req.params.id
			},
		})
		.then(function(printer){
			resp({
				ok : true,
				printer : printer
			});
		})
		.catch(function(e){
			resp({
				ok : false,
				error : e,
			});
		});
	}

	function addPrinter(req, resp) {
		models
		.Printer
		.create({
			name : req.payload.name,
			ipAddress : req.payload.ipAddress,
		})
		.then(function(printer) {
			resp({
				ok : true,
				printer : printer,
			});
		})
		.catch(function(error){
			resp({
				ok : false,
				error : error,
			});
		});
	}

	function updatePrinter(req, resp) {
		models
		.Printer
		.update({
			name : req.payload.name,
			ipAddress : req.payload.ipAddress,
		}, {
			where : {
				id : req.payload.id,
			},
			benchmark : true,
		})
		.then(function(affectedRows) {
			resp({
				ok : true,
				affectedRows : affectedRows[0],
			});
		})
		.catch(function(e){
			resp({
				ok : false,
				error : e,
			});
		});
	}

	function deletePrinter(req, resp) {
		models
		.Printer
		.update({active : false}, {
			where : {
				id : req.params.id,
			},
			benchmark : true,
		})
		.then(function(affectedRows) {
			resp({
				ok : true,
				affectedRows : affectedRows,
			});
		})
		.catch(function(e){
			resp({
				ok : false,
				error : e,
			});
		});
	}

	return {
		getPrinters   : getPrinters,
		getPrinter    : getPrinter,
		addPrinter    : addPrinter,
		updatePrinter : updatePrinter,
		deletePrinter : deletePrinter,
	};
})();
module.exports = printerService;
