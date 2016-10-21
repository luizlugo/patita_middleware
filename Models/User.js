module.exports = function(sequelize, DataTypes) {
	var User = sequelize.define('User', {
		id : {
			type 		 : DataTypes.UUID,
			defaultValue : DataTypes.UUIDV4,
			primaryKey	 : true,
		},
		firstName : {
			type : DataTypes.STRING,
		},
		middleName : {
			type : DataTypes.STRING,
		},
		lastName : {
			type : DataTypes.STRING,
		},
		userId : {
			type : DataTypes.STRING, // Initial FirstName + Random number
		},
		password : {
			type : DataTypes.STRING,
		},
		phone : {
			type : DataTypes.STRING,
		},
		address : {
			type : DataTypes.STRING,
		},
		socialSecurityNumber : {
			type : DataTypes.STRING,
		},
		driverLicence : {
			type : DataTypes.STRING,
		},
		userRoleId : {
			type : DataTypes.UUID, // Deliver, Cheff, Cashier, Salesman, Admin
		},
		thirdPartyCompanyId : {
			type : DataTypes.UUID,
		},
		active : {
			type : DataTypes.BOOLEAN,
			defaultValue : 1,
		}
	});

	return User;
};