module.exports = function(sequelize, DataTypes) {
	var ProductSide = sequelize.define('ProductSide', {
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
		sideId : {
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

	return ProductSide;
};