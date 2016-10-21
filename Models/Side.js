module.exports = function(sequelize, DataTypes) {
	var Side = sequelize.define('Side', {
		id : {
			type 		 : DataTypes.UUID,
			defaultValue : DataTypes.UUIDV4,
			primaryKey	 : true,
		},
		name : {
			type : DataTypes.STRING,
		},
		customerCost : {
			type : DataTypes.DOUBLE,
		},
		unitCost : {
			type : DataTypes.DOUBLE,
		},
		active : {
			type : DataTypes.BOOLEAN,
			defaultValue : 1,
		}
	});

	return Side;
};