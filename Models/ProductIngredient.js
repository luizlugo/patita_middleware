module.exports = function(sequelize, DataTypes) {
	var ProductIngredient = sequelize.define('ProductIngredient', {
		id : {
			type 		 : DataTypes.UUID,
			defaultValue : DataTypes.UUIDV4,
			primaryKey	 : true,
		},
		name : {
			type : DataTypes.STRING,
		},
		productId : {
			type : DataTypes.UUID,
		},
		ingredientId : {
			type : DataTypes.UUID,
		},
		quantity : {
			type : DataTypes.STRING, // Kg, Mg, Lts, Gramos
		},
		active : {
			type : DataTypes.BOOLEAN,
			defaultValue : 1,
		}
	});

	return ProductIngredient;
};