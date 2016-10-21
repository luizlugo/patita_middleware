var models = require(__base + 'Models/');

var orderService = (function(){
	function getOrders(req, resp) {
		models
		.Order
		.findAll({})
		.then(function(orders){
			resp({
				ok : true,
				orders : orders
			});
		})
		.catch(function(e){
			resp({
				ok : false,
				error : e,
			});
		});
	}

	function getOrder(req, resp) {
		models
		.Order
		.findAll({
			where : {
				id : req.params.id
			},
		})
		.then(function(order){
			resp({
				ok : true,
				order : order
			});
		})
		.catch(function(e){
			resp({
				ok : false,
				error : e,
			});
		});
	}

	function addOrder(req, resp) {
		var promises = [];
		var respObject = {};

		promises.push(
			models
			.Order
			.create({
				customerId : req.payload.customerId,
				addressId : req.payload.addressId,
				estimatedArrivalTime : req.payload.estimatedArrivalTime, // TODO: Define logic to calculate this
				hasDeliveryCharge : req.payload.hasDeliveryCharge,
				orderedBy : req.payload.orderedBy,
				deliveryInstructions : req.payload.deliveryInstructions,
				total : req.payload.total,
			})
			.then(function(order) {
				// Setting up response object
				respObject = {
					ok : true,
					order : order,
				};

				return Promise.map(req.payload.orderItems, function(orderItem) {
					models
					.orderItem
					.create({
						orderId : orderItem.orderId,
						productId : orderItem.productId,
						specialInstructions : orderItem.specialInstructions,
					});
				});
			})
		);

		Promise
		.all(promises)
		.then(function(){
			resp(respObject);
		})
		.catch(function(error) {
			resp({
				ok : false,
				error : error,
			});
		});
	}

	function cancelOrder(req, resp) {
		models
		.Order
		.update({
			active : false,
			status : 2, // Cancelled
			cancelledBY : req.payload.cancelledBY,
		}, {
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
		getOrders   : getOrders,
		getOrder    : getOrder,
		addOrder    : addOrder,
		cancelOrder : cancelOrder,
	};
})();
module.exports = orderService;
