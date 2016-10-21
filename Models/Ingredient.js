module.exports = function(sequelize, DataTypes) {
	var Ingredient = sequelize.define('Ingredient', {
		id : {
			type 		 : DataTypes.UUID,
			defaultValue : DataTypes.UUIDV4,
			primaryKey	 : true,
		},
		name : {
			type : DataTypes.STRING,
		},
		unitCost : {
			type : DataTypes.DOUBLE,
		},
		active : {
			type : DataTypes.BOOLEAN,
			defaultValue : true,
		}
	});

	return Ingredient;
};