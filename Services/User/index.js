var models = require(__base + 'Models/');

var userService = (function(){
	function getUsers(req, resp) {
		models
		.User
		.findAll({})
		.then(function(users){
			resp({
				ok : true,
				users : users
			});
		})
		.catch(function(error){
			resp({
				ok : false,
				error : error,
			});
		});
	}

	function getUser(req, resp) {
		models
		.User
		.findAll({
			where : {
				id : req.params.id
			},
		})
		.then(function(user){
			resp({
				ok : true,
				user : user
			});
		})
		.catch(function(error){
			resp({
				ok : false,
				error : error,
			});
		});
	}

	function addUser(req, resp) {
		models
		.User
		.create({
			firstName : req.payload.firstName,
			middleName : req.payload.middleName,
			lastName : req.payload.lastName,
			userId : req.payload.userId,
			password : req.payload.password,
			phone : req.payload.phone,
			address : req.payload.address,
			socialSecurityNumber : req.payload.socialSecurityNumber,
			driverLicence : req.payload.driverLicence,
			userRoleId : req.payload.userRoleId,
			thirdPartyCompanyId : req.payload.thirdPartyCompanyId,
		})
		.then(function(user) {
			resp({
				ok : true,
				user : user,
			});
		})
		.catch(function(error){
			resp({
				ok : false,
				error : error,
			});
		});
	}

	function updateUser(req, resp) {
		models
		.User
		.update({
			firstName : req.payload.firstName,
			middleName : req.payload.middleName,
			lastName : req.payload.lastName,
			userId : req.payload.userId,
			password : req.payload.password,
			phone : req.payload.phone,
			address : req.payload.address,
			socialSecurityNumber : req.payload.socialSecurityNumber,
			driverLicence : req.payload.driverLicence,
			userRoleId : req.payload.userRoleId,
			thirdPartyCompanyId : req.payload.thirdPartyCompanyId,
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
		.catch(function(error){
			resp({
				ok : false,
				error : error,
			});
		});
	}

	function deleteUser(req, resp) {
		models
		.User
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
		.catch(function(error){
			resp({
				ok : false,
				error : error,
			});
		});
	}

	return {
		getUsers   : getUsers,
		getUser     : getUser,
		addUser     : addUser,
		updateUser  : updateUser,
		deleteUser : deleteUser,
	};
})();
module.exports = userService;
