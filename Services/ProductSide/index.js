var models = require(__base + 'Models/');

var productSideService = (function(){
	function getProductSides(req, resp) {
		models
		.ProductSide
		.findAll({})
		.then(function(productSides){
			resp({
				ok : true,
				productSides : productSides
			});
		})
		.catch(function(e){
			resp({
				ok : false,
				error : e,
			});
		});
	}

	function getProductSide(req, resp) {
		models
		.ProductSide
		.findAll({
			where : {
				id : req.params.id
			},
		})
		.then(function(productSide){
			resp({
				ok : true,
				productSide : productSide
			});
		})
		.catch(function(e){
			resp({
				ok : false,
				error : e,
			});
		});
	}

	function addProductSide(req, resp) {
		models
		.ProductSide
		.create({
			name : req.payload.name,
			productId : req.payload.productId,
			sideId : req.payload.sideId,
			quantity : req.payload.quantity,
		})
		.then(function(productSide) {
			resp({
				ok : true,
				productSide : productSide,
			});
		})
		.catch(function(error){
			resp({
				ok : false,
				error : error,
			});
		});
	}

	function updateProductSide(req, resp) {
		models
		.ProductSide
		.update({
			name : req.payload.name,
			productId : req.payload.productId,
			sideId : req.payload.sideId,
			quantity : req.payload.quantity,
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

	function deleteProductSide(req, resp) {
		models
		.ProductSide
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
		getProductSides   : getProductSides,
		getProductSide    : getProductSide,
		addProductSide    : addProductSide,
		updateProductSide : updateProductSide,
		deleteProductSide : deleteProductSide,
	};
})();
module.exports = productSideService;
