var models = require(__base + 'Models/');

var productIngredientService = (function(){
	function getProductIngredients(req, resp) {
		models
		.productIngredient
		.findAll({})
		.then(function(productIngredients){
			resp({
				ok : true,
				productIngredients : productIngredients
			});
		})
		.catch(function(e){
			resp({
				ok : false,
				error : e,
			});
		});
	}

	function getProductIngredient(req, resp) {
		models
		.ProductIngredient
		.findAll({
			where : {
				id : req.params.id
			},
		})
		.then(function(productIngredient){
			resp({
				ok : true,
				productIngredient : productIngredient
			});
		})
		.catch(function(e){
			resp({
				ok : false,
				error : e,
			});
		});
	}

	function addProductIngredient(req, resp) {
		models
		.ProductIngredient
		.create({
			name : req.payload.name,
			productId : req.payload.productId,
			ingredientId : req.payload.ingredientId,
			quantity : req.payload.quantity,
		})
		.then(function(product) {
			resp({
				ok : true,
				product : product,
			});
		})
		.catch(function(error){
			resp({
				ok : false,
				error : error,
			});
		});
	}

	function updateProductIngredient(req, resp) {
		models
		.ProductIngredient
		.update({
			name : req.payload.name,
			productId : req.payload.productId,
			ingredientId : req.payload.ingredientId,
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

	function deleteProductIngredient(req, resp) {
		models
		.ProductIngredient
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
		getProductIngredients   : getProductIngredients,
		getProductIngredient    : getProductIngredient,
		addProductIngredient    : addProductIngredient,
		updateProductIngredient : updateProductIngredient,
		deleteProductIngredient : deleteProductIngredient,
	};
})();
module.exports = productIngredientService;
