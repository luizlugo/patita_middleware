var models = require(__base + 'Models/');

var productService = (function(){
	function getProducts(req, resp) {
		models
		.Product
		.findAll({})
		.then(function(products){
			resp({
				ok : true,
				products : products
			});
		})
		.catch(function(e){
			resp({
				ok : false,
				error : e,
			});
		});
	}

	function getProduct(req, resp) {
		models
		.Product
		.findAll({
			where : {
				id : req.params.id
			},
		})
		.then(function(product){
			resp({
				ok : true,
				product : product
			});
		})
		.catch(function(e){
			resp({
				ok : false,
				error : e,
			});
		});
	}

	function addProduct(req, resp) {
		models
		.Product
		.create({
			name : req.payload.name,
			avaragePreparationTime : req.payload.avaragePreparationTime,
			productCategoryId : req.payload.productCategoryId,
			productSubCategoryId : req.payload.productSubCategoryId,
			customerPrice : req.payload.customerPrice,
			unitCost : req.payload.unitCost,
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

	function updateProduct(req, resp) {
		models
		.Product
		.update({
			name : req.payload.name,
			avaragePreparationTime : req.payload.avaragePreparationTime,
			productCategoryId : req.payload.productCategoryId,
			productSubCategoryId : req.payload.productSubCategoryId,
			customerPrice : req.payload.customerPrice,
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

	function deleteProduct(req, resp) {
		models
		.Product
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
		getProducts   : getProducts,
		getProduct    : getProduct,
		addProduct    : addProduct,
		updateProduct : updateProduct,
		deleteProduct : deleteProduct,
	};
})();
module.exports = productService;
