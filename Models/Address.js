module.exports = function(sequelize, DataTypes) {
	var Address = sequelize.define('Address', {
		id : {
			type 		 : DataTypes.UUID,
			defaultValue : DataTypes.UUIDV4,
			primaryKey	 : true,
		},
		address : {
			type : DataTypes.STRING,
		},
		type : {
			type : DataTypes.UUID,
		},
		instructions : {
			type : DataTypes.STRING,
		},
		userId : {
			type : DataTypes.DOUBLE,
		},
		active : {
			type : DataTypes.BOOLEAN,
			defaultValue : true,
		}
	});

	return Address;
};