module.exports = function(sequelize, DataTypes) {
	var Order = sequelize.define('Order', {
		id : {
			type 		 : DataTypes.UUID,
			defaultValue : DataTypes.UUIDV4,
			primaryKey	 : true,
		},
		customerId : {
			type : DataTypes.STRING, // Could be null in case that the order came from direct order
		},
		address : {
			type : DataTypes.STRING,
		},
		latitude : {
			type : DataTypes.STRING,
		},
		longitude : {
			type : DataTypes.STRING,
		},
		estimatedArrivalTime : {
			type : DataTypes.TIME,
		},
		hasDeliveryCharge : {
			type : DataTypes.BOOLEAN
		},
		orderedBy : {
			type : DataTypes.UUID,
		},
		deliveredBy : {
			type : DataTypes.UUID,	
		},
		deliveryInstructions : {
			type : DataTypes.TEXT,
		},
		approvedBy : {
			type : DataTypes.UUID,
		},
		cancelledBy : {
			type : DataTypes.UUID,	
		},
		total : {
			type : DataTypes.DOUBLE,
		},
		statusId : {
			type : DataTypes.INTEGER,
			defaultValue : 1, // Created
		},
		active : {
			type : DataTypes.BOOLEAN,
			defaultValue : true,
		}
	});

	return Order;
};