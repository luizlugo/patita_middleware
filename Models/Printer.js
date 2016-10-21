module.exports = function(sequelize, DataTypes) {
	var Printer = sequelize.define('Printer', {
		id : {
			type 		 : DataTypes.UUID,
			defaultValue : DataTypes.UUIDV4,
			primaryKey	 : true,
		},
		name : {
			type : DataTypes.STRING,
		},
		ipAddress : {
			type : DataTypes.STRING,
		},
		active : {
			type : DataTypes.BOOLEAN,
			defaultValue : 1,
		}
	});

	return Printer;
};