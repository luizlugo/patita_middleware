module.exports = function(sequelize, DataTypes) {
	var AddressType = sequelize.define('AddressType', {
		id : {
			type 		 : DataTypes.UUID,
			defaultValue : DataTypes.UUIDV4,
			primaryKey	 : true,
		},
		name : {
			type : DataTypes.STRING,
		},
		active : {
			type : DataTypes.BOOLEAN,
			defaultValue : true,
		}
	});

	return AddressType;
};