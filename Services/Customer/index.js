var models = require(__base + 'Models/');

var customerService = (function(){
	function getCustomers(req, resp) {
		models
		.Customer
		.findAll({})
		.then(function(customers){
			resp({
				ok : true,
				customers : customers
			});
		})
		.catch(function(e){
			resp({
				ok : false,
				error : e
			});
		});
	}

	function getCustomer(req, resp) {
		models
		.Customer
		.findAll({
			where : {
				id : req.params.id
			},
		})
		.then(function(customer){
			resp({
				ok : true,
				customer : customer
			});
		})
		.catch(function(e){
			resp({
				ok: false,
				error: e
			});
		});
	}

	function addCustomer(req, resp) {
		models
		.Customer
		.findAll({
			phone : req.payload.phone,
		})
		.then(function(customer){
			if (customer.length > 0) {
				// Customer already exists return error
				resp({
					ok : false,
					alreadyExists : true,
					error : 'Customer already exists on our databases',
				});
			} else {
				models
				.Customer
				.create({
					name : req.payload.name,
					phone : req.payload.phone,
					email : req.payload.email,
					address : req.payload.address,
				})
				.then(function(customer) {
					resp({
						ok : true,
						customer : customer,
					});
				})
				.catch(function(error){
					// Customer already exists return error
					resp({
						ok : false,
						alreadyExists : false,
						error : error,
					});
				});
			}
		});
	}

	function updateCustomer (req, resp){
		models
		.Customer
		.update({
			name : req.payload.name,
			email : req.payload.email,
			address : req.payload.address,
		}, {
			where : {
				phone : req.payload.phone,
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
				ok: false,
				error: e
			});
		});
	}

	function deleteCustomer(req, resp) {
		models
		.Customer
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
				ok: false,
				error: e
			});
		});
	}

	return {
		getCustomers   : getCustomers,
		getCustomer    : getCustomer,
		addCustomer    : addCustomer,
		updateCustomer : updateCustomer,
		deleteCustomer : deleteCustomer,
	};
})();
module.exports = customerService;
