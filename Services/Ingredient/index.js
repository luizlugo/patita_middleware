var models = require(__base + 'Models/');

var ingredientService = (function(){
	function getIngredients(req, resp) {
		models
		.Ingredient
		.findAll({})
		.then(function(ingredients){
			resp({
				ok : true,
				ingredients : ingredients
			});
		})
		.catch(function(e){
			resp({
				ok : false,
				error : e,
			});
		});
	}

	function getIngredient(req, resp) {
		models
		.Ingredient
		.findAll({
			where : {
				id : req.params.id
			},
		})
		.then(function(ingredient){
			resp({
				ok : true,
				ingredient : ingredient
			});
		})
		.catch(function(e){
			resp({
				ok : false,
				error : e,
			});
		});
	}

	function addIngredient(req, resp) {
		models
		.Ingredient
		.create({
			name : req.payload.name,
			unitCost : req.payload.unitCost,
		})
		.then(function(ingredient) {
			resp({
				ok : true,
				ingredient : ingredient,
			});
		})
		.catch(function(error){
			resp({
				ok : false,
				error : error,
			});
		});
	}

	function updateIngredient(req, resp) {
		models
		.Ingredient
		.update({
			name : req.payload.name,
			unitCost : req.payload.email,
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

	function deleteIngredient(req, resp) {
		models
		.Ingredient
		.update({active : false},
			{
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
		getIngredients   : getIngredients,
		getIngredient    : getIngredient,
		addIngredient    : addIngredient,
		updateIngredient : updateIngredient,
		deleteIngredient : deleteIngredient,
	};
})();
module.exports = ingredientService;
