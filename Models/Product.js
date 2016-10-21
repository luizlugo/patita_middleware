module.exports = function(sequelize, DataTypes) {
	var Product = sequelize.define('Product', {
		id : {
			type 		 : DataTypes.UUID,
			defaultValue : DataTypes.UUIDV4,
			primaryKey	 : true,
		},
		name : {
			type : DataTypes.STRING,
		},
		avaragePreparationTime : {
			type : DataTypes.INTEGER, // In minutes
		},
		productCategoryId : {
			type : DataTypes.UUID, // Breakfast, Meal, Dinner, All
		},
		productSubCategoryId : {
			type : DataTypes.UUID, // Tortas, Jugos, Chocomilk, etc
		},
		customerPrice : {
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

	return Product;
};