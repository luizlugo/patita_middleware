var models = require(__base + 'Models/');

var orderItemService = (function(){
	function getOrderItems(req, resp) {
		models
		.OrderItem
		.findAll({
			where : {
				orderId : req.params.orderId
			},
		})
		.then(function(orderItems){
			resp({
				ok : true,
				orderItems : orderItems
			});
		})
		.catch(function(e){
			resp({
				ok : false,
				error : e,
			});
		});
	}

	function addOrderItem(req, resp) {
		models
		.OrderItem
		.create({
			orderId : req.payload.orderId,
			productId : req.payload.productId,
			specialInstructions : req.payload.specialInstructions,
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

	function cancelOrderItem(req, resp) {
		models
		.OrderItem
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
		getOrderItems   : getOrderItems,
		addOrderItem    : addOrderItem,
		cancelOrderItem : cancelOrderItem,
	};
})();
module.exports = orderItemService;
