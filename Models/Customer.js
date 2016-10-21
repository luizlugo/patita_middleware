module.exports = function(sequelize, DataTypes) {
	var Customer = sequelize.define('Customer', {
		id : {
			type 		 : DataTypes.UUID,
			defaultValue : DataTypes.UUIDV4,
			primaryKey	 : true,
		},
		name : {
			type : DataTypes.STRING,
		},
		phone : {
			type : DataTypes.STRING,
		},
		email : {
			type : DataTypes.STRING,
		},
		password : {
			type : DataTypes.STRING,
		},
		address : {
			type : DataTypes.STRING,
		},
		latitude : {
			type : DataTypes.STRING,
		},
		longitude : {
			type : DataTypes.STRING,
		},
		active : {
			type : DataTypes.BOOLEAN,
			defaultValue : true,
		}
	});

	return Customer;
};