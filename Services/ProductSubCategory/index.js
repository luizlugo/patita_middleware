var models = require(__base + 'Models/');

var productSubCategoryService = (function(){
	function getProductSubCategories(req, resp) {
		models
		.ProductSubCategory
		.findAll({})
		.then(function(productSubCategories){
			resp({
				ok : true,
				productSubCategories : productSubCategories
			});
		})
		.catch(function(e){
			resp({
				ok : false,
				error : e,
			});
		});
	}

	function getProductSubCategory(req, resp) {
		models
		.ProductSubCategory
		.findAll({
			where : {
				id : req.params.id
			},
		})
		.then(function(productSubCategory){
			resp({
				ok : true,
				productSubCategory : productSubCategory
			});
		})
		.catch(function(e){
			resp({
				ok : false,
				error : e,
			});
		});
	}

	function addProductSubCategory(req, resp) {
		models
		.ProductSubCategory
		.create({
			name : req.payload.name,
			productCategoryId : req.payload.productCategoryId,
		})
		.then(function(productSubCategory) {
			resp({
				ok : true,
				productSubCategory : productSubCategory,
			});
		})
		.catch(function(error){
			resp({
				ok : false,
				error : error,
			});
		});
	}

	function updateProductSubCategory(req, resp) {
		models
		.ProductSubCategory
		.update({
			name : req.payload.name,
			productCategoryId : req.payload.productCategoryId,
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

	function deleteProductSubCategory(req, resp) {
		models
		.ProductSubCategory
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
		getProductSubCategories   : getProductSubCategories,
		getProductSubCategory     : getProductSubCategory,
		addProductSubCategory     : addProductSubCategory,
		updateProductSubCategory  : updateProductSubCategory,
		deleteProductSubCategory : deleteProductSubCategory,
	};
})();
module.exports = productSubCategoryService;
