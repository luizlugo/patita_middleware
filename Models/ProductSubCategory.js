module.exports = function(sequelize, DataTypes) {
	var ProductSubCategory = sequelize.define('ProductSubCategory', {
		id : {
			type 		 : DataTypes.UUID,
			defaultValue : DataTypes.UUIDV4,
			primaryKey	 : true,
		},
		name : {
			type : DataTypes.STRING, // Tortas, Jugos, Chocomilk, etc
		},
		productCategoryId : {
			type : DataTypes.UUID,
		},
		active : {
			type : DataTypes.BOOLEAN,
			defaultValue : 1,
		}
	});

	return ProductSubCategory;
};