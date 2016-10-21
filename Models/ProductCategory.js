module.exports = function(sequelize, DataTypes) {
	var ProductCategory = sequelize.define('ProductCategory', {
		id : {
			type 		 : DataTypes.UUID,
			defaultValue : DataTypes.UUIDV4,
			primaryKey	 : true,
		},
		name : {
			type : DataTypes.STRING, // Breakfast, Meal, Dinner, All
		},
		active : {
			type : DataTypes.BOOLEAN,
		}
	});

	return ProductCategory;
};