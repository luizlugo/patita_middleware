var models = require(__base + 'Models/');

var sideService = (function(){
	function getSides(req, resp) {
		models
		.Side
		.findAll({})
		.then(function(sides){
			resp({
				ok : true,
				sides : sides
			});
		})
		.catch(function(e){
			resp({
				ok : false,
				error : e,
			});
		});
	}

	function getSide(req, resp) {
		models
		.Side
		.findAll({
			where : {
				id : req.params.id
			},
		})
		.then(function(side){
			resp({
				ok : true,
				side : side
			});
		})
		.catch(function(e){
			resp({
				ok : false,
				error : e,
			});
		});
	}

	function addSide(req, resp) {
		models
		.Side
		.create({
			name : req.payload.name,
			customerCost : req.payload.customerCost,
			unitCost : req.payload.unitCost,
		})
		.then(function(side) {
			resp({
				ok : true,
				side : side,
			});
		})
		.catch(function(error){
			resp({
				ok : false,
				error : error,
			});
		});
	}

	function updateSide(req, resp) {
		models
		.Side
		.update({
			name : req.payload.name,
			customerCost : req.payload.customerCost,
			unitCost : req.payload.unitCost,
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

	function deleteSide(req, resp) {
		models
		.Side
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
		getSides    : getSides,
		getSide     : getSide,
		addSide     : addSide,
		updateSide  : updateSide,
		deleteSide  : deleteSide,
	};
})();
module.exports = sideService;
