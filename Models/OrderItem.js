module.exports = function(sequelize, DataTypes) {
	var OrderItem = sequelize.define('OrderItem', {
		id : {
			type 		 : DataTypes.UUID,
			defaultValue : DataTypes.UUIDV4,
			primaryKey	 : true,
		},
		orderId : {
			type : DataTypes.UUID,
		},
		productId : {
			type : DataTypes.UUID,	
		},
		specialInstructions : {
			type : DataTypes.TEXT,
		},
		approvedBy : {
			type : DataTypes.UUID,
		},
		active : {
			type : DataTypes.BOOLEAN,
			defaultValue : 1,
		},
	});

	return OrderItem;
};